import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import CookiesPolicyContent from "@/components/policies/CookiesPolicyContent";

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CookiesPolicyContent />
      <Footer />
    </div>
  );
}
