"use client"
import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface TerminalProps {
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ className = '' }) => {
  const commandLines = [
    '$ curl -X POST https://api.sendincraft.com/v1/send \\',
    '    -H "Authorization: Bearer sk_live_abc123..." \\',
    '    -H "Content-Type: application/json" \\',
    '    -d \'{',
    '      "to": "hello@sendincraft.com",',
    '      "subject": "Welcome to our Platform",',
    '      "html": "<h1>Welcome!</h1><p>Thanks for joining us!</p>"',
    '    }\'',
    ''
  ];

  const responseLines = [
    '✓ Email sent successfully!',
    '',
    '$ █'
  ];

  const getLineColor = (line: string) => {
    if (line.startsWith('✓')) return 'text-green-400';
    if (line.startsWith('$')) return 'text-green-400';
    if (line.includes('sendincraft.com')) return 'text-cyan-400';
    if (line.includes('"to":') || line.includes('"subject":') || line.includes('"html":')) {
      return 'text-yellow-300';
    }
    return 'text-gray-300';
  };

  const commandVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const responseVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.5 // Wait 1.5s after command completes
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const cursorVariants = {
    visible: {
      opacity: [1, 0, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear" as const
      }
    }
  };

  return (
    <motion.div 
      className={`relative h-96 w-full rounded-lg border-1 bg-gray-950 p-6 shadow-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: `
          radial-gradient(ellipse at center top, rgba(15, 15, 15, 0.9) 0%, rgba(5, 5, 5, 1) 100%),
          linear-gradient(180deg, #0f0f0f 0%, #050505 100%)
        `
      }}
    >
      {/* Terminal window controls */}
      <div className="mb-4 flex items-center space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500 shadow-sm"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-sm"></div>
        <div className="h-3 w-3 rounded-full bg-green-500 shadow-sm"></div>
        <TerminalIcon className="ml-4 w-4 h-4 text-green-400" />
        <div className="text-xs text-gray-500">sendincraft-terminal</div>
      </div>
      
      {/* Terminal content */}
      <div className="text-left font-mono text-sm overflow-y-auto h-80">
        {/* Command execution */}
        <motion.div
          variants={commandVariants}
          initial="hidden"
          animate="visible"
        >
          {commandLines.map((line, index) => (
            <motion.div 
              key={`command-${index}`} 
              className={`${getLineColor(line)} leading-6`}
              variants={lineVariants}
            >
              {line}
            </motion.div>
          ))}
        </motion.div>

        {/* Response after delay */}
        <motion.div
          variants={responseVariants}
          initial="hidden"
          animate="visible"
        >
          {responseLines.map((line, index) => {
            const isLastLine = line.endsWith('█');
            
            return (
              <motion.div 
                key={`response-${index}`} 
                className={`${getLineColor(line)} leading-6`}
                variants={lineVariants}
              >
                {isLastLine ? (
                  <>
                    $ 
                    <motion.span
                      variants={cursorVariants}
                      animate="visible"
                    >
                      █
                    </motion.span>
                  </>
                ) : (
                  line
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Subtle depth effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-gray-900/8 via-transparent to-transparent pointer-events-none"></div>
    </motion.div>
  );
};

export default Terminal;