import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import {
  Calendar,
  TrendingUp,
  Award,
  Users,
  Newspaper,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates - SmartEdu Hub",
  description:
    "Stay up to date with the latest news, product updates, partnerships, and announcements from SmartEdu Hub.",
  keywords: [
    "smartedu hub news",
    "product updates",
    "company announcements",
    "edtech news",
    "platform updates",
  ],
};

export default function NewsPage() {
  const latestNews = [
    {
      title: "SmartEdu Hub Raises $50M in Series B Funding",
      date: "December 14, 2025",
      category: "Company News",
      excerpt:
        "New funding will accelerate AI development and global expansion, bringing advanced education technology to more schools worldwide.",
      type: "major",
    },
    {
      title: "Introducing Real-Time Collaboration Tools",
      date: "December 10, 2025",
      category: "Product Update",
      excerpt:
        "Teachers and students can now collaborate in real-time with our new interactive whiteboard and co-editing features.",
      type: "feature",
    },
    {
      title: "Partnership with Global Education Alliance",
      date: "December 5, 2025",
      category: "Partnership",
      excerpt:
        "SmartEdu Hub joins forces with leading educational organizations to promote accessible quality education globally.",
      type: "partnership",
    },
  ];

  const recentUpdates = [
    {
      title: "Enhanced Mobile App Experience",
      date: "December 1, 2025",
      category: "Product Update",
      excerpt:
        "Updated iOS and Android apps with improved performance, offline mode, and new parent communication features.",
    },
    {
      title: "SmartEdu Hub Wins 2025 EdTech Excellence Award",
      date: "November 28, 2025",
      category: "Awards",
      excerpt:
        "Recognized for innovation in AI-powered education and impact on student learning outcomes.",
    },
    {
      title: "New Integration: Microsoft Teams",
      date: "November 25, 2025",
      category: "Integration",
      excerpt:
        "Seamlessly connect your SmartEdu Hub classes with Microsoft Teams for enhanced collaboration.",
    },
    {
      title: "Expanded Language Support: 5 New Languages",
      date: "November 20, 2025",
      category: "Platform Update",
      excerpt:
        "SmartEdu Hub now supports Spanish, French, Arabic, Mandarin, and Portuguese, reaching more educators worldwide.",
    },
    {
      title: "Q3 2025 Product Roadmap Released",
      date: "November 15, 2025",
      category: "Product Update",
      excerpt:
        "Preview upcoming features including advanced analytics, gamification tools, and enhanced accessibility options.",
    },
    {
      title: "1 Million Students Milestone Reached",
      date: "November 10, 2025",
      category: "Company News",
      excerpt:
        "SmartEdu Hub celebrates serving over 1 million students across 50 countries worldwide.",
    },
    {
      title: "Security Update: Enhanced Data Protection",
      date: "November 5, 2025",
      category: "Security",
      excerpt:
        "Implemented advanced encryption and security measures to further protect user data and privacy.",
    },
    {
      title: "Partnership with EdTech Research Institute",
      date: "November 1, 2025",
      category: "Research",
      excerpt:
        "Collaborative research initiative to study the impact of AI on personalized learning outcomes.",
    },
  ];

  const pressReleases = [
    {
      title: "SmartEdu Hub Expands to Latin America",
      date: "October 2025",
      link: "#",
    },
    {
      title: "Study Shows 40% Improvement in Student Engagement",
      date: "September 2025",
      link: "#",
    },
    {
      title: "New CEO Appointed to Lead Global Expansion",
      date: "August 2025",
      link: "#",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Company News": "bg-blue-100 text-blue-700",
      "Product Update": "bg-purple-100 text-purple-700",
      Partnership: "bg-green-100 text-green-700",
      Awards: "bg-yellow-100 text-yellow-700",
      Integration: "bg-indigo-100 text-indigo-700",
      "Platform Update": "bg-pink-100 text-pink-700",
      Security: "bg-red-100 text-red-700",
      Research: "bg-teal-100 text-teal-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-hover text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Newspaper className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Stay informed about the latest developments, features, and
              announcements from SmartEdu Hub
            </p>
          </div>
        </div>
      </section>

      {/* Latest News - Featured */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-heading mb-12 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-brand-primary" />
              Latest News
            </h2>

            <div className="space-y-8">
              {latestNews.map((news, index) => (
                <article
                  key={index}
                  className={`bg-white rounded-2xl shadow-xl border-2 overflow-hidden hover:shadow-2xl transition-all ${
                    news.type === "major"
                      ? "border-brand-primary"
                      : "border-gray-200"
                  }`}
                >
                  <div className="p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(
                          news.category
                        )}`}
                      >
                        {news.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{news.date}</span>
                      </div>
                      {news.type === "major" && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                          Breaking
                        </span>
                      )}
                    </div>
                    <h3 className="text-3xl font-bold text-brand-heading mb-4">
                      {news.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">{news.excerpt}</p>
                    <button className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary-hover transition-colors flex items-center gap-2">
                      Read Full Story
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-heading mb-12">
              Recent Updates
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {recentUpdates.map((update, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(
                        update.category
                      )}`}
                    >
                      {update.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-heading mb-2 hover:text-brand-primary transition-colors cursor-pointer">
                    {update.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{update.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{update.excerpt}</p>
                  <button className="text-brand-primary font-semibold text-sm hover:underline flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press & Media */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Press Releases */}
              <div>
                <h2 className="text-2xl font-bold text-brand-heading mb-6 flex items-center gap-3">
                  <Newspaper className="w-6 h-6 text-brand-primary" />
                  Press Releases
                </h2>
                <div className="space-y-4">
                  {pressReleases.map((press, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="font-semibold text-brand-heading mb-2 hover:text-brand-primary transition-colors cursor-pointer">
                        {press.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          {press.date}
                        </span>
                        <button className="text-brand-primary text-sm font-semibold hover:underline flex items-center gap-1">
                          View
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Media Kit */}
              <div>
                <h2 className="text-2xl font-bold text-brand-heading mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-brand-primary" />
                  Media Resources
                </h2>
                <div className="bg-gradient-to-br from-brand-primary to-brand-primary-hover text-white rounded-xl p-8">
                  <Award className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Media Kit</h3>
                  <p className="text-white/90 mb-6">
                    Download our press kit including logos, screenshots, company
                    information, and executive bios.
                  </p>
                  <button className="bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                    Download Media Kit
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-brand-heading mb-4">
                    Press Inquiries
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For media inquiries, interviews, or more information:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      press@smarteduhub.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span> +1 (555)
                      123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-brand-heading mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter and get the latest news and updates
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <button className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary-hover transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
