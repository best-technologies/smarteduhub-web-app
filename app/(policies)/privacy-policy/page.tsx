import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import PrivacyPolicyContent from "@/components/policies/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PrivacyPolicyContent />
      <Footer />
    </div>
  );
}
