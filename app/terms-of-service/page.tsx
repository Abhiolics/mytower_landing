"use client";

import { useEffect } from "react";

export default function TermsPage() {

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
          Terms & Conditions
        </h1>
        <p className="mt-4 text-muted-foreground">
          My Tower – Smart Tower Management for Modern Living
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto space-y-14 text-muted-foreground leading-relaxed">

        {/* Intro */}
        <div>
          <p>
            Welcome to <strong>My Tower</strong>. These Terms & Conditions (“Terms”)
            govern your access to and use of the My Tower SaaS platform,
            mobile applications, and related services (“Services”).
            By accessing or using our Services, you agree to be bound by these Terms.
          </p>
        </div>

        {/* 1 */}
        <div id="definitions">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            1. Definitions
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Platform:</strong> My Tower web and mobile applications.</li>
            <li><strong>User:</strong> Residents, tenants, committee members, security staff, or authorized users.</li>
            <li><strong>Society:</strong> Residential association or property management subscribing to services.</li>
            <li><strong>Services:</strong> All modules and functionalities provided by My Tower.</li>
          </ul>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            2. Eligibility
          </h2>
          <p>
            You must be authorized by your residential society to use this platform.
            By using My Tower, you confirm that you are at least 18 years old
            or using the platform under supervision of an authorized guardian.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            3. Account Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintain confidentiality of login credentials</li>
            <li>Ensure account information is accurate</li>
            <li>Notify admin in case of unauthorized access</li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            4. Scope of Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Resident Management</li>
            <li>Visitor & Security Management</li>
            <li>Billing & Accounting</li>
            <li>Facility Booking</li>
            <li>Complaint System</li>
            <li>Communication Tools</li>
          </ul>
          <p className="mt-4">
            We reserve the right to modify or upgrade modules at any time.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            5. Payments & Subscription
          </h2>
          <p>
            Subscription agreements are executed with residential societies.
            Residents may use integrated payment gateways for dues.
            My Tower is not liable for third-party gateway downtime.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            6. Acceptable Use
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>No unlawful or abusive use</li>
            <li>No hacking or reverse engineering</li>
            <li>No misleading information</li>
          </ul>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            7. Data & Privacy
          </h2>
          <p>
            Use of this platform is governed by our Privacy Policy.
            Data access permissions are managed by society administrators.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            8. Intellectual Property
          </h2>
          <p>
            All software, branding, and design elements belong to My Tower.
            Unauthorized copying or redistribution is prohibited.
          </p>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            9. Service Availability
          </h2>
          <p>
            We strive for high uptime but do not guarantee uninterrupted service.
            Maintenance or technical issues may cause temporary disruptions.
          </p>
        </div>

        {/* 10 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            10. Limitation of Liability
          </h2>
          <p>
            My Tower shall not be liable for indirect or consequential damages.
            Internal society disputes remain the responsibility of society management.
          </p>
        </div>

        {/* 11 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            11. Termination
          </h2>
          <p>
            Accounts violating these Terms may be suspended.
            Service access may end upon subscription expiry.
          </p>
        </div>

        {/* 12 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            12. Indemnification
          </h2>
          <p>
            Users agree to indemnify My Tower against claims arising from misuse or legal violations.
          </p>
        </div>

        {/* 13 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            13. Governing Law
          </h2>
          <p>
            These Terms shall be governed by applicable laws of India.
            Disputes shall fall under the jurisdiction of competent courts.
          </p>
        </div>

        {/* 14 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            14. Amendments
          </h2>
          <p>
            We may update these Terms from time to time.
            Continued use constitutes acceptance of updated Terms.
          </p>
        </div>

        {/* 15 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            15. Contact Information
          </h2>
          <p>
            <strong>My Tower Support Team</strong><br />
            Email: support@mytower.com<br />
            Website: www.mytower.com
          </p>
        </div>

        {/* AGREEMENT */}
        <div className="pt-10 border-t">
          <p className="font-semibold text-foreground">
            By using My Tower, you acknowledge that you have read and agreed to these Terms & Conditions.
          </p>
        </div>

      </section>

    </main>
  );
}