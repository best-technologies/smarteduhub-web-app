import React from "react";
import Navigation from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import HeroWithLaptop from "@/components/for/HeroWithLaptop";
import FreeTrialSection from "@/components/for/FreeTrialSection";
import FeatureGrid from "@/components/for/FeatureGrid";
import TabbedFeatureSection from "@/components/for/TabbedFeatureSection";
import MobileAppSection from "@/components/for/MobileAppSection";
import FAQSection from "@/components/for/FAQSection";
// import CTASection from "@/components/for/CTASection";
import { schoolsData } from "@/data/landingPages";
import { schoolsFAQ } from "@/data/faq";

export default function SchoolsHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <HeroWithLaptop {...schoolsData.hero} />

      <FreeTrialSection />

      <FeatureGrid {...schoolsData.gettingStarted} />

      {schoolsData.tabbedFeatures && (
        <TabbedFeatureSection data={schoolsData.tabbedFeatures} />
      )}

      <MobileAppSection data={schoolsData.mobileApp} />

      <FAQSection categories={schoolsFAQ} />

      {/* {schoolsData.cta && <CTASection {...schoolsData.cta} />} */}

      <Footer />
    </div>
  );
}
