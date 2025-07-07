import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { render } from '@react-email/render'
import WelcomeEmailTemplate from '@/lib/EmailTemplate'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Email validation schema
const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
})

// Helper function to get client IP
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const real = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (real) {
    return real.trim()
  }
  
  return 'unknown'
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate email
    const { email } = emailSchema.parse(body)
    
    // Get client information
    const ipAddress = getClientIP(request)
    const userAgent = request.headers.get('user-agent') || undefined
    
    // Check if email already exists
    const existingSubscription = await prisma.subscription.findUnique({
      where: { email }
    })
    
    if (existingSubscription) {
      return NextResponse.json(
        { success: false, error: 'Email already registered' },
        { status: 400 }
      )
    }
    
    // Generate email HTML using React Email
    const emailHtml = await render(
      WelcomeEmailTemplate({
        email,
        siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://sendincraft.com',
      })
    )
    
    const emailSubject = 'Welcome to SendinCraft - Your transactional email journey starts now! 🚀'
    
    // Send confirmation email
    const { data, error: resendError } = await resend.emails.send({
      from: 'SendinCraft Inc <notify@sendincraft.com>', // Replace with your verified domain
      to: [email],
      subject: emailSubject,
      html: emailHtml,
    })

    if (resendError) {
      console.error('Resend error:', resendError)
      
      // Log failed email attempt
      await prisma.emailLog.create({
        data: {
          email,
          subject: emailSubject,
          status: 'failed',
          error: resendError.message,
        }
      })
      
      return NextResponse.json(
        { success: false, error: 'Failed to send confirmation email' },
        { status: 500 }
      )
    }

    // If email sent successfully, save to database
    const subscription = await prisma.subscription.create({
      data: {
        email,
        emailSentId: data?.id,
        ipAddress,
        userAgent,
        source: 'coming-soon',
        isVerified: true, // Email was sent successfully
      }
    })

    // Log successful email
    await prisma.emailLog.create({
      data: {
        email,
        subject: emailSubject,
        status: 'sent',
        resendId: data?.id,
        subscriptionId: subscription.id,
      }
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed! Check your email for confirmation.',
        emailId: data?.id,
        subscriptionId: subscription.id
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('API error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

// GET endpoint to check if email exists and get subscription stats
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  const stats = searchParams.get('stats')
  
  // Get subscription stats
  if (stats === 'true') {
    try {
      const totalSubscriptions = await prisma.subscription.count()
      const verifiedSubscriptions = await prisma.subscription.count({
        where: { isVerified: true }
      })
      const recentSubscriptions = await prisma.subscription.count({
        where: {
          subscribedAt: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000), // Last 24 hours
          }
        }
      })
      
      return NextResponse.json({
        total: totalSubscriptions,
        verified: verifiedSubscriptions,
        recent: recentSubscriptions
      })
    } catch (error) {
      console.error('Stats error:', error)
      return NextResponse.json({ error: 'Failed to get stats' }, { status: 500 })
    }
  }
  
  // Check if specific email exists
  if (!email) {
    return NextResponse.json({ exists: false })
  }
  
  try {
    const subscription = await prisma.subscription.findUnique({
      where: { email },
      select: { id: true, subscribedAt: true, isVerified: true }
    })
    
    return NextResponse.json({ 
      exists: !!subscription,
      subscription: subscription || null
    })
  } catch (error) {
    console.error('Email check error:', error)
    return NextResponse.json({ exists: false })
  }
}