import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    className?: string;
}

export default function GradientText({ 
    children, 
    className, 
    ...rest 
}: GradientTextProps) {
    return (
        <span
            className={cn(
                '-mb-1 block bg-linear-145 from-[#f8a1ba] to-white to-50% bg-clip-text pb-1 text-transparent',
                className
            )}
            {...rest}
        >
            {children}
        </span>
    );
}