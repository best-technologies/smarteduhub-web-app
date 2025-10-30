import React from "react";
import { Smartphone, Shield, Zap, Bell } from "lucide-react";
import Image from "next/image";

export default function MobileAppSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-primary to-brand-primary-hover relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 text-white">
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Manage Your School on the Go
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Take control of your educational institution from anywhere with
                our mobile app. Access all features, receive instant
                notifications, and stay connected with your school community.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Lightning Fast</h3>
                  <p className="text-sm text-white/80">
                    Optimized for speed and performance
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Secure & Safe</h3>
                  <p className="text-sm text-white/80">
                    Bank-level encryption and security
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Real-time Updates</h3>
                  <p className="text-sm text-white/80">
                    Instant notifications for important events
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Cross-Platform</h3>
                  <p className="text-sm text-white/80">
                    Available on iOS and Android devices
                  </p>
                </div>
                Mobile App Available
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* App Store Button */}
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 group"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg font-semibold -mt-1">App Store</div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 group"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="text-lg font-semibold -mt-1">Google Play</div>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-white/80">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm text-white/80">App Store Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm text-white/80">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right side - Phone Mockup */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-75" />

              {/* Phone mockup with actual screenshot */}
              <div className="relative max-w-[650px] mx-auto">
                <Image
                  src="/imgs/store-download.png"
                  alt="SmartEduHub Mobile App Interface"
                  width={450}
                  height={700}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
