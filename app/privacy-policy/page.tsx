"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Hero Header */}
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#694CD0]">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            This Privacy Policy describes how MyTower collects, processes,
            stores, and protects personal data in connection with its
            society management platform and related services.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </header>

        <div className="space-y-20 leading-relaxed text-foreground">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              1. Introduction
            </h2>
            <p className="text-muted-foreground">
              MyTower (“Company”, “we”, “our”, “us”) is committed to protecting
              the privacy and security of residents, administrators, committee
              members, vendors, and visitors who use our platform.
              This policy explains how we handle personal data responsibly
              and transparently.
            </p>

            <div className="mt-6 p-6 rounded-xl bg-[#694CD0]/10 border border-[#694CD0]/20">
              <p className="font-medium">
                Important:
              </p>
              <p className="text-muted-foreground mt-2">
                By accessing or using MyTower, you acknowledge that you have
                read and understood this Privacy Policy and consent to the
                practices described herein.
              </p>
            </div>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              2. Information We Collect
            </h2>

            <div className="overflow-x-auto border rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#694CD0]/10">
                  <tr>
                    <th className="p-4 font-medium">Category</th>
                    <th className="p-4 font-medium">Examples</th>
                    <th className="p-4 font-medium">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Identity Data</td>
                    <td className="p-4">Name, Flat Number, Phone, Email</td>
                    <td className="p-4">User account creation</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Financial Data</td>
                    <td className="p-4">Maintenance dues, transaction records</td>
                    <td className="p-4">Billing & reporting</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Visitor Data</td>
                    <td className="p-4">Visitor name, entry logs</td>
                    <td className="p-4">Security & access control</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Technical Data</td>
                    <td className="p-4">IP address, device type</td>
                    <td className="p-4">Platform security & analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. How We Use Data */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              3. How We Use Information
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• To manage maintenance billing and financial records</li>
              <li>• To facilitate visitor approvals and entry logs</li>
              <li>• To resolve complaints and service requests</li>
              <li>• To send important society announcements</li>
              <li>• To ensure platform security and fraud prevention</li>
            </ul>
          </section>

          {/* 4. Legal Basis */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              4. Legal Basis for Processing
            </h2>
            <p className="text-muted-foreground">
              We process personal data based on contractual necessity,
              legitimate business interests, legal compliance, and user consent,
              as applicable under relevant data protection laws.
            </p>
          </section>

          {/* 5. Data Sharing */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              5. Data Sharing & Third Parties
            </h2>

            <div className="overflow-x-auto border rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#694CD0]/10">
                  <tr>
                    <th className="p-4 font-medium">Recipient</th>
                    <th className="p-4 font-medium">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Payment Gateways</td>
                    <td className="p-4">Secure online payment processing</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Cloud Hosting Providers</td>
                    <td className="p-4">Data storage & infrastructure</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Regulatory Authorities</td>
                    <td className="p-4">Legal compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-6 rounded-xl bg-muted/40 border">
              <p className="font-medium">
                We Do Not Sell Personal Data.
              </p>
              <p className="text-muted-foreground mt-2">
                MyTower does not sell or trade user data to advertisers
                or external marketing agencies.
              </p>
            </div>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              6. Data Retention
            </h2>
            <p className="text-muted-foreground">
              Personal data is retained only as long as necessary to
              fulfill contractual obligations, maintain financial records,
              comply with regulatory requirements, or resolve disputes.
            </p>
          </section>

          {/* 7. Security Measures */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              7. Security Measures
            </h2>
            <p className="text-muted-foreground">
              We implement encryption, secure servers, role-based access
              controls, audit logs, and periodic security reviews to protect
              data against unauthorized access, alteration, or loss.
            </p>

            <div className="mt-6 p-6 rounded-xl bg-[#694CD0]/10 border border-[#694CD0]/20">
              <p className="font-medium">
                Security Commitment:
              </p>
              <p className="text-muted-foreground mt-2">
                While no system is completely immune from risks,
                MyTower continuously enhances its security infrastructure
                to meet evolving industry standards.
              </p>
            </div>
          </section>

          {/* 8. User Rights */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              8. Your Rights
            </h2>
            <p className="text-muted-foreground">
              Users may request access, correction, or deletion of personal
              data subject to applicable laws. Requests may be submitted
              through official contact channels.
            </p>
          </section>

          {/* 9. Cookies */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              9. Cookies & Tracking
            </h2>
            <p className="text-muted-foreground">
              MyTower may use cookies and similar technologies to enhance
              platform performance and user experience. Users may disable
              cookies through browser settings, though certain features may
              be affected.
            </p>
          </section>

          {/* 10. Contact */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              10. Contact Information
            </h2>
            <div className="border rounded-xl p-6 bg-muted/40">
              <p><strong>MyTower Support Team</strong></p>
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