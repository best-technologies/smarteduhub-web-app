import React from "react";

export default function CookiesPolicyContent() {
  return (
    <main className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-heading mb-6">
          Cookies Policy
        </h1>
        <p className="text-gray-600 mb-8">Last updated: 7 April 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            1. What Are Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cookies are small text files that are placed on your device when you
            visit our website. They help us provide you with a better experience
            and allow certain features to work properly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            2. How We Use Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use cookies for various purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for the platform to
              function properly
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us understand how
              visitors use our platform
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember your preferences and
              settings
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Collect information about how
              you use our platform
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            3. Types of Cookies We Use
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Session Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed">
                These are temporary cookies that expire when you close your
                browser.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Persistent Cookies
              </h3>
              <p className="text-gray-700 leading-relaxed">
                These remain on your device until they expire or you delete
                them.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            4. Managing Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can control and manage cookies in various ways. Please note that
            removing or blocking cookies may impact your user experience and
            some features may no longer be available.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            5. Third-Party Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may use third-party services that set cookies on our platform,
            including analytics providers and advertising networks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            6. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about our use of cookies, please contact
            us at privacy@smarteduhub.com
          </p>
        </section>
      </div>
    </main>
  );
}
