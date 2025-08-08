"use client";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
    staticOnMobile?: boolean;
}

interface Beam {
    x: number;
    y: number;
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number, isDarkMode: boolean): Beam {
    const angle = -35 + Math.random() * 10;
    const hueBase = isDarkMode ? 190 : 210;
    const hueRange = isDarkMode ? 70 : 50;

    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 30 + Math.random() * 60,
        length: height * 2.5,
        angle: angle,
        speed: 0.6 + Math.random() * 1.2,
        opacity: 0.12 + Math.random() * 0.16,
        hue: hueBase + Math.random() * hueRange,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

export default function BeamsBackground({
    className,
    intensity = "strong",
    staticOnMobile = true,
    children,
}: AnimatedGradientBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const staticCanvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const MINIMUM_BEAMS = 20;
    const isDarkModeRef = useRef<boolean>(false);
    const [isMobile, setIsMobile] = useState(false);
    const [staticImageReady, setStaticImageReady] = useState(false);

    // Wrap opacityMap with useMemo to prevent recreation on every render
    const opacityMap = useMemo(() => ({
        subtle: 0.80,
        medium: 0.85,
        strong: 1,
    }), []);

    // Wrap with useCallback to prevent recreation
    const getMobileOpacityMap = useCallback(() => ({
        subtle: 1,
        medium: 1,
        strong: 1,
    }), []);

    // Check if device is mobile
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);

        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    // Get container dimensions - wrapped with useCallback
    const getContainerDimensions = useCallback(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            return {
                width: rect.width || window.innerWidth,
                height: rect.height || window.innerHeight
            };
        }
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }, []);

    // Draw beam function - wrapped with useCallback
    const drawBeam = useCallback((ctx: CanvasRenderingContext2D, beam: Beam, forMobile = false) => {
        ctx.save();
        ctx.translate(beam.x, beam.y);
        ctx.rotate((beam.angle * Math.PI) / 180);

        const currentOpacityMap = forMobile ? getMobileOpacityMap() : opacityMap;
        
        const pulsingOpacity =
            beam.opacity *
            (0.8 + Math.sin(beam.pulse) * 0.2) *
            currentOpacityMap[intensity];

        const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

        const saturation = isDarkModeRef.current ? "85%" : "75%";
        const lightness = isDarkModeRef.current ? "65%" : "45%";

        gradient.addColorStop(0, `hsla(${beam.hue}, ${saturation}, ${lightness}, 0)`);
        gradient.addColorStop(0.1, `hsla(${beam.hue}, ${saturation}, ${lightness}, ${pulsingOpacity * 0.5})`);
        gradient.addColorStop(0.4, `hsla(${beam.hue}, ${saturation}, ${lightness}, ${pulsingOpacity})`);
        gradient.addColorStop(0.6, `hsla(${beam.hue}, ${saturation}, ${lightness}, ${pulsingOpacity})`);
        gradient.addColorStop(0.9, `hsla(${beam.hue}, ${saturation}, ${lightness}, ${pulsingOpacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${beam.hue}, ${saturation}, ${lightness}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
        ctx.restore();
    }, [intensity, opacityMap, getMobileOpacityMap]);

    // Generate static image for mobile - wrapped with useCallback
    const generateStaticImage = useCallback(() => {
        const staticCanvas = staticCanvasRef.current;
        if (!staticCanvas) return;

        const ctx = staticCanvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = getContainerDimensions();
        
        staticCanvas.width = width;
        staticCanvas.height = height;
        staticCanvas.style.width = `${width}px`;
        staticCanvas.style.height = `${height}px`;

        const totalBeams = MINIMUM_BEAMS;
        const staticBeams = Array.from({ length: totalBeams }, () =>
            createBeam(width, height, isDarkModeRef.current)
        );

        ctx.clearRect(0, 0, width, height);
        ctx.filter = "blur(35px)";

        staticBeams.forEach((beam) => {
            drawBeam(ctx, beam, true);
        });

        setStaticImageReady(true);
    }, [getContainerDimensions, drawBeam]);

    useEffect(() => {
        // Update dark mode
        const updateDarkMode = () => {
            isDarkModeRef.current = document.documentElement.classList.contains("dark");
        };
        updateDarkMode();

        if (isMobile && staticOnMobile) {
            // Wait a bit for container to have proper dimensions
            const timer = setTimeout(generateStaticImage, 100);
            return () => clearTimeout(timer);
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const observer = new MutationObserver(updateDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        const updateCanvasSize = () => {
            const { width, height } = getContainerDimensions();
            
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);

            const totalBeams = MINIMUM_BEAMS * 1.5;
            beamsRef.current = Array.from({ length: totalBeams }, () =>
                createBeam(width, height, isDarkModeRef.current)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function resetBeam(beam: Beam, index: number, totalBeams: number) {
            const { width, height } = getContainerDimensions();
            
            const column = index % 3;
            const spacing = width / 3;

            const hueBase = isDarkModeRef.current ? 190 : 210;
            const hueRange = isDarkModeRef.current ? 70 : 50;

            beam.y = height + 100;
            beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
            beam.width = 100 + Math.random() * 100;
            beam.speed = 0.5 + Math.random() * 0.4;
            beam.hue = hueBase + (index * hueRange) / totalBeams;
            beam.opacity = 0.2 + Math.random() * 0.1;
            return beam;
        }

        function animate() {
            if (!canvas || !ctx) return;

            const { width, height } = getContainerDimensions();
            ctx.clearRect(0, 0, width, height);
            ctx.filter = "blur(35px)";

            const totalBeams = beamsRef.current.length;
            beamsRef.current.forEach((beam, index) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                if (beam.y + beam.length < -100) {
                    resetBeam(beam, index, totalBeams);
                }

                drawBeam(ctx, beam, false);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            observer.disconnect();
        };
    }, [intensity, isMobile, staticOnMobile, drawBeam, generateStaticImage, getContainerDimensions]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950",
                className
            )}
        >
            {(!isMobile || !staticOnMobile) && (
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0"
                    style={{ filter: "blur(15px)" }}
                />
            )}

            {isMobile && staticOnMobile && (
                <canvas
                    ref={staticCanvasRef}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-500",
                        staticImageReady ? "opacity-100" : "opacity-0"
                    )}
                    style={{ filter: "blur(15px)" }}
                />
            )}

            <motion.div
                className="absolute inset-0 bg-neutral-900/5 dark:bg-neutral-950/5"
                animate={{
                    opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: "blur(50px)",
                }}
            />

            {children && (
                <div className="relative z-10">
                    {children}
                </div>
            )}
        </div>
    );
}