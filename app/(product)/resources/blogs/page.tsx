import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - SmartEdu Hub",
  description:
    "Discover educational insights, teaching tips, platform updates, and success stories from the SmartEdu Hub community.",
  keywords: [
    "education blog",
    "teaching tips",
    "edtech insights",
    "classroom strategies",
    "smartedu hub blog",
  ],
};

export default function BlogsPage() {
  const featuredPost = {
    title: "The Future of AI in Education: Trends to Watch in 2026",
    excerpt:
      "Explore how artificial intelligence is reshaping education and what educators need to know to stay ahead of the curve.",
    author: "Dr. Sarah Johnson",
    date: "December 15, 2025",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "/imgs/blog-ai-education.jpg",
    featured: true,
  };

  const blogPosts = [
    {
      title: "10 Strategies for Effective Hybrid Learning",
      excerpt:
        "Practical tips for creating engaging learning experiences that work both in-person and online.",
      author: "Michael Chen",
      date: "December 12, 2025",
      readTime: "6 min read",
      category: "Teaching Tips",
      image: "/imgs/blog-hybrid-learning.jpg",
    },
    {
      title: "How One School Increased Parent Engagement by 300%",
      excerpt:
        "A case study on leveraging communication tools to build stronger school-parent partnerships.",
      author: "Emily Rodriguez",
      date: "December 10, 2025",
      readTime: "5 min read",
      category: "Success Stories",
      image: "/imgs/blog-parent-engagement.jpg",
    },
    {
      title: "Data-Driven Teaching: Making Sense of Student Analytics",
      excerpt:
        "Learn how to use data insights to personalize instruction and improve student outcomes.",
      author: "Dr. James Williams",
      date: "December 8, 2025",
      readTime: "7 min read",
      category: "Best Practices",
      image: "/imgs/blog-data-teaching.jpg",
    },
    {
      title: "Creating Inclusive Digital Classrooms",
      excerpt:
        "Best practices for ensuring accessibility and equity in online learning environments.",
      author: "Aisha Patel",
      date: "December 5, 2025",
      readTime: "6 min read",
      category: "Accessibility",
      image: "/imgs/blog-inclusive-classrooms.jpg",
    },
    {
      title: "New Feature Spotlight: AI Assignment Assistant",
      excerpt:
        "Discover how our latest AI-powered tool can save you hours on assignment creation and grading.",
      author: "SmartEdu Hub Team",
      date: "December 3, 2025",
      readTime: "4 min read",
      category: "Product Updates",
      image: "/imgs/blog-ai-assistant.jpg",
    },
    {
      title: "Building Student Engagement in the Digital Age",
      excerpt:
        "Proven techniques for keeping students motivated and actively participating in online learning.",
      author: "Tom Anderson",
      date: "December 1, 2025",
      readTime: "7 min read",
      category: "Student Engagement",
      image: "/imgs/blog-student-engagement.jpg",
    },
  ];

  const categories = [
    { name: "All Posts", count: 42, icon: BookOpen },
    { name: "Teaching Tips", count: 15, icon: Lightbulb },
    { name: "AI & Technology", count: 8, icon: TrendingUp },
    { name: "Success Stories", count: 6, icon: TrendingUp },
    { name: "Product Updates", count: 7, icon: TrendingUp },
    { name: "Best Practices", count: 6, icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-hover text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              SmartEdu Hub Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Insights, tips, and stories from the world of education technology
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <button
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                      index === 0
                        ? "bg-brand-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{category.name}</span>
                    <span
                      className={`text-sm ${
                        index === 0 ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      ({category.count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-heading mb-8">
              Featured Post
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-brand-primary/20 to-brand-primary-hover/20">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="w-24 h-24 text-brand-primary/30" />
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-brand-primary/10 text-brand-primary text-sm font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-3xl font-bold text-brand-heading mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary-hover transition-colors flex items-center gap-2 w-fit">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-heading mb-8">
              Recent Posts
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-gray-300" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-semibold px-2 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-brand-heading mb-3 hover:text-brand-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <button className="text-brand-primary font-semibold text-sm hover:underline flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-primary to-brand-primary-hover text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Get the Latest Insights</h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter and never miss an update from the
              SmartEdu Hub blog.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
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
