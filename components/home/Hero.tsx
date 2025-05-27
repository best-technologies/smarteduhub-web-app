"use client";

import { useState } from "react";
import { BarChart3, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OnboardingModal } from "@/components/home/OnboardingModal";

export default function HeroSection() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  return (
    <>
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-heading leading-tight mb-6">
              Simplify how you manage students, teachers and paperwork with{" "}
              <span className="text-brand-primary">SmartEdu Hub</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              SmartEdu Hub helps school owners and administrators manage
              finance, digitize operations, boost efficiency and focus on
              education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-brand-primary hover:bg-[#4338CA] px-8 py-3"
                onClick={() => setIsOnboardingOpen(true)}
              >
                Get Started
              </Button>
              <Button variant="outline" className="px-8 py-3">
                See How It Works
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            {[
              {
                icon: <BarChart3 className="w-6 h-6 text-brand-primary" />,
                title: "Manage Finances",
                description:
                  "Track income, control expenses and simplify budgeting",
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-brand-primary" />,
                title: "Analytics",
                description:
                  "Track performance, monitor teachers, students & expenses",
              },
              {
                icon: <BookOpen className="w-6 h-6 text-brand-primary" />,
                title: "Digital Curriculum",
                description:
                  "Access & deliver structured, up-to-date learning materials",
              },
              {
                icon: <Users className="w-6 h-6 text-brand-primary" />,
                title: "AI Assistant",
                description: "24/7 learning support",
              },
            ].map(({ icon, title, description }, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-heading">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />
    </>
  );
}
