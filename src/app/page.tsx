import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";

function Home() {
  return (
    <div className="min-h-screen w-full bg-background relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to SendinCraft, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, SendinCraft has got you
          covered.
        </p>
        <Input
          type="email"
          placeholder="platform@sendincraft.com"
          className="w-full mt-4 relative z-10"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Home;