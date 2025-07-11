"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleGoBack = () => {
    if (isMounted && typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen w-full bg-background relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 text-center">
        {/* 404 Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 mb-8"
        >
          <Image
            src="/404.png"
            alt="404 Not Found"
            width={800}
            height={600}
            className="mx-auto max-w-full h-auto"
            priority
          />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
        >
          <Link href="/">
            <Button className="group min-w-[160px]">
              <Home className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Go Home
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            onClick={handleGoBack}
            className="group min-w-[160px]"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Go Back
          </Button>
        </motion.div>

        {/* SendinCraft Branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 mt-8 text-xs text-muted-foreground/70"
        >
          Lost? Let{" "}
          <Link 
            href="/"
            className="text-primary/80 font-medium hover:text-primary transition-colors duration-200"
          >
            SendinCraft
          </Link>
          {" "}help you find your way back to reliable email delivery.
        </motion.div>
      </div>
    </div>
  );
}