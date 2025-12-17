"use client";

import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import FAQItem from "@/components/for/FAQItem";
import CategoryTabs from "@/components/for/CategoryTabs";
import { Search, MessageCircle, BookOpen } from "lucide-react";
import { useState } from "react";

// Note: Metadata moved due to "use client" directive - should be in layout or separate metadata export

// FAQ Data organized by category
const faqData = {
  general: [
    {
      question: "What is SmartEdu Hub?",
      answer:
        "SmartEdu Hub is a comprehensive education management platform that connects schools, teachers, students, and parents. It provides tools for classroom management, learning delivery, communication, and administrative tasks—all in one integrated solution.",
    },
    {
      question: "Who can use SmartEdu Hub?",
      answer:
        "SmartEdu Hub is designed for schools, teachers, students, and parents. Schools can manage their entire institution, teachers can create and deliver lessons, students can access learning materials and submit assignments, and parents can monitor their children's progress.",
    },
    {
      question: "Is SmartEdu Hub mobile-friendly?",
      answer:
        "Yes! SmartEdu Hub is fully responsive and works seamlessly on desktop, tablet, and mobile devices. We also offer dedicated mobile apps for iOS and Android for an optimized mobile experience.",
    },
    {
      question: "Do I need to install any software?",
      answer:
        "No installation required! SmartEdu Hub is a web-based platform accessible through any modern browser. However, we do offer optional mobile apps for enhanced mobile experiences.",
    },
  ],
  account: [
    {
      question: "How do I create an account?",
      answer:
        "Click the 'Sign Up' button in the top navigation, select your role (School, Teacher, Student, or Parent), and follow the registration process. You'll need to provide basic information and verify your email address.",
    },
    {
      question: "Can I have multiple roles on one account?",
      answer:
        "Currently, each account is associated with one primary role. However, teachers can also be students in professional development courses, and parents can have separate accounts if they also work at a school.",
    },
    {
      question: "I forgot my password. How do I reset it?",
      answer:
        "Click 'Login' then 'Forgot Password' on the login page. Enter your registered email address, and we'll send you instructions to reset your password. The link is valid for 24 hours.",
    },
    {
      question: "How do I update my profile information?",
      answer:
        "Log in to your account and navigate to Settings > Profile. You can update your personal information, contact details, profile picture, and preferences from there.",
    },
  ],
  features: [
    {
      question: "What features are included in SmartEdu Hub?",
      answer:
        "SmartEdu Hub includes classroom management, lesson planning, assignment creation and grading, attendance tracking, grade book, parent communication, analytics and reporting, AI-powered assistance, video conferencing, resource library, and much more.",
    },
    {
      question: "Can I integrate SmartEdu Hub with other tools?",
      answer:
        "Yes! SmartEdu Hub offers integrations with popular tools like Google Workspace, Microsoft 365, Zoom, and various learning content providers. We're continuously adding new integrations based on user feedback.",
    },
    {
      question: "Does SmartEdu Hub have AI features?",
      answer:
        "Absolutely! Our AI assistant helps with lesson planning, content generation, grading assistance, personalized learning recommendations, and answering student questions. The AI learns from your preferences to provide increasingly personalized support.",
    },
    {
      question: "Can I customize the platform for my school?",
      answer:
        "Yes, schools can customize branding, configure user roles and permissions, set up custom grading scales, create custom fields, and configure features based on their specific needs.",
    },
  ],
  pricing: [
    {
      question: "How much does SmartEdu Hub cost?",
      answer:
        "We offer flexible pricing plans for different needs: a Free tier for individual teachers, Professional plans starting at $15/teacher/month, and Enterprise solutions with custom pricing for schools. All plans include a 30-day free trial.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! We offer a 30-day free trial for all paid plans. No credit card required to start your trial. You can explore all premium features and decide which plan works best for you.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access until the end of your current billing period. We don't offer refunds for partial months.",
    },
    {
      question: "Do you offer discounts for schools?",
      answer:
        "Yes! We offer volume discounts for schools and districts. Contact our sales team for a custom quote based on your institution's size and needs. We also offer special pricing for non-profits and educational institutions in developing regions.",
    },
  ],
  technical: [
    {
      question: "What browsers are supported?",
      answer:
        "SmartEdu Hub works best on the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience and security.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use bank-level encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We're GDPR, FERPA, and COPPA compliant. We perform regular security audits and never sell your data to third parties.",
    },
    {
      question: "What happens if there's an outage?",
      answer:
        "We maintain 99.9% uptime SLA. In the rare event of an outage, our team works to resolve issues immediately. Enterprise customers receive priority support and status updates. You can check our system status at status.smarteduhub.com.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes! You can export your data at any time in standard formats (CSV, PDF, Excel). Schools have full data portability rights and can request a complete data export if they decide to leave the platform.",
    },
  ],
  support: [
    {
      question: "How can I get help?",
      answer:
        "We offer multiple support channels: live chat (9 AM - 5 PM GMT+1), email support (24-hour response time), comprehensive knowledge base, video tutorials, and community forums. Enterprise customers get dedicated support and priority response times.",
    },
    {
      question: "Do you provide training?",
      answer:
        "Yes! We offer onboarding webinars, video tutorials, documentation, and live training sessions. Enterprise customers receive customized training programs and dedicated onboarding specialists.",
    },
    {
      question: "Is support available in multiple languages?",
      answer:
        "Currently, our support is primarily in English, but we're expanding to support Spanish, French, Arabic, and Mandarin. The platform interface is available in 15+ languages.",
    },
    {
      question: "Can I suggest new features?",
      answer:
        "Absolutely! We love hearing from our users. You can submit feature requests through our feedback portal or contact support. We regularly review suggestions and many platform features have come from user feedback.",
    },
  ],
};

export default function FAQPage() {
  const [activeCategorySlug, setActiveCategorySlug] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { category: "General", slug: "general" },
    { category: "Account & Login", slug: "account" },
    { category: "Features", slug: "features" },
    { category: "Pricing & Billing", slug: "pricing" },
    { category: "Technical", slug: "technical" },
    { category: "Support", slug: "support" },
  ];

  // Filter FAQs based on search query
  const getFilteredFAQs = () => {
    const currentFAQs =
      faqData[activeCategorySlug as keyof typeof faqData] || [];

    if (!searchQuery.trim()) {
      return currentFAQs;
    }

    return currentFAQs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredFAQs = getFilteredFAQs();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-hover text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Find answers to commonly asked questions about SmartEdu Hub
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories & Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Category Tabs */}
            <CategoryTabs
              categories={categories}
              activeSlug={activeCategorySlug}
              onSelectCategory={setActiveCategorySlug}
            />

            {/* FAQ Items */}
            <div className="mt-12 space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">
                    No results found for "{searchQuery}"
                  </p>
                  <p className="text-gray-500 mt-2">
                    Try different keywords or browse categories above
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <MessageCircle className="w-16 h-16 text-brand-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-brand-heading mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Can't find what you're looking for? Our support team is here to
                help you with any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/support"
                  className="bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary-hover transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/resources"
                  className="bg-white text-brand-primary border-2 border-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Browse Resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
