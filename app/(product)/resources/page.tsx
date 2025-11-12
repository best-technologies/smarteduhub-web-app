import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import ResourcesContent from "@/components/product/ResourcesContent";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ResourcesContent />
      <Footer />
    </div>
  );
}
