"use client";

import React, { useState } from "react";
import { Zap, TrendingUp, Shield, Users, Calendar } from "lucide-react";
import Image from "next/image";
import { GsapMorphButton } from "@/components/ui/gsapmorph-button";
import { Button } from "@/components/ui/button";
import { OnboardingModal } from "@/components/home/OnboardingModal";

/**
 * FreeTrialSection Component
 *
 * A full-width promotional section designed for school owners,
 * highlighting a 3-month free trial offer with AI-powered platform benefits.
 * Features a responsive layout with product visual and benefit list.
 */
export default function FreeTrialSection() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  const benefits = [
    {
      icon: Zap,
      title: "Unlock AI Tools:",
      description:
        "Utilize every premium feature to automate administration and personalize learning.",
      gradient: "from-purple-500 to-purple-600",
      color: "#8B5CF6",
    },
    {
      icon: TrendingUp,
      title: "Measure Impact:",
      description:
        "Prove the platform's value by tracking key performance indicators for 90 days, risk-free.",
      gradient: "from-blue-500 to-blue-600",
      color: "#3B82F6",
    },
    {
      icon: Shield,
      title: "Full Access for All Users:",
      description:
        "Provide teachers, parents, and students unlimited access to understand system adoption.",
      gradient: "from-green-500 to-green-600",
      color: "#10B981",
    },
    {
      icon: Users,
      title: "Dedicated Onboarding:",
      description:
        "Get personalized support throughout your trial period for a seamless transition.",
      gradient: "from-orange-500 to-orange-600",
      color: "#F97316",
    },
    {
      icon: Calendar,
      title: "Risk-Free Evaluation:",
      description:
        "A full three months to explore and integrate without any financial commitment.",
      gradient: "from-pink-500 to-pink-600",
      color: "#EC4899",
    },
  ];

  return (
    <>
      <section className="relative w-full bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-12 lg:py-30 overflow-hidden">
        {/* Multiple gradient blobs for dynamic background */}
        {/* Top-left gradient blob */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0) 100%)",
            filter: "blur(80px)",
          }}
        />

        {/* Top-right gradient blob */}
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0) 100%)",
            filter: "blur(100px)",
          }}
        />

        {/* Center floating blob */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.25) 0%, rgba(236, 72, 153, 0) 100%)",
            filter: "blur(120px)",
          }}
        />

        {/* Bottom-left gradient blob */}
        <div
          className="absolute -bottom-32 -left-32 w-[450px] h-[450px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0) 100%)",
            filter: "blur(90px)",
          }}
        />

        {/* Bottom-right gradient blob */}
        <div
          className="absolute -bottom-40 -right-40 w-[550px] h-[550px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(249, 115, 22, 0.35) 0%, rgba(249, 115, 22, 0) 100%)",
            filter: "blur(110px)",
          }}
        />

        {/* Wire mesh pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] z-0"
          style={{
            backgroundImage: "url('/svgs/wire-mesh.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "600px 600px",
            backgroundPosition: "center",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Block */}
          <div className="text-center mb-12 md:mb-16">
            {/* Limited Time Offer Badge */}
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF5722] to-[#FF7043] uppercase tracking-wide shadow-lg shadow-orange-500/50 animate-pulse">
                Limited Time Offer
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-lg md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
                TRANSFORM YOUR SCHOOL:
              </span>
              <br />3 Months of Smart Edu Hub for{" "}
              <span className="bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
                FREE
              </span>
            </h1>

            {/* Sub-Headline */}
            <p className="text-sm md:text-lg lg:text-xl text-brand-secondary max-w-3xl mx-auto leading-relaxed">
              Experience the full power of our AI-powered platform. Zero limits,
              zero commitment. See the results before you invest.
            </p>
          </div>

          {/* Dual Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-12">
            {/* Left Side - Visual Element */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md">
                {/* Product Mock-up */}
                <div className="relative bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 rounded-2xl p-4 shadow-2xl">
                  <div className="relative rounded-xl overflow-hidden border-2 border-white shadow-xl">
                    <Image
                      src="/imgs/store-download.png"
                      alt="Smart Edu Hub Dashboard"
                      width={600}
                      height={750}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>

                {/* "ALL Features Included" Badge */}
                <div className="absolute -top-4 -right-4 lg:-right-8 transform rotate-12">
                  <div className="bg-gradient-to-br from-[#4f46e5] via-[#7c3aed] to-[#a855f7] text-white px-6 py-3 rounded-2xl shadow-2xl shadow-purple-500/50">
                    <p className="text-center leading-tight">
                      ALL Features
                      <br />
                      Included!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Benefits List */}
            <div className="space-y-6 md:space-y-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg`}
                        style={{
                          boxShadow: `0 4px 14px ${benefit.color}40`,
                        }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h4 className="text-lg md:text-xl font-bold text-brand-heading mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-sm md:text-base text-brand-secondary leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Block */}
          <div className="text-center">
            {/* ShadCN Button for mobile to tablet */}
            <Button
              className="lg:hidden"
              onClick={() => setIsOnboardingOpen(true)}
            >
              Start Your 3 Months Free Access
            </Button>

            {/* GSAP Morph Button for laptop and above */}
            <div className="hidden lg:inline-block">
              <GsapMorphButton
                size="lg"
                variant="default"
                onClick={() => setIsOnboardingOpen(true)}
              >
                Start Your 3 Months Free Access
              </GsapMorphButton>
            </div>

            {/* Reassurance Text */}
            <p className="mt-4 text-sm text-brand-secondary italic">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Onboarding Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />
    </>
  );
}
