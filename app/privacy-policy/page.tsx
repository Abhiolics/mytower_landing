"use client";

import { useEffect } from "react";

export default function PrivacyPolicyPage() {

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")!.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 90;
          const position =
            element.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: position, behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen pt-32 pb-24 px-6 select-none">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground">
          My Tower – Smart Tower Management for Modern Living
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <strong>Last Updated:</strong> 01/03/26
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto space-y-14 text-muted-foreground leading-relaxed">

        {/* Intro */}
        <div>
          <p>
            My Tower (“we,” “our,” or “us”) is committed to protecting the
            privacy and security of residents, management committees,
            staff, and all users who access our platform.
            This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our Services.
          </p>
        </div>

        {/* 1 */}
        <div id="information">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            1. Information We Collect
          </h2>

          <h3 className="font-semibold text-foreground mb-2">
            A. Personal Information
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Apartment / unit number</li>
            <li>Profile photo (optional)</li>
            <li>Role within the society</li>
          </ul>

          <h3 className="font-semibold text-foreground mt-6 mb-2">
            B. Visitor & Security Data
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visitor name and contact number</li>
            <li>Entry and exit logs</li>
            <li>Vehicle details</li>
            <li>Approval records</li>
          </ul>

          <h3 className="font-semibold text-foreground mt-6 mb-2">
            C. Billing & Financial Information
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintenance invoices</li>
            <li>Payment history</li>
            <li>Transaction records</li>
            <li>Outstanding dues</li>
          </ul>
          <p className="mt-2">
            Payment processing is handled by secure third-party gateways.
            We do not store sensitive card or banking credentials.
          </p>

          <h3 className="font-semibold text-foreground mt-6 mb-2">
            D. Device & Technical Information
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Device type</li>
            <li>Browser type</li>
            <li>Usage logs</li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Managing resident and society records</li>
            <li>Visitor approvals & security logs</li>
            <li>Automating billing & payment reminders</li>
            <li>Complaint tracking</li>
            <li>Facility booking management</li>
            <li>Sending notifications & announcements</li>
            <li>Improving platform performance</li>
          </ul>
          <p className="mt-4 font-medium text-foreground">
            We do not sell, rent, or trade your personal information.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            3. Data Sharing & Disclosure
          </h2>

          <h3 className="font-semibold text-foreground mb-2">
            A. Within Your Society
          </h3>
          <p>
            Data is accessible to authorized committee members and
            security personnel strictly for operational purposes.
          </p>

          <h3 className="font-semibold text-foreground mt-6 mb-2">
            B. Service Providers
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment gateway partners</li>
            <li>Cloud hosting providers</li>
            <li>SMS / email notification services</li>
          </ul>

          <h3 className="font-semibold text-foreground mt-6 mb-2">
            C. Legal Compliance
          </h3>
          <p>
            We may disclose information if required under applicable law
            or court order.
          </p>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            4. Data Security
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure cloud infrastructure</li>
            <li>Encrypted data transmission (HTTPS)</li>
            <li>Role-based access control</li>
            <li>Secure authentication protocols</li>
          </ul>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            5. Data Retention
          </h2>
          <p>
            We retain personal information only as long as necessary for
            operational, legal, and financial purposes.
            Data is securely deleted or anonymized when no longer required.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            6. User Rights
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion (subject to policy)</li>
            <li>Withdraw consent for communications</li>
          </ul>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            7. Cookies & Tracking
          </h2>
          <p>
            We may use cookies to improve user experience,
            maintain login sessions, and analyze performance.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            8. Children’s Privacy
          </h2>
          <p>
            We do not knowingly collect personal data from children
            without proper authorization.
          </p>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            9. Third-Party Links
          </h2>
          <p>
            We are not responsible for privacy practices of third-party services.
          </p>
        </div>

        {/* 10 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            10. Policy Updates
          </h2>
          <p>
            We may update this Privacy Policy from time to time.
            Continued use of the Services constitutes acceptance of changes.
          </p>
        </div>

        {/* 11 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            11. Contact Us
          </h2>
          <p>
            <strong>My Tower Support Team</strong><br />
            Email: support@mytower.com<br />
            Website: www.mytower.com
          </p>
        </div>

        {/* Closing */}
        <div className="pt-10 border-t">
          <p className="font-semibold text-foreground">
            At My Tower, privacy is not just compliance —
            it is our commitment to secure and transparent residential management.
          </p>
        </div>

      </section>

    </main>
  );
}