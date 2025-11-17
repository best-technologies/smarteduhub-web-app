import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import PrivacyPolicyContent from "@/components/policies/PrivacyPolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how SmartEdu Hub collects, uses, and protects your personal information. Our commitment to data privacy and security for educational institutions.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PrivacyPolicyContent />
      <Footer />
    </div>
  );
}
