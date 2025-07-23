"use client";

import { ProgressProvider } from "@bprogress/next/app";

interface TopLoader {
  children: React.ReactNode;
}

export default function TopLoader({ children }: TopLoader) {
  return (
    <ProgressProvider 
      color="#007BFF"
      height="2px"
      options={{ showSpinner: false }}
      startPosition={0.2}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}