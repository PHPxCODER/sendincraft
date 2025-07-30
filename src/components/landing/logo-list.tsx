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
        src: '/images/logos/trusted-by/apple.svg',
        alt: 'Apple',
        width: 42,
        height: 48
    },
    {
        src: '/images/logos/trusted-by/oracle.svg',
        alt: 'ORACLE',
        width: 136,
        height: 17
    },
    {
        src: '/images/logos/trusted-by/tiktok.svg',
        alt: 'TikTok',
        width: 133,
        height: 32
    },
    {
        src: '/images/logos/trusted-by/intel.svg',
        alt: 'intel',
        width: 76,
        height: 30
    },
    {
        src: '/images/logos/trusted-by/ibm.svg',
        alt: 'IBM',
        width: 74,
        height: 30
    },
    {
        src: '/images/logos/trusted-by/american-airlines.svg',
        alt: 'American Airlines',
        width: 147,
        height: 24
    },
    {
        src: '/images/logos/trusted-by/deloitte.svg',
        alt: 'Deloitte.',
        width: 103,
        height: 20
    },
    {
        src: '/images/logos/trusted-by/gm.svg',
        alt: 'GM',
        width: 48,
        height: 48
    },
    {
        src: '/images/logos/trusted-by/ey.svg',
        alt: 'EY',
        width: 46,
        height: 48
    },
    {
        src: '/images/logos/trusted-by/nestle.svg',
        alt: 'Nestle',
        width: 150,
        height: 34
    },
    {
        src: '/images/logos/trusted-by/bosch.svg',
        alt: 'BOSCH',
        width: 110,
        height: 37
    },
    {
        src: '/images/logos/trusted-by/decathlon.svg',
        alt: 'DECATHLON',
        width: 127,
        height: 32
    }
];

export default function LogoList({ 
    title = "Trusted by developers from the world's leading organizations",
    className 
}: LogoListProps) {
    const baseDelay = 2.9;
    
    // Group logos into sets of 3
    const logoGroups = logos.reduce((groups, logo, index) => {
        const groupIndex = Math.floor(index / 3);
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
                <div className="relative grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:gap-4">
                    {logoGroups.map((group, i) => (
                        <div key={i} className="relative flex aspect-[8/2] flex-col items-center justify-center">
                            {group.map(({ src, alt, width, height }, index) => (
                                <AnimatedLogo
                                    key={`${alt}-${index}`}
                                    repeatDelay={baseDelay * 2}
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