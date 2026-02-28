"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AboutUs() {
  const router = useRouter();
  const fadeUpDelay = (idx: number) => `${idx * 0.15}s`;

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
    <main className="bg-background text-foreground min-h-screen pt-32 pb-24 px-6 select-none overflow-x-hidden">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          About My Tower
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Smart Tower Management for Modern Living
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto space-y-6 mb-20">
        {[
          "In today’s fast-evolving urban landscape, residential communities are becoming more complex and interconnected.",
          "Managing a modern tower requires more than registers and spreadsheets. It demands automation, transparency, and security.",
          "My Tower was built to meet this need.",
          "We are a comprehensive SaaS-based platform designed to transform how residential societies operate with 60+ powerful modules."
        ].map((text, idx) => (
          <p
            key={idx}
            className="text-lg md:text-xl leading-relaxed opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
            style={{ animationDelay: fadeUpDelay(idx) }}
          >
            {text}
          </p>
        ))}
      </section>

      {/* OUR STORY */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed">
            My Tower was founded with one powerful vision —
            <strong> to simplify society management and elevate residential living.</strong>
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Manual billing errors</li>
            <li>Poor communication gaps</li>
            <li>Security risks with paper-based logs</li>
            <li>Lack of financial transparency</li>
            <li>Delayed complaint resolutions</li>
          </ul>
          <p className="text-lg leading-relaxed">
            We built My Tower to eliminate these challenges through a centralized,
            cloud-based digital ecosystem.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">
            Our Vision
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto">
            To become the most trusted smart tower management platform,
            empowering communities with technology that enhances efficiency,
            transparency, and quality of life.
          </p>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            60+ Intelligent Modules
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Resident Management",
                desc: "Digital directories, announcements, voting system & engagement tools."
              },
              {
                title: "Visitor & Security",
                desc: "QR-based entry, guest approvals, delivery tracking, emergency alerts."
              },
              {
                title: "Billing Automation",
                desc: "Maintenance invoices, reminders, online payments, financial reports."
              },
              {
                title: "Complaint System",
                desc: "Real-time ticket tracking, escalation workflows & analytics."
              },
              {
                title: "Staff & Vendor",
                desc: "Attendance tracking, vendor contracts & monitoring."
              },
              {
                title: "Facility Booking",
                desc: "Clubhouse, gym, parking & event space management."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition"
              >
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            Why Choose My Tower?
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Efficiency", desc: "Automate repetitive administrative tasks." },
              { title: "Transparency", desc: "Clear financial reports & visibility." },
              { title: "Security", desc: "Digital visitor & staff monitoring." },
              { title: "Convenience", desc: "Mobile-first access anytime, anywhere." },
              { title: "Accountability", desc: "Track complaints & operations in real time." }
            ].map((card, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 border rounded-xl bg-card shadow hover:shadow-2xl transition"
              >
                <div className="text-primary text-2xl">✔</div>
                <div>
                  <h4 className="font-semibold text-lg">{card.title}</h4>
                  <p className="text-muted-foreground">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">
            Our Commitment
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe technology should simplify lives.
            My Tower is committed to continuous innovation,
            user-friendly design, reliable support,
            and long-term community partnerships.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-primary text-primary-foreground rounded-3xl mx-6 md:mx-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Your Smart Living Journey
        </h2>
        <p className="mb-8 text-primary-foreground/80">
          Experience seamless society management with My Tower.
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-8 py-4 bg-white text-primary rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
        >
          Start Free Trial
        </button>
      </section>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-[fadeUp_0.8s_ease-out_forwards] {
          animation: fadeUp 0.8s ease-out forwards;
        }
      `}</style>

    </main>
  );
}