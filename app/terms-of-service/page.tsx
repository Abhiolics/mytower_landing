"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
    <Navbar/>
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#694CD0]">
            Terms & Conditions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            These Terms & Conditions govern access to and use of the MyTower
            platform and related services. By using MyTower, you agree to be
            legally bound by these terms.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </header>

        <div className="space-y-20 leading-relaxed text-foreground">

          {/* 1. Acceptance */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              By accessing or using MyTower (“Platform”), you confirm that you
              have read, understood, and agreed to these Terms & Conditions.
              If you do not agree, you must discontinue use immediately.
            </p>
          </section>

          {/* 2. Services */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              2. Description of Services
            </h2>
            <p className="text-muted-foreground">
              MyTower provides a digital society management platform including
              maintenance billing, visitor management, complaint tracking,
              announcements, financial transparency tools, and related features.
            </p>
          </section>

          {/* 3. User Responsibilities */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              3. User Responsibilities
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Provide accurate and updated information.</li>
              <li>• Maintain confidentiality of login credentials.</li>
              <li>• Use the platform only for lawful purposes.</li>
              <li>• Not misuse or attempt unauthorized access.</li>
            </ul>
          </section>

          {/* 4. Payment Terms */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              4. Fees & Payment Terms
            </h2>
            <p className="text-muted-foreground">
              Subscription fees, if applicable, must be paid in accordance with
              agreed billing cycles. Failure to make timely payments may result
              in suspension or termination of services.
            </p>

            <div className="mt-6 p-6 rounded-xl bg-[#694CD0]/10 border border-[#694CD0]/20">
              <p className="font-medium">
                Important:
              </p>
              <p className="text-muted-foreground mt-2">
                All payments once processed are non-refundable unless otherwise
                required under applicable law.
              </p>
            </div>
          </section>

          {/* 5. Data Ownership */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              5. Data Ownership & Usage
            </h2>
            <p className="text-muted-foreground">
              All society-related data entered into MyTower remains the property
              of the respective society or user. MyTower acts as a data processor
              and does not claim ownership of user data.
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              6. Intellectual Property Rights
            </h2>
            <p className="text-muted-foreground">
              The MyTower platform, including software, branding, design,
              and proprietary features, is protected under intellectual property
              laws. Unauthorized copying or redistribution is strictly prohibited.
            </p>
          </section>

          {/* 7. Limitation of Liability */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, MyTower shall not be
              liable for indirect, incidental, special, consequential, or
              punitive damages arising from use of the platform.
            </p>

            <div className="mt-6 p-6 rounded-xl bg-muted/40 border">
              <p className="font-medium">
                Liability Cap:
              </p>
              <p className="text-muted-foreground mt-2">
                Total liability shall not exceed the subscription fees paid
                by the user in the preceding 12 months.
              </p>
            </div>
          </section>

          {/* 8. Indemnification */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              8. Indemnification
            </h2>
            <p className="text-muted-foreground">
              Users agree to indemnify and hold harmless MyTower from claims,
              liabilities, damages, or expenses arising from misuse of the
              platform or violation of these terms.
            </p>
          </section>

          {/* 9. Termination */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              9. Suspension & Termination
            </h2>
            <p className="text-muted-foreground">
              MyTower reserves the right to suspend or terminate accounts
              that violate these terms, misuse the platform, or fail to make
              required payments.
            </p>
          </section>

          {/* 10. Force Majeure */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              10. Force Majeure
            </h2>
            <p className="text-muted-foreground">
              MyTower shall not be liable for delays or failures caused by
              events beyond reasonable control including natural disasters,
              government restrictions, cyber incidents, or network failures.
            </p>
          </section>

          {/* 11. Governing Law */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              11. Governing Law & Jurisdiction
            </h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and interpreted in accordance
              with the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of courts located in India.
            </p>
          </section>

          {/* 12. Amendments */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              12. Amendments
            </h2>
            <p className="text-muted-foreground">
              MyTower may update these Terms periodically. Continued use of
              the platform after modifications constitutes acceptance of
              revised terms.
            </p>
          </section>

          {/* 13. Contact */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              13. Contact Information
            </h2>
            <div className="border rounded-xl p-6 bg-muted/40">
              <p><strong>MyTower Legal Department</strong></p>
              <p>Email: support@mytower.in</p>
              <p>
                Website:{" "}
                <Link href="/" className="text-[#694CD0] hover:underline">
                  www.mytower.in
                </Link>
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}