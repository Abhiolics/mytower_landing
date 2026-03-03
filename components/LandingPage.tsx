"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Building2,
  Users,
  Shield,
  Car,
  Receipt,
  Bell,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  BarChart3,
  Lock,
  Globe,
  Star,
  MessageSquare,
  Calendar,
  CreditCard,
  CheckCircle,
  Briefcase,
} from "lucide-react";
import WhyMyTower from "./WhyMyTower";
import Feature01 from "./shadcn-space/blocks/feature-01";
import CTA from "./shadcn-space/blocks/cta-01/cta";
import Faq from "./shadcn-space/blocks/faq-01/faq";
import Hero02Page from "./shadcn-space/blocks/hero-02";

export default function Home() {
  const features = [
    {
      icon: Building2,
      title: "Multi-Society Management",
      description: "Manage multiple residential societies from a single dashboard with complete isolation."
    },
    {
      icon: Users,
      title: "Resident Portal",
      description: "Self-service portal for residents to manage visitors, pay bills, and raise complaints."
    },
    {
      icon: Shield,
      title: "Security Management",
      description: "Digital visitor management, gate passes, and emergency alert system."
    },
    {
      icon: Car,
      title: "Vehicle & Parking",
      description: "Register vehicles, manage parking slots, and track visitor vehicles."
    },
    {
      icon: Receipt,
      title: "Billing & Payments",
      description: "Automated maintenance billing, utility tracking, and online payment collection."
    },
    {
      icon: Bell,
      title: "Communication Hub",
      description: "Notice board, announcements, and instant notifications for residents."
    }
  ];

 

  const modules = [
  { title: "Visitor Management", icon: Shield },
  { title: "Billing & Accounting", icon: CreditCard },
  { title: "Facility Booking", icon: Calendar },
  { title: "Complaint Tracking", icon: MessageSquare },
  { title: "Staff Attendance", icon: Users },
  { title: "Security Logs", icon: Lock },
  { title: "Parking Management", icon: Car },
  { title: "Digital Voting", icon: CheckCircle },
  { title: "Vendor Contracts", icon: Briefcase },
  { title: "Emergency Alerts", icon: Bell },
];



  return (
    <div className="min-h-screen bg-background" data-testid="landing-page">
      {/* Navigation */}
      <Hero02Page/>

      {/* HERO */}
     {/* <section className="relative pt-36 pb-28 px-6 overflow-hidden" data-testid="hero-section">
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#694CD0]/10 via-transparent to-transparent" />
  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#694CD0]/20 rounded-full blur-3xl -z-10" />
  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl -z-10" />

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

     
      <div className="space-y-10 text-center lg:text-left">

     
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#694CD0]/10 text-[#694CD0] text-sm font-medium">
          <Shield className="w-4 h-4" />
          Enterprise-Grade Society Management
        </div>

       
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
          Smart Tower
          <span className="block bg-gradient-to-r from-[#694CD0] to-purple-500 bg-clip-text text-transparent">
            Management for Modern Living
          </span>
        </h1>

       
        <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Complete SaaS solution for residential societies and towers with 60+ intelligent modules covering residents, visitors, billing, staff, facilities, and security management.
        </p>

    
        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

          <Button
            size="lg"
            className="bg-[#694CD0] hover:bg-[#5c40b8] text-white px-8 shadow-lg shadow-[#694CD0]/30 transition-all hover:scale-105"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-[#694CD0]/40 text-[#694CD0] hover:bg-[#694CD0]/10 px-8"
          >
            <Smartphone className="w-4 h-4 mr-2" />
            Watch Demo
          </Button>

        </div>

       
        <div className="flex justify-center lg:justify-start gap-12 pt-6">
          {[
            { value: "60+", label: "Modules" },
            { value: "24/7", label: "Support" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-semibold text-[#694CD0]">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      
      <div className="relative">

       
        <div className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(105,76,208,0.35)] border bg-white">
          <img
            src="/landing_img.jpg"
            alt="Modern Residential Building"
            className="w-full h-[450px] object-cover"
          />
        </div>

        
        <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border hidden sm:block">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#694CD0]/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-[#694CD0]" />
            </div>
            <div>
              <p className="font-semibold text-sm">
                Trusted by 500+ Societies
              </p>
              <p className="text-xs text-muted-foreground">
                Across India
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section> */}

      {/* FEATURES */}
    <section
  id="features"
  className="relative py-28 px-6 bg-gradient-to-b from-muted/40 to-background"
>
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
        Everything You Need to Manage Your Society
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        Powerful features crafted for modern residential communities.
      </p>
    </div>

    {/* Masonry Layout */}
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">

      {features.map((feature, index) => (
        <div
          key={index}
          className="break-inside-avoid group relative rounded-3xl p-8 bg-card border "
        >

          {/* Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 rounded-3xl" />

          <div className="relative z-10">

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
              <feature.icon className="w-7 h-7 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-4">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>
       {/* Modules Section */}
   <section
  id="modules"
  className="py-24 px-6 bg-gradient-to-b from-background to-muted/30"
>
  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-semibold tracking-tight mb-4">
        60+ Integrated Modules
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        A complete ecosystem for modern society management.
      </p>
    </div>

    {/* Circular Modules */}
    <div className="flex flex-wrap justify-center gap-6">

      {modules.map((module, index) => (
        <div
          key={index}
          className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
        >

          {/* Icon Circle */}
          <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition duration-300">
            <module.icon className="w-4 h-4 text-white  transition" />
          </div>

          {/* Text */}
          <span className="text-sm font-medium text-foreground group-hover:text-purple-600 transition">
            {module.title}
          </span>

        </div>
      ))}

    </div>

  </div>
</section>




<Feature01 />
<Faq/>
<CTA />


      {/* FOOTER */}
    
    </div>
  );
};
