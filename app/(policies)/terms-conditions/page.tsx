import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import TermsConditionsContent from "@/components/policies/TermsConditionsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using SmartEdu Hub. Understand your rights, responsibilities, and our service agreement.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TermsConditionsContent />
      <Footer />
    </div>
  );
}
