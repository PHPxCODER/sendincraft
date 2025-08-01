import React from 'react'
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
  Button,
  Hr,
  Font,
} from '@react-email/components'

interface WelcomeEmailProps {
  email: string
  siteUrl?: string
}

export default function WelcomeEmailTemplate({ 
  siteUrl = 'https://sendincraft.com' 
}: WelcomeEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Welcome to SendinCraft - Your transactional email journey starts here!</Preview>
      
      <Body style={{ 
        backgroundColor: '#f8fafc',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <Container style={{ 
          margin: '0 auto',
          padding: '20px 0 48px',
          maxWidth: '560px'
        }}>
          
          {/* Header with Gradient Background */}
          <Section style={{
            backgroundColor: '#6366f1',
            borderRadius: '12px 12px 0 0',
            padding: '48px 24px',
            textAlign: 'center'
          }}>
            <Heading style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#ffffff',
              margin: '0 0 8px 0',
              lineHeight: '1.2'
            }}>
              Welcome to SendinCraft!
            </Heading>
            <Text style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0',
              lineHeight: '1.5'
            }}>
              Your transactional email journey starts here
            </Text>
          </Section>

          {/* Main Content Container */}
          <Section style={{
            backgroundColor: '#ffffff',
            borderRadius: '0 0 12px 12px',
            padding: '48px 32px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            
            {/* Success Icon and Title */}
            <Section style={{ textAlign: "center", marginBottom: "32px" }}>
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                margin: "0 auto 24px",
                fontSize: "40px",
                color: "#ffffff",
                fontWeight: "bold",
                lineHeight: "80px",
                textAlign: "center",
                display: "block"
              }}>
                ✓
              </div>

              <Heading style={{
                fontSize: "28px",
                fontWeight: "600",
                color: "#111827",
                margin: "0",
                lineHeight: "1.2"
              }}>
                You&apos;re All Set!
              </Heading>
            </Section>

            {/* Welcome Message */}
            <Text style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#4b5563',
              margin: '0 0 32px 0',
              textAlign: 'center'
            }}>
              Thank you for joining SendinCraft! We&apos;re excited to help you deliver reliable, 
              scalable transactional emails powered by AWS SES.
            </Text>

            {/* Features Section */}
            <Section style={{
              backgroundColor: '#f1f5f9',
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '32px'
            }}>
              <Heading style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1e293b',
                margin: '0 0 16px 0',
                lineHeight: '1.3'
              }}>
                🚀 What You Get with SendinCraft
              </Heading>
              
              <Section style={{ marginBottom: '12px' }}>
                <Text style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#475569',
                  margin: '0 0 8px 0'
                }}>
                  📧 Reliable transactional email delivery via AWS SES
                </Text>
                <Text style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#475569',
                  margin: '0 0 8px 0'
                }}>
                  📊 Real-time analytics and delivery tracking
                </Text>
                <Text style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#475569',
                  margin: '0 0 8px 0'
                }}>
                  🔧 Simple REST API and SDKs for easy integration
                </Text>
                <Text style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#475569',
                  margin: '0 0 8px 0'
                }}>
                  🎨 Beautiful email templates and drag-drop editor
                </Text>
                <Text style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#475569',
                  margin: '0'
                }}>
                  ⚡ High deliverability with AWS infrastructure
                </Text>
              </Section>
            </Section>

            {/* Getting Started Notice */}
            <Section style={{
              backgroundColor: '#fef3c7',
              border: '1px solid #fcd34d',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '32px'
            }}>
              <Text style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#92400e',
                margin: '0',
                lineHeight: '1.5',
                textAlign: 'center'
              }}>
                🎯 <strong>Ready to Start?</strong> Check your dashboard for API keys and documentation
              </Text>
            </Section>

            {/* Next Steps Message */}
            <Text style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#4b5563',
              margin: '0 0 32px 0',
              textAlign: 'center'
            }}>
              Your account is ready to go! Log in to your dashboard to grab your API keys, 
              explore our documentation, and send your first transactional email.
            </Text>

            {/* CTA Button */}
            <Section style={{ textAlign: 'center' }}>
              <Button
                href={`${siteUrl}/dashboard`}
                style={{
                  backgroundColor: '#6366f1',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'inline-block',
                  padding: '14px 32px',
                  border: 'none'
                }}
              >
                Go to Dashboard
              </Button>
            </Section>
          </Section>

          {/* Spacer */}
          <Section style={{ height: '32px' }}></Section>

          {/* Footer */}
          <Section style={{
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            padding: '32px 24px',
            textAlign: 'center'
          }}>
            <Text style={{
              fontSize: '14px',
              color: '#6b7280',
              margin: '0 0 16px 0',
              lineHeight: '1.5'
            }}>
              Need help getting started?
            </Text>

            {/* Help Links */}
            <Section style={{ marginBottom: '24px' }}>
              <Row>
                <Column align="center">
                  <Link
                    href={`${siteUrl}/docs`}
                    style={{
                      color: '#6366f1',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      margin: '0 12px'
                    }}
                  >
                    Documentation
                  </Link>
                </Column>
                <Column align="center">
                  <Link
                    href={`${siteUrl}/support`}
                    style={{
                      color: '#6366f1',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      margin: '0 12px'
                    }}
                  >
                    Support
                  </Link>
                </Column>
                <Column align="center">
                  <Link
                    href={`${siteUrl}/examples`}
                    style={{
                      color: '#6366f1',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      margin: '0 12px'
                    }}
                  >
                    Examples
                  </Link>
                </Column>
              </Row>
            </Section>

            <Hr style={{
              borderColor: '#e5e7eb',
              margin: '24px 0'
            }} />

            <Text style={{
              fontSize: '12px',
              color: '#9ca3af',
              margin: '0 0 8px 0',
              lineHeight: '1.4'
            }}>
              SendinCraft - Reliable Transactional Email Service
            </Text>

            <Text style={{
              fontSize: '12px',
              color: '#9ca3af',
              margin: '0',
              lineHeight: '1.4'
            }}>
              If you didn&apos;t sign up for this account, please contact our support team.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}