'use client';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface SocialShareProps {
  title: string;
  url?: string;
  className?: string;
}

export default function SocialShare({ title, url, className = '' }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  
  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };
  
  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };
  
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="text-sm font-medium">Share:</span>
      <div className="flex items-center gap-2">
        {/* Desktop share buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleTwitterShare}>
            <Twitter className="w-4 h-4" />
          </Button>
          
          <Button variant="outline" size="icon" onClick={handleLinkedInShare}>
            <Linkedin className="w-4 h-4" />
          </Button>
          
          <Button variant="outline" size="icon" onClick={handleCopyLink}>
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}