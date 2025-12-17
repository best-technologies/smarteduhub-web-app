import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Heart,
  Rocket,
  Users,
  Award,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at SmartEdu Hub",
  description:
    "Join the SmartEdu Hub team and help shape the future of education. Explore exciting career opportunities in engineering, design, education, and more.",
  keywords: [
    "smartedu hub careers",
    "education technology jobs",
    "remote work opportunities",
    "edtech careers",
    "join our team",
  ],
};

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: Rocket,
      title: "Growth & Development",
      description: "Continuous learning opportunities and career advancement",
    },
    {
      icon: Users,
      title: "Flexible Work",
      description: "Remote-first culture with flexible working hours",
    },
    {
      icon: Award,
      title: "Competitive Compensation",
      description: "Market-leading salaries and equity opportunities",
    },
  ];

  const openPositions = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      description:
        "Build beautiful, responsive user interfaces that delight educators and students worldwide.",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $140k",
      description:
        "Craft intuitive experiences that make education technology accessible to everyone.",
    },
    {
      title: "Education Specialist",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $90k",
      description:
        "Work directly with schools and teachers to ensure they get maximum value from our platform.",
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $150k",
      description:
        "Design and build scalable systems that power learning for millions of students.",
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Remote / Hybrid",
      type: "Full-time",
      salary: "$80k - $110k",
      description:
        "Create compelling content that showcases the impact of SmartEdu Hub on education.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$115k - $155k",
      description:
        "Ensure our infrastructure is reliable, secure, and scalable for global education.",
    },
  ];

  const values = [
    "We put educators and learners first",
    "We embrace innovation and experimentation",
    "We believe in transparency and open communication",
    "We celebrate diversity and inclusion",
    "We're committed to continuous learning",
    "We maintain a healthy work-life balance",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-hover text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build the Future of Education
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Join a passionate team dedicated to transforming learning
              experiences for millions of students and educators worldwide.
            </p>
            <a
              href="#openings"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
              Why Join SmartEdu Hub?
            </h2>
            <p className="text-lg text-gray-600">
              We&apos;re not just building software—we&apos;re shaping the
              future of education and making a meaningful impact on millions of
              lives.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-heading mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-12 text-center">
            Open Positions
          </h2>

          <div className="max-w-6xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-brand-heading">
                        {position.title}
                      </h3>
                      <span className="bg-brand-primary/10 text-brand-primary text-sm font-semibold px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{position.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-primary" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-primary" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-brand-primary" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:items-end">
                    <button className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary-hover transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="text-brand-primary font-semibold text-sm hover:underline">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center bg-gray-50 p-8 rounded-xl">
            <Briefcase className="w-12 h-12 text-brand-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-heading mb-3">
              Don&apos;t See Your Dream Role?
            </h3>
            <p className="text-gray-600 mb-6">
              We&apos;re always looking for talented people to join our team.
              Send us your resume and let us know how you&apos;d like to
              contribute.
            </p>
            <button className="bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary-hover transition-colors">
              Send General Application
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
