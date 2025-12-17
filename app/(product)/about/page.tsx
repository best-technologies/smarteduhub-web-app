import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { Sparkles, Target, Users, Globe, Award, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SmartEdu Hub",
  description:
    "Learn about SmartEdu Hub's mission to revolutionize education through innovative technology. Discover our story, values, and commitment to empowering learners worldwide.",
  keywords: [
    "about smartedu hub",
    "education technology",
    "our mission",
    "company values",
    "educational innovation",
  ],
};

export default function AboutPage() {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "500+", label: "Schools" },
    { value: "10K+", label: "Teachers" },
    { value: "40K+", label: "Students" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We're committed to making quality education accessible to everyone, everywhere.",
    },
    {
      icon: Sparkles,
      title: "Innovation First",
      description:
        "Constantly pushing boundaries with cutting-edge AI and technology solutions.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description:
        "Building a collaborative ecosystem where educators and learners thrive together.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Empowering education across borders, cultures, and communities worldwide.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Maintaining the highest standards in educational technology and user experience.",
    },
    {
      icon: Zap,
      title: "Agility",
      description:
        "Rapidly adapting to the evolving needs of modern education environments.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-hover text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforming Education Through Innovation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              SmartEdu Hub is on a mission to revolutionize learning by
              empowering educators and students with intelligent, intuitive
              tools.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                SmartEdu Hub was born from a simple observation: education
                technology was becoming increasingly complex, leaving many
                educators and students behind. We believed there had to be a
                better way—a platform that combined powerful features with
                intuitive design.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded by educators and technologists who experienced firsthand
                the challenges of modern teaching, we set out to create a
                solution that truly understands the needs of schools, teachers,
                and learners. Our platform integrates AI-powered tools, seamless
                communication, and comprehensive management features into one
                cohesive ecosystem.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, SmartEdu Hub serves thousands of educational institutions
                worldwide, helping them deliver exceptional learning experiences
                while simplifying administrative tasks. But we&apos;re just
                getting started—our vision extends far beyond current
                boundaries, and we&apos;re excited to continue innovating for
                the future of education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-brand-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-heading mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of the education revolution. Whether you&apos;re an
              educator, student, or institution, SmartEdu Hub has the tools you
              need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/create-account"
                className="bg-white text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Free
              </a>
              <a
                href="/support"
                className="bg-brand-primary-hover text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary-hover/80 transition-colors border-2 border-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
