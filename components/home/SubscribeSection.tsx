"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GsapMorphButton } from "@/components/ui/gsapmorph-button";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Add your subscribe logic here
    console.log("Subscribing with email:", email);
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 h-12 bg-transparent border-brand-border-secondary text-white placeholder-brand-border-secondary focus-visible:ring-brand-primary"
        aria-label="Subscribe to newsletter"
      />

      {/* ShadCN Button for mobile & tablet */}
      <Button
        onClick={handleSubscribe}
        className="w-full md:w-auto h-12 lg:hidden"
        size="default"
      >
        Subscribe
      </Button>

      {/* GSAP Button for desktop and up */}
      <GsapMorphButton
        onClick={handleSubscribe}
        className="hidden lg:flex w-auto"
      >
        Subscribe
      </GsapMorphButton>
    </div>
  );
}
