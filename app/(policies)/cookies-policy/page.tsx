import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import CookiesPolicyContent from "@/components/policies/CookiesPolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description:
    "Understand how SmartEdu Hub uses cookies and similar technologies to enhance your experience and improve our services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CookiesPolicyContent />
      <Footer />
    </div>
  );
}
