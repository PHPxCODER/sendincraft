"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full bg-background relative antialiased overflow-hidden">
      <div className="w-full h-screen mx-auto relative flex flex-col items-center justify-center">
        
        {/* 404 Image - Background layer with responsive sizing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center z-0"
        >
          <div className="relative w-[90vw] h-[40vh] sm:w-[70vw] sm:h-[60vh] lg:w-[60vw] lg:h-[70vh]" style={{ maxWidth: '2224px', maxHeight: '1246px' }}>
            <Image
              src="/404.png"
              alt="404 Not Found"
              fill
              className="object-contain select-none pointer-events-none"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-[15%] sm:bottom-1/5 left-1/2 transform -translate-x-1/2 z-20 text-base sm:text-sm text-muted-foreground/80 text-center px-2 sm:px-4 w-[95%] sm:w-auto"
        >
          <div className="flex flex-col gap-1">
            <div>
              Lost? Let{" "}
              <Link
                href="/"
                className="text-primary font-medium hover:text-primary/80 transition-colors duration-200"
              >
                SendinCraft
              </Link>{" "}
              help you find your way back to reliable email delivery.
            </div>

            <div className="font-medium">
              We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t exist.
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 sm:mt-4 flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="text-primary duration-200 w-full sm:w-auto"
              >
                Return to home
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        </div>
      </div>
  );
}