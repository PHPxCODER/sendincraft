'use client';

import { motion, useScroll, useSpring } from 'motion/react';

/**
 * Slim scroll-linked reading-progress indicator pinned to the very top edge.
 * Scroll-linked (not autoplaying), so it is safe under reduced-motion; the
 * spring smoothing is cosmetic and degrades gracefully.
 */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-foreground/80"
    />
  );
}
