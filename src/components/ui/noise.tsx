import { cn } from '@/lib/utils';
import { SVGAttributes } from 'react';

interface NoiseProps extends SVGAttributes<SVGElement> {
    invert?: boolean;
    opacity?: number;
    grainSize?: number;
    animate?: boolean;
    className?: string;
}

export default function Noise({
    invert = false,
    opacity = 1,
    grainSize = 2.5,
    animate = false,
    className = '',
    ...rest
}: NoiseProps) {
    const baseFrequency = grainSize / 1;

    return (
        <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('pointer-events-none absolute inset-0', className)}
            style={{
                opacity,
                filter: invert ? 'invert(1)' : 'none'
            }}
            {...rest}
        >
            <filter id="noise">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency={baseFrequency}
                    numOctaves={3}
                    stitchTiles="stitch"
                    seed={0}
                >
                    {animate && (
                        <animate
                            attributeName="seed"
                            from="0"
                            to="100"
                            dur="5s"
                            repeatCount="indefinite"
                        />
                    )}
                </feTurbulence>
                <feColorMatrix
                    type="matrix"
                    values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0"
                />
                <feComponentTransfer>
                    <feFuncR type="table" tableValues="0 1" />
                    <feFuncG type="table" tableValues="0 1" />
                    <feFuncB type="table" tableValues="0 1" />
                </feComponentTransfer>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
    );
}