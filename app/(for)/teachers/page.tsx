import React from "react";
import Navigation from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import HeroWithLaptop from "@/components/for/HeroWithLaptop";
import FeatureGrid from "@/components/for/FeatureGrid";
import FeatureHighlight from "@/components/for/FeatureHighlight";
import CTASection from "@/components/for/CTASection";
import TabbedFeatureSection from "@/components/for/TabbedFeatureSection";
import MobileAppSection from "@/components/for/MobileAppSection";
import FAQSection from "@/components/for/FAQSection";
import { teachersData } from "@/data/landingPages";
import { teachersFAQ } from "@/data/faq";

export default function TeachersHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <HeroWithLaptop {...teachersData.hero} />

      <FeatureGrid {...teachersData.gettingStarted} />

      {teachersData.tabbedFeatures && (
        <TabbedFeatureSection data={teachersData.tabbedFeatures} />
      )}

      {/* {teachersData.highlights && (
        <FeatureHighlight features={teachersData.highlights.features} />
      )} */}

      <MobileAppSection data={teachersData.mobileApp} />

      <FAQSection categories={teachersFAQ} />

      {/* {teachersData.cta && <CTASection {...teachersData.cta} />} */}

      <Footer />
    </div>
  );
}
