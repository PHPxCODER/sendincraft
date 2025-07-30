'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import GradientText from './ui/gradient-text';
import Noise from './ui/noise';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

// Platform data with icon paths
const platforms = [
    {
        name: 'JS',
        icon: '/icons/javascript.svg',
        href: '/docs/quick-starts/web',
        primary: '#FFCA28'
    },
    {
        name: 'Flutter',
        icon: '/icons/flutter.svg',
        href: '/docs/quick-starts/flutter',
        primary: '#00569E',
        secondary: '#47C5FB'
    },
    {
        name: 'Node.js',
        icon: '/icons/node.svg',
        href: '/docs/quick-starts/node',
        primary: '#8CC84B'
    },
    {
        name: 'Python',
        icon: '/icons/python.svg',
        href: '/docs/quick-starts/python',
        primary: '#F9C600',
        secondary: '#327EBD'
    },
    {
        name: 'iOS',
        icon: '/icons/apple.svg',
        href: '/docs/quick-starts/apple',
        primary: '#fff'
    },
    {
        name: 'Android',
        icon: '/icons/android.svg',
        href: '/docs/quick-starts/android',
        primary: '#3DDC84'
    },
    {
        name: 'Dart',
        icon: '/icons/dart.svg',
        href: '/docs/quick-starts/dart',
        primary: '#01579B',
        secondary: '#29B6F6'
    },
    {
        name: 'PHP',
        icon: '/icons/php.svg',
        href: '/docs/quick-starts/php',
        primary: '#8892BF'
    },
    {
        name: 'Ruby',
        icon: '/icons/ruby.svg',
        href: '/docs/quick-starts/ruby',
        primary: '#791C12',
        secondary: '#9E120B'
    },
    {
        name: 'Deno',
        icon: '/icons/deno.svg',
        href: '/docs/quick-starts/deno',
        primary: '#fff'
    },
    {
        name: '.NET',
        icon: '/icons/net.svg',
        href: '/docs/quick-starts/dotnet',
        primary: '#512BD4'
    },
    {
        name: 'Go',
        icon: '/icons/go.svg',
        href: '/docs/quick-starts/go',
        primary: '#fff'
    },
    {
        name: 'Swift',
        icon: '/icons/swift.svg',
        href: '/docs/quick-starts/swift',
        primary: '#F88A36',
        secondary: '#FD2020'
    },
    {
        name: 'React',
        icon: '/icons/react.svg',
        href: '/docs/quick-starts/react',
        primary: '#53C1DE'
    },
    {
        name: 'Kotlin',
        icon: '/icons/kotlin.svg',
        href: '/docs/quick-starts/kotlin',
        primary: '#6D74E1',
        secondary: '#E1725C'
    }
];

// Analytics tracking function (placeholder)
const trackEvent = (eventName: string) => {
    // Replace with your analytics implementation
    console.log('Track event:', eventName);
};

export default function Platforms() {
    return (
        <div className="border-smooth relative z-10 border-y border-dashed">
            <div className="container flex flex-col items-center max-md:pt-4 md:flex-row">
                <GradientText>
                    <span className="flex items-center pr-4 text-sm font-medium md:w-full md:max-w-[175px]">
                        Designed for the tools you work with
                    </span>
                </GradientText>
                
                <div className={cn(
                    'flex w-full flex-nowrap overflow-clip md:overflow-visible',
                    'mask-r-from-75% mask-r-to-99% mask-l-from-75% mask-l-to-99% mask-alpha backdrop-blur-3xl md:mask-none'
                )}>
                    {[1, 2].map((_, repeatIndex) => (
                        <div
                            key={repeatIndex}
                            className={cn(
                                'divide-smooth animate-scroll-x flex w-max flex-1 grow flex-nowrap divide-dashed md:w-full md:[animation:none] md:divide-x md:[animation-play-state:paused]',
                                {
                                    'md:hidden': repeatIndex === 0
                                }
                            )}
                        >
                            <TooltipProvider delayDuration={0}>
                                {platforms.map((platform, index) => (
                                    <Tooltip key={`${repeatIndex}-${index}`} delayDuration={0}>
                                        <div
                                            className="contents"
                                            style={{
                                                '--primary-color': platform.primary,
                                                '--secondary-color': platform.secondary,
                                                '--animation-delay': `${index * 25}ms`
                                            } as React.CSSProperties}
                                        >
                                            <TooltipTrigger
                                                className={cn(
                                                    'border-smooth group animate-fade-in relative mt-4 flex h-16 w-16 items-center justify-center border-dashed md:mt-0 md:w-full lg:border-r',
                                                    {
                                                        'lg:border-l': index === 0
                                                    }
                                                )}
                                                aria-hidden={index < platforms.length - 1}
                                                asChild
                                            >
                                                <Link
                                                    href={platform.href}
                                                    onClick={() =>
                                                        trackEvent(
                                                            `technologies-${platform.name.replace(' ', '-').toLowerCase()}-click`
                                                        )
                                                    }
                                                >
                                                    <Image
                                                        src={platform.icon}
                                                        alt={platform.name}
                                                        width={32}
                                                        height={32}
                                                        className="h-8 w-auto grayscale transition-all duration-500 group-hover:grayscale-0"
                                                    />
                                                    <div className={cn(
                                                        'absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100',
                                                        'bg-gradient-to-tl from-transparent to-transparent',
                                                        'hover:from-[var(--primary-color,#fff)]/4 hover:to-[var(--secondary-color,transparent)]/10'
                                                    )}>
                                                        <Noise opacity={0.1} />
                                                    </div>
                                                </Link>
                                            </TooltipTrigger>
                                            
                                            <TooltipContent
                                                sideOffset={8}
                                                side="top"
                                                className={cn(
                                                    'text-primary bg-greyscale-900 relative rounded-md border-0 px-2.5 py-1 text-sm',
                                                    'data-[state="closed"]:animate-slide-down-fade data-[state="instant-open"]:animate-slide-up-fade data-[state="delayed-open"]:animate-slide-up-fade'
                                                )}
                                            >
                                                {platform.name}
                                                <div className="absolute inset-0 rounded-md bg-gradient-to-tl from-[var(--primary-color,#fff)]/4 to-[var(--secondary-color,transparent)]/10" />
                                            </TooltipContent>
                                        </div>
                                    </Tooltip>
                                ))}
                            </TooltipProvider>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}