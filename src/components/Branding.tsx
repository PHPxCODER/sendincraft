"use client"

import React from 'react'
import { motion } from "framer-motion"
import { ExternalLink } from 'lucide-react'

function Branding() {
  return (
    <div className="absolute bottom-4 left-0 right-0 z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-center text-xs text-muted-foreground/70 font-inter"
      >
        Crafted with{" "}
        <span
          className="inline-block text-red-500"
          style={{
            animation: "smoothPulse 1.5s ease-in-out infinite",
          }}
        >
          ❤
        </span>
        {" "}by{" "}
        <a
          href="https://rdpdatacenter.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary/80 font-medium hover:text-primary transition-colors duration-200 inline-flex items-center gap-1"
        >
          RDP Datacenter
          <ExternalLink className="h-3 w-3" />
        </a>
      </motion.div>
    </div>
  )
}

export default Branding