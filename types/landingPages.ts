import { LucideIcon } from "lucide-react";

// ==================== HERO SECTION ====================
export interface HeroData {
  title: string;
  subtitle: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  imageSrc: string;
  imageAlt: string;
  type: "laptop" | "centered";
}

// ==================== GETTING STARTED / FEATURE GRID ====================
export interface GettingStartedStep {
  step?: number;
  icon?: LucideIcon;
  title: string;
  description: string;
}

export interface GettingStartedData {
  title: string;
  subtitle: string;
  features: GettingStartedStep[];
}

// ==================== TABBED FEATURES ====================
export interface TabContent {
  id: string;
  title: string;
  badge: string;
  contentTitle: string;
  description: string;
  mediaSrc: string;
  mediaType: "image" | "video";
  mediaAlt: string;
}

export interface TabbedFeatureData {
  sectionTitle: string;
  sectionSubtitle: string;
  tabs: TabContent[];
}

// ==================== FEATURE HIGHLIGHTS ====================
export interface HighlightFeature {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  benefits: string[];
}

export interface HighlightData {
  features: HighlightFeature[];
}

// ==================== MOBILE APP SECTION ====================
export interface MobileAppFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface MobileAppStats {
  value: string;
  label: string;
}

export interface MobileAppData {
  title: string;
  subtitle: string;
  features: MobileAppFeature[];
  stats: MobileAppStats[];
  phoneImageSrc: string;
  phoneImageAlt: string;
}

// ==================== CTA SECTION ====================
export interface CTAData {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

// ==================== FAQ SECTION ====================
export interface FAQQuestion {
  id: number;
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  slug: string;
  questions: FAQQuestion[];
}

// ==================== COMPLETE LANDING PAGE DATA ====================
export interface LandingPageData {
  hero: HeroData;
  gettingStarted: GettingStartedData;
  tabbedFeatures?: TabbedFeatureData;
  highlights?: HighlightData;
  mobileApp: MobileAppData;
  cta?: CTAData;
}
