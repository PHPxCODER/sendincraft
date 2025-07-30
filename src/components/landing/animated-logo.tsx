'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { cn } from '@/lib/utils';

interface AnimatedLogoProps {
    children: React.ReactNode;
    delay: number;
    repeatDelay: number;
    className?: string;
}

export default function AnimatedLogo({ 
    children, 
    delay, 
    repeatDelay, 
    className 
}: AnimatedLogoProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        animate(
            elementRef.current,
            {
                filter: ['blur(5px)', 'blur(0px)', 'blur(0px)', 'blur(5px)'],
                y: [10, 0, 0, -10],
                opacity: [0, 1, 1, 0]
            },
            {
                delay,
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay,
                repeatType: 'loop',
                times: [0, 0.1, 0.9, 1]
            }
        );
    }, [delay, repeatDelay]);

    return (
        <div
            ref={elementRef}
            style={{
                transform: 'translateY(10px)',
                opacity: 0,
                filter: 'blur(5px)'
            }}
            className={cn('transition-opacity will-change-transform', className)}
        >
            {children}
        </div>
    );
}