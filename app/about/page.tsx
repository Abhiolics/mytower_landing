"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
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
   <main className="bg-background text-foreground min-h-screen pt-32 pb-24 px-6 overflow-x-hidden">
<Navbar/>
  {/* HERO */}
  <section className="relative text-center mb-24">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
      About <span className="text-primary">My Tower</span>
    </h1>

    <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
      Redefining residential society management with intelligent automation,
      transparency, and modern digital infrastructure.
    </p>

    <div className="mt-8 w-20 h-1 bg-primary mx-auto rounded-full" />
  </section>

  {/* INTRO STORY BLOCK */}
  <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-28">

    <div className="space-y-6">
      <h2 className="text-3xl font-semibold">
        Smart Tower Management for Modern Living
      </h2>

      <p className="text-lg text-muted-foreground leading-relaxed">
        Urban communities are evolving rapidly. Managing a residential tower
        today requires more than spreadsheets and registers — it demands
        automation, transparency, and security.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed">
        My Tower is a powerful SaaS ecosystem with 60+ intelligent modules
        built to simplify operations, enhance communication, and improve
        community living standards.
      </p>
    </div>

    <div className="relative">
      <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-indigo-500/10 p-10 shadow-xl">
        <p className="text-lg leading-relaxed">
          “We didn’t just build software. We built a digital infrastructure
          that empowers societies to operate smarter, safer, and seamlessly.”
        </p>
      </div>
    </div>

  </section>

  {/* OUR STORY */}
  <section className="py-24 border-t border-border">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Our Story
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            My Tower was founded with a clear mission —
            <strong> simplify society management and elevate residential living.</strong>
          </p>

          <p className="text-lg text-muted-foreground">
            We identified critical pain points across residential communities.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            "Manual billing errors",
            "Communication gaps",
            "Paper-based security risks",
            "Lack of financial transparency",
            "Delayed complaint resolution"
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-card border shadow-sm hover:shadow-xl transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* VISION */}
  <section className="py-28 bg-gradient-to-b from-muted/40 to-transparent">
    <div className="max-w-4xl mx-auto text-center space-y-6">
      <h2 className="text-4xl font-semibold">
        Our Vision
      </h2>
      <p className="text-xl text-muted-foreground leading-relaxed">
        To become the most trusted smart tower management platform,
        empowering communities through intelligent digital infrastructure.
      </p>
    </div>
  </section>

  {/* MODULES */}
 <section className="relative py-28 overflow-hidden bg-gradient-to-b from-background to-muted/30">

  <div className="max-w-7xl mx-auto mb-16 text-center px-6">
    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
      60+ Intelligent Modules
    </h2>
    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
      A complete digital ecosystem designed to automate, secure, and optimize
      residential society management.
    </p>
  </div>

  {/* ================= MOBILE GRID ================= */}
  <div className="block lg:hidden px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        "Resident Management",
        "Visitor & Gate Entry",
        "QR Access Control",
        "Billing Automation",
        "Maintenance Tracking",
        "Complaint Ticketing",
        "Staff Attendance",
        "Vendor Contracts",
        "Parking Allocation",
        "Facility Booking",
        "Financial Reports",
        "Community Engagement"
      ].map((title, idx) => (
        <div
          key={idx}
          className="p-6 rounded-2xl border bg-card shadow-sm"
        >
          <h4 className="text-lg font-semibold mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground">
            Intelligent automation for seamless society operations.
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* ================= DESKTOP PARALLAX ================= */}
  <div className="hidden lg:block relative">

    {/* TOP ROW */}
    <div className="overflow-hidden">
      <div className="flex gap-8 animate-marquee-left">
        {[
          "Resident Management",
          "Visitor & Gate Entry",
          "QR Access Control",
          "Billing Automation",
          "Maintenance Tracking",
          "Complaint Ticketing",
          "Staff Attendance",
          "Vendor Contracts",
          "Parking Allocation",
          "Facility Booking",
          "Society Announcements",
          "Digital Voting",
          "Emergency Alerts",
          "Asset Management",
        ].map((title, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[300px] p-8 rounded-3xl border bg-card shadow-sm hover:shadow-2xl transition"
          >
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-sm text-muted-foreground">
              Intelligent automation for seamless operations.
            </p>
          </div>
        ))}

        {/* duplicate */}
        {[
          "Resident Management",
          "Visitor & Gate Entry",
          "QR Access Control",
          "Billing Automation",
          "Maintenance Tracking",
          "Complaint Ticketing",
          "Staff Attendance",
          "Vendor Contracts",
          "Parking Allocation",
          "Facility Booking",
          "Society Announcements",
          "Digital Voting",
          "Emergency Alerts",
          "Asset Management",
        ].map((title, idx) => (
          <div
            key={`dup-${idx}`}
            className="flex-shrink-0 w-[300px] p-8 rounded-3xl border bg-card shadow-sm"
          >
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-sm text-muted-foreground">
              Intelligent automation for seamless operations.
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* BOTTOM ROW */}
    <div className="overflow-hidden mt-10">
      <div className="flex gap-8 animate-marquee-right">
        {[
          "Financial Reports",
          "Audit Ready Ledger",
          "Online Payments",
          "SMS & Email Alerts",
          "Security Dashboard",
          "CCTV Logs",
          "Helpdesk Analytics",
          "Staff Verification",
          "Society Compliance",
          "Inventory Management",
          "Clubhouse Booking",
          "Visitor History Logs",
          "Role Based Access",
          "Community Engagement",
        ].map((title, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[300px] p-8 rounded-3xl border bg-card shadow-sm hover:shadow-2xl transition"
          >
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-sm text-muted-foreground">
              Built for scalability and transparency.
            </p>
          </div>
        ))}

        {/* duplicate */}
        {[
          "Financial Reports",
          "Audit Ready Ledger",
          "Online Payments",
          "SMS & Email Alerts",
          "Security Dashboard",
          "CCTV Logs",
          "Helpdesk Analytics",
          "Staff Verification",
          "Society Compliance",
          "Inventory Management",
          "Clubhouse Booking",
          "Visitor History Logs",
          "Role Based Access",
          "Community Engagement",
        ].map((title, idx) => (
          <div
            key={`dup2-${idx}`}
            className="flex-shrink-0 w-[300px] p-8 rounded-3xl border bg-card shadow-sm"
          >
            <h4 className="text-lg font-semibold mb-2">{title}</h4>
            <p className="text-sm text-muted-foreground">
              Built for scalability and transparency.
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Edge Fade */}
    <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
    <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />

  </div>

</section>

  {/* WHY CHOOSE */}
  <section className="py-28 bg-muted/40">
    <div className="max-w-6xl mx-auto text-center">
      <h3 className="text-4xl font-semibold mb-16">
        Why Choose My Tower?
      </h3>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[
          { title: "Efficiency", desc: "Automate administrative tasks." },
          { title: "Transparency", desc: "Clear financial visibility." },
          { title: "Security", desc: "Digital visitor control." },
          { title: "Convenience", desc: "Mobile-first platform." },
          { title: "Accountability", desc: "Real-time tracking." },
        ].map((card, idx) => (
          <div
            key={idx}
            className="p-8 bg-card border rounded-3xl shadow-sm hover:shadow-2xl transition"
          >
            <h4 className="font-semibold text-lg mb-2">
              {card.title}
            </h4>
            <p className="text-muted-foreground">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
<section className="relative py-32 px-6">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-indigo-500/10 to-transparent blur-3xl" />

  <div className="max-w-5xl mx-auto text-center relative">

    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-indigo-600 p-12 md:p-20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]">

      {/* Soft Light Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

      <div className="relative z-10">

        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
          Start Your Smart Living Journey
        </h2>

        <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
          Experience seamless society management with My Tower —
          built for modern, secure, and transparent communities.
        </p>

        <div className="mt-10">
          <button
            onClick={() => router.push("/")}
            className="group relative px-10 py-4 rounded-xl font-semibold text-lg bg-white text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            <span className="relative z-10">
              Start Free Trial
            </span>

            {/* Button subtle shine */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-20 transition duration-500" />
          </button>
        </div>

      </div>

    </div>

  </div>

</section>

</main>
  );
}