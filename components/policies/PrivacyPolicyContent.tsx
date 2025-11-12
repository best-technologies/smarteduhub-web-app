import React from "react";

export default function PrivacyPolicyContent() {
  return (
    <main className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-heading mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to SmartEdu Hub. We respect your privacy and are committed
            to protecting your personal data. This privacy policy will inform
            you about how we look after your personal data and tell you about
            your privacy rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect, use, store and transfer different kinds of personal
            data about you including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Identity Data (name, username, etc.)</li>
            <li>Contact Data (email address, phone number, etc.)</li>
            <li>Technical Data (IP address, browser type, etc.)</li>
            <li>Usage Data (how you use our platform)</li>
            <li>Academic Data (grades, performance metrics, etc.)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use your personal data to provide and improve our educational
            services, communicate with you, and ensure platform security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We have implemented appropriate security measures to prevent your
            personal data from being accidentally lost, used, or accessed in an
            unauthorized way.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            5. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You have the right to access, correct, or delete your personal data.
            You may also object to processing or request data portability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            6. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this privacy policy, please contact
            us at privacy@smarteduhub.com
          </p>
        </section>
      </div>
    </main>
  );
}
