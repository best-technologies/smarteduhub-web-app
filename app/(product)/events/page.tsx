import React from "react";
import Image from "next/image";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { Calendar, MapPin, Users, Clock, ArrowRight, Play } from "lucide-react";
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
  const eventGalleries = [
    {
      title: "Internal Board Presentation",
      description:
        "SmartEdu Hub prototype presented to our internal board and company delegates, showcasing the vision and capabilities of our education management platform.",
      category: "delegates",
      images: [
        "/events/delegates-01.jpeg",
        "/events/delegates-02.jpeg",
        "/events/delegates-03.jpeg",
        "/events/delegates-04.jpeg",
        "/events/delegates-05.jpeg",
        "/events/delegates-06.jpeg",
        "/events/delegates-07.jpeg",
        "/events/delegates-08.jpeg",
      ],
    },
    {
      title: "Nigeria International Book Fair 2025",
      description:
        "SmartEdu Hub made its public debut at NIBF 2025, held at Balmoral Event Centre, Sheraton Hotel, Ikeja, Lagos. The event brought together publishers, school owners, authors, parents, and students, providing an excellent platform to showcase our innovative education solutions.",
      category: "nibf",
      images: [
        "/events/nibf-01.jpeg",
        "/events/nibf-02.jpeg",
        "/events/nibf-03.jpeg",
        "/events/nibf-04.jpeg",
        "/events/nibf-05.jpeg",
        "/events/nibf-06.jpeg",
      ],
    },
    {
      title: "Port Harcourt Educators Showcase",
      description:
        "Engaging with the education community in Port Harcourt, we presented SmartEdu Hub to school owners, teachers, and parents, demonstrating how our platform addresses their unique educational needs.",
      category: "ph",
      images: [
        "/events/ph-01.jpeg",
        "/events/ph-02.jpeg",
        "/events/ph-03.jpeg",
        "/events/ph-04.jpeg",
      ],
    },
    {
      title: "Kano Education Summit",
      description:
        "SmartEdu Hub was presented to educators in Kano, northern Nigeria. Attendees included school owners, teachers, state government officials, and parents, all eager to explore digital transformation in education.",
      category: "kano",
      images: [
        "/events/kano-01.jpeg",
        "/events/kano-02.jpeg",
        "/events/kano-03.jpeg",
        "/events/kano-04.jpeg",
      ],
    },
  ];

  const eventVideos = [
    // "/events/smeh-video-01.mp4",
    "/events/smeh-video-02.mp4",
    "/events/smeh-video-03.mp4",
    "/events/smeh-video-04.mp4",
    "/events/smeh-video-05.mp4",
    "/events/smeh-video-06.mp4",
    "/events/smeh-video-07.mp4",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-hover text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Events Gallery
            </h1>
            <p className="text-sm md:text-xl text-white/90">
              Explore moments from our journey as we showcase SmartEdu Hub
              across Nigeria, connecting with educators, stakeholders, and the
              education community.
            </p>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-20">
            {eventGalleries.map((gallery, galleryIndex) => (
              <div key={galleryIndex} className="space-y-8">
                <div className="text-center max-w-4xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-heading mb-4">
                    {gallery.title}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600">
                    {gallery.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {gallery.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
                    >
                      <Image
                        src={image}
                        alt={`${gallery.title} - Image ${imageIndex + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Video Section */}
            <div className="space-y-8">
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-heading mb-4">
                  Event Highlights - Video Gallery
                </h3>
                <p className="text-sm md:text-lg text-gray-600">
                  Watch video highlights from our events, capturing the energy,
                  enthusiasm, and impact of SmartEdu Hub presentations across
                  various locations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventVideos.map((video, videoIndex) => (
                  <div
                    key={videoIndex}
                    className="aspect-video overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group"
                  >
                    <video
                      src={video}
                      className="w-full h-full object-cover"
                      controls
                      muted
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
              Stay Connected
            </h2>
            <p className="text-base md:text-xl text-gray-600 mb-4">
              Subscribe to our newsletter and be the first to know about
              upcoming events, product updates, and exclusive educational
              insights.
            </p>
            <p className="text-sm md:text-lg text-gray-500">
              Join our growing community of educators and stay informed!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
