import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Webinars",
  description:
    "Join SmartEdu Hub's upcoming events, webinars, and workshops. Connect with educators, explore new features, and learn best practices for digital education.",
  keywords: [
    "smartedu hub events",
    "education webinars",
    "teacher training",
    "educational workshops",
    "online events",
  ],
};

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "AI in Education: Transform Your Classroom",
      date: "January 15, 2026",
      time: "2:00 PM - 3:30 PM GMT",
      type: "Webinar",
      location: "Online",
      attendees: "500+",
      description:
        "Discover how to leverage AI tools to create personalized learning experiences and improve student engagement.",
      featured: true,
    },
    {
      title: "SmartEdu Hub Feature Showcase 2026",
      date: "January 22, 2026",
      time: "10:00 AM - 12:00 PM GMT",
      type: "Product Launch",
      location: "Online",
      attendees: "1000+",
      description:
        "Join us for the unveiling of our latest features and innovations designed to revolutionize education management.",
      featured: true,
    },
    {
      title: "Mastering Assessment & Grading",
      date: "February 5, 2026",
      time: "3:00 PM - 4:00 PM GMT",
      type: "Workshop",
      location: "Online",
      attendees: "200+",
      description:
        "Learn efficient strategies for assessment creation, grading, and providing meaningful feedback to students.",
    },
    {
      title: "Building Engaged Learning Communities",
      date: "February 12, 2026",
      time: "1:00 PM - 2:30 PM GMT",
      type: "Webinar",
      location: "Online",
      attendees: "300+",
      description:
        "Explore techniques for fostering collaboration and communication among students, parents, and educators.",
    },
    {
      title: "Data-Driven Decision Making for Schools",
      date: "February 19, 2026",
      time: "11:00 AM - 12:30 PM GMT",
      type: "Training",
      location: "Online",
      attendees: "150+",
      description:
        "Harness the power of analytics and reporting to make informed decisions that improve student outcomes.",
    },
    {
      title: "Getting Started with SmartEdu Hub",
      date: "February 26, 2026",
      time: "2:00 PM - 3:00 PM GMT",
      type: "Onboarding",
      location: "Online",
      attendees: "400+",
      description:
        "A comprehensive introduction for new users covering setup, navigation, and essential features.",
    },
  ];

  const pastEvents = [
    {
      title: "Digital Transformation in Education Summit 2025",
      date: "November 2025",
      attendees: "2000+",
      recording: true,
    },
    {
      title: "Teacher Appreciation Week Special",
      date: "October 2025",
      attendees: "1500+",
      recording: true,
    },
    {
      title: "Back to School Tech Tips",
      date: "September 2025",
      attendees: "800+",
      recording: true,
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
              Events & Webinars
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Join our community events, learn from experts, and discover new
              ways to enhance your educational experience.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-12 text-center">
            Upcoming Events
          </h2>

          <div className="max-w-6xl mx-auto space-y-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 ${
                  event.featured
                    ? "border-2 border-brand-primary"
                    : "border border-gray-200"
                }`}
              >
                {event.featured && (
                  <div className="inline-block bg-brand-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Featured Event
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-heading mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-brand-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-brand-primary" />
                        <span>{event.attendees} registered</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="inline-block bg-brand-primary/10 text-brand-primary text-sm font-semibold px-4 py-2 rounded-lg text-center">
                      {event.type}
                    </span>
                    <button className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary-hover transition-colors flex items-center justify-center gap-2">
                      Register Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-12 text-center">
            Past Events
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
                >
                  <h3 className="text-lg font-semibold text-brand-heading mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{event.date}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Users className="w-4 h-4 text-brand-primary" />
                    <span>{event.attendees} attended</span>
                  </div>
                  {event.recording && (
                    <button className="text-brand-primary font-semibold text-sm hover:underline flex items-center gap-2">
                      Watch Recording
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-primary to-brand-primary-hover text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter and get notified about upcoming
              events, webinars, and exclusive workshops.
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
