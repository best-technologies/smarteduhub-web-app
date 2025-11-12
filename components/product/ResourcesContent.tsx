import React from "react";
import Link from "next/link";

export default function ResourcesContent() {
  return (
    <main className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-heading mb-4">
            Resources
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to get the most out of SmartEdu Hub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Documentation */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-2">
              Documentation
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive guides and API documentation for developers and
              administrators.
            </p>
            <Link
              href="#"
              className="text-brand-primary hover:text-brand-primary-hover font-medium"
            >
              View Docs →
            </Link>
          </div>

          {/* Tutorials */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-2">
              Video Tutorials
            </h3>
            <p className="text-gray-600 mb-4">
              Step-by-step video guides to help you navigate and use all
              features effectively.
            </p>
            <Link
              href="#"
              className="text-brand-primary hover:text-brand-primary-hover font-medium"
            >
              Watch Videos →
            </Link>
          </div>

          {/* Case Studies */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-2">
              Case Studies
            </h3>
            <p className="text-gray-600 mb-4">
              Real-world examples of schools and institutions succeeding with
              SmartEdu Hub.
            </p>
            <Link
              href="#"
              className="text-brand-primary hover:text-brand-primary-hover font-medium"
            >
              Read Stories →
            </Link>
          </div>

          {/* Help Center */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-2">
              Help Center
            </h3>
            <p className="text-gray-600 mb-4">
              Find answers to frequently asked questions and get support.
            </p>
            <Link
              href="/support"
              className="text-brand-primary hover:text-brand-primary-hover font-medium"
            >
              Get Help →
            </Link>
          </div>

          {/* Community */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-2">
              Community Forum
            </h3>
            <p className="text-gray-600 mb-4">
              Connect with other educators and share best practices.
            </p>
            <Link
              href="#"
              className="text-brand-primary hover:text-brand-primary-hover font-medium"
            >
              Join Community →
            </Link>
          </div>

          {/* Webinars */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-heading mb-2">
              Webinars
            </h3>
            <p className="text-gray-600 mb-4">
              Join live sessions and workshops with education experts.
            </p>
            <Link
              href="#"
              className="text-brand-primary hover:text-brand-primary-hover font-medium"
            >
              View Schedule →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-brand-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-brand-heading mb-4">
            Need More Help?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to assist you with any questions.
          </p>
          <Link
            href="/support"
            className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-brand-primary-hover transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
