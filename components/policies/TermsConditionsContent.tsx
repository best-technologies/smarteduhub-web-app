import Link from "next/link";
import React from "react";

export default function TermsConditionsContent() {
  return (
    <main className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-heading mb-6">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 mb-4">Last updated: 17 December 2025</p>

        <p className="text-gray-700 leading-relaxed mb-8">
          These Terms and Conditions (&quot;Terms&quot;) constitute a legally
          binding agreement between SmartEdu Hub (&quot;SmartEdu Hub&quot;,
          &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) and any natural
          person or legal entity (&quot;User&quot;, &quot;you&quot;,
          &quot;your&quot;) who accesses, registers for, or otherwise makes use
          of our platform, applications, or related services (collectively, the
          &quot;Services&quot;). By accessing or using the Services, you
          acknowledge that you have read, understood, and agreed to be bound by
          these Terms.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            1. Eligibility
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              Access to the Services is granted only to schools, teachers,
              parents, and students acting in compliance with applicable laws
              and regulations.
            </li>
            <li>
              Users under the age of thirteen (13) require consent of a parent,
              guardian, or duly authorised educational institution.
            </li>
            <li>
              You represent and warrant that you have the legal capacity to
              enter into this agreement.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            2. Account Registration and Security
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              Schools and administrators are responsible for the accuracy and
              completeness of information provided during account creation.
            </li>
            <li>
              You must maintain the confidentiality of your login credentials
              and shall be held liable for all activities conducted under your
              account.
            </li>
            <li>
              You agree to notify SmartEdu Hub immediately of any unauthorised
              access or security breach affecting your account.
            </li>
            <li>
              Failure to provide accurate information may result in immediate
              suspension or termination of your account.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            3. Scope of Services
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              SmartEdu Hub provides comprehensive educational management tools
              including but not limited to classroom management, lesson
              planning, assignment creation and grading, attendance tracking,
              parent-teacher communication, student analytics, and
              administrative functions.
            </li>
            <li>
              Access to specific features and functionalities is subject to
              subscription level and service agreements.
            </li>
            <li>
              We reserve the right to modify, suspend, or discontinue any aspect
              of the Services with reasonable notice to Users.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            4. Acceptable Use Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree to use the Services in accordance with the following
            conditions:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              You shall not employ the Services for unlawful, fraudulent,
              defamatory, or unauthorised purposes.
            </li>
            <li>
              You shall not upload or transmit malicious code, viruses, or any
              harmful software that may damage or disrupt the Services.
            </li>
            <li>
              You shall not attempt to gain unauthorised access to any portion
              of the Services, other user accounts, or computer systems
              connected to the Services.
            </li>
            <li>
              You shall not reverse engineer, decompile, or attempt to extract
              source code from any aspect of the Services.
            </li>
            <li>
              You agree to use the Services solely in compliance with applicable
              education, child protection, and data privacy laws and
              regulations.
            </li>
            <li>
              You shall not use the Services to harass, abuse, threaten, or
              intimidate any other user or individual.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            5. Intellectual Property Rights
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              SmartEdu Hub retains exclusive ownership of all intellectual
              property rights subsisting in the Services, including but not
              limited to software code, algorithms, designs, user interfaces,
              trade names, trademarks, and proprietary methodologies.
            </li>
            <li>
              Schools, teachers, and users retain all rights to content lawfully
              uploaded by them, including student records, educational
              materials, assignments, and assessment data.
            </li>
            <li>
              By uploading content to the Services, you grant SmartEdu Hub a
              limited, non-exclusive, worldwide licence to store, process, and
              display such content solely for the provision and improvement of
              the Services.
            </li>
            <li>
              You warrant that all content uploaded does not infringe upon the
              intellectual property rights of any third party.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            6. Subscription and Payment Terms
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              Use of certain features of the Services may be subject to
              subscription fees as specified in the Pricing Schedule published
              on our website.
            </li>
            <li>
              All fees are exclusive of applicable taxes, levies, duties, or
              governmental charges imposed by taxing authorities, which shall be
              borne by the User.
            </li>
            <li>
              Subscription fees are payable in advance on a monthly or annual
              basis as selected by the User.
            </li>
            <li>
              Failure to remit timely payments may result in suspension or
              termination of access to paid features and Services.
            </li>
            <li>
              SmartEdu Hub reserves the right to modify pricing with at least
              thirty (30) days&apos; prior notice to existing subscribers.
            </li>
            <li>
              Refunds shall be issued at SmartEdu Hub&apos;s sole discretion in
              accordance with our Refund Policy.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            7. Limitation of Liability and Warranty Disclaimer
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              The Services are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranty of any kind, whether
              express or implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose, or
              uninterrupted or error-free operation.
            </li>
            <li>
              SmartEdu Hub does not warrant that the Services will meet your
              specific requirements or that defects will be corrected.
            </li>
            <li>
              SmartEdu Hub shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to loss of profits, data, use, goodwill, or other
              intangible losses arising out of or relating to your use of the
              Services.
            </li>
            <li>
              To the fullest extent permitted by applicable law, SmartEdu
              Hub&apos;s aggregate liability under these Terms shall not exceed
              the total fees paid by the User in the preceding twelve (12)
              months, or one hundred thousand naira (₦100,000), whichever is
              greater.
            </li>
            <li>
              SmartEdu Hub shall not be held liable for any failure or delay in
              performance resulting from causes beyond its reasonable control,
              including acts of God, natural disasters, or telecommunications
              failures.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            8. Data Protection and Privacy
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              All Personal Data shall be collected, processed, and stored in
              accordance with the SmartEdu Hub Privacy Policy and applicable
              data protection laws.
            </li>
            <li>
              Schools and educational institutions, acting as Data Controllers,
              warrant that all requisite consents for the provision of student
              data have been duly obtained from parents, guardians, or
              authorised representatives.
            </li>
            <li>
              SmartEdu Hub implements industry-standard security measures to
              protect user data, including encryption, access controls, and
              regular security audits.
            </li>
            <li>
              Users have the right to access, rectify, or request deletion of
              their personal data in accordance with applicable law.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            9. Termination and Suspension
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              Users may discontinue use of the Services at any time by ceasing
              access and, where applicable, cancelling their subscription
              through account settings or by contacting our support team.
            </li>
            <li>
              SmartEdu Hub reserves the right to suspend or terminate accounts
              immediately where there is a material breach of these Terms,
              non-payment of fees, violation of applicable laws, or compliance
              with legal orders or governmental requests.
            </li>
            <li>
              Upon termination, your right to access and use the Services shall
              cease immediately.
            </li>
            <li>
              SmartEdu Hub will make reasonable efforts to provide access to
              export user data for a period of thirty (30) days following
              termination, subject to technical feasibility.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            10. Governing Law and Jurisdiction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which SmartEdu Hub is registered and
            operates, without prejudice to mandatory provisions of applicable
            foreign law where relevant. Any disputes arising from or relating to
            these Terms shall be subject to the exclusive jurisdiction of the
            competent courts in such jurisdiction, unless otherwise agreed in
            writing by both parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            11. Amendments to Terms
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>
              SmartEdu Hub reserves the right to amend, modify, or update these
              Terms periodically to reflect changes in our Services, legal
              requirements, or business practices.
            </li>
            <li>
              Notice of material changes shall be communicated to users via
              electronic mail to the registered email address or through
              in-platform notifications.
            </li>
            <li>
              Continued use of the Services after receiving notice of amendments
              shall constitute acceptance of the modified Terms.
            </li>
            <li>
              If you do not agree to the amended Terms, you must discontinue use
              of the Services immediately.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            12. Indemnification
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree to indemnify, defend, and hold harmless SmartEdu Hub, its
            officers, directors, employees, agents, and affiliates from and
            against any claims, liabilities, damages, losses, costs, or expenses
            (including reasonable legal fees) arising out of or relating to your
            use of the Services, violation of these Terms, or infringement of
            any third-party rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            13. Severability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If any provision of these Terms is found to be invalid, illegal, or
            unenforceable by a court of competent jurisdiction, such provision
            shall be modified to the minimum extent necessary to make it valid
            and enforceable, or if such modification is not possible, the
            provision shall be severed from these Terms. The remaining
            provisions shall continue in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-brand-heading mb-4">
            14. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            If you have any questions, concerns, or requests regarding these
            Terms and Conditions, please contact us at:{" "}
            <Link
              href="/support"
              className="text-brand-primary hover:underline"
            >
              Support
            </Link>
          </p>
          <div className="ml-6 text-gray-700 leading-relaxed">
            {/* <p>
              Email:{" "}
              <a
                href="mailto:legal@smarteduhub.com"
                className="text-brand-primary hover:underline"
              >
                legal@smarteduhub.com
              </a>
            </p>
            <p>
              Support:{" "}
              <a
                href="mailto:support@smarteduhub.com"
                className="text-brand-primary hover:underline"
              >
                support@smarteduhub.com
              </a>
            </p> */}
          </div>
        </section>
      </div>
    </main>
  );
}
