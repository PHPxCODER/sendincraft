'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import AnimatedLogo from './animated-logo';

interface LogoListProps {
    title?: string;
    className?: string;
}

const logos = [
    {
        src: '/trusted-by/RDP.svg',
        alt: 'RDP',
        width: 42,
        height: 42
    },
    {
        src: '/trusted-by/writers.png',
        alt: 'ORACLE',
        width: 136,
        height: 17
    },
    {
        src: '/trusted-by/tiktok.svg',
        alt: 'TikTok',
        width: 133,
        height: 32
    },
    {
        src: '/trusted-by/intel.svg',
        alt: 'intel',
        width: 76,
        height: 30
    },
    {
        src: '/trusted-by/ibm.svg',
        alt: 'IBM',
        width: 74,
        height: 30
    },
    {
        src: '/trusted-by/american-airlines.svg',
        alt: 'American Airlines',
        width: 147,
        height: 24
    }
];

export default function LogoList({ 
    title = "Trusted by developers from the world's leading organizations",
    className 
}: LogoListProps) {
    const baseDelay = 2.9;
    
    // Show all 6 logos and group them into sets of 2 for 3 columns
    const displayedLogos = logos.slice(0, 6);
    const logoGroups = displayedLogos.reduce((groups, logo, index) => {
        const groupIndex = Math.floor(index / 2);
        if (!groups[groupIndex]) {
            groups[groupIndex] = [];
        }
        groups[groupIndex].push(logo);
        return groups;
    }, [] as Array<typeof logos>);

    return (
        <div className={cn('py-12', className)}>
            <div className="mx-auto max-w-4xl">
                <h2 className="font-aeonik-pro text-greyscale-100 text-description mx-auto max-w-[312px] text-center text-pretty">
                    {title}
                </h2>
                <div className="relative grid grid-cols-3 gap-8 py-10 md:gap-4">
                    {logoGroups.map((group, i) => (
                        <div key={i} className="relative flex aspect-[8/2] flex-col items-center justify-center">
                            {group.map(({ src, alt, width, height }, index) => (
                                <AnimatedLogo
                                    key={`${alt}-${index}`}
                                    repeatDelay={baseDelay}
                                    delay={index * baseDelay + i * 0.1}
                                    className="absolute"
                                >
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={width}
                                        height={height}
                                        loading="lazy"
                                    />
                                </AnimatedLogo>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}