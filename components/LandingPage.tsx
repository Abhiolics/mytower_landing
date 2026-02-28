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
} from "lucide-react";

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
    "Resident Management", "Flat Management", "Family Members", "Vehicle Registration",
    "Visitor Management", "Gate Pass System", "Delivery Tracking", "Parking Management",
    "Maintenance Billing", "Utility Bills", "Payment Collection", "Expense Tracking",
    "Staff Management", "Attendance Tracking", "Vendor Management", "Complaint System",
    "Facility Booking", "Asset Management", "Notice Board", "Emergency Alerts",
    "Security Dashboard", "Move-in/Move-out", "Document Storage", "Financial Reports"
  ];



  return (
    <div className="min-h-screen bg-background" data-testid="landing-page">
      {/* Navigation */}
      

      {/* HERO */}
      <section className="pt-32 pb-20 px-6" data-testid="hero-section">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Shield className="w-4 h-4" />
                Enterprise-Grade Society Management
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-['Outfit']">
                Smart Tower
                <span className="gradient-text"> Management</span>
                <br />for Modern Living
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Complete SaaS solution for residential societies and towers with 60+ modules covering 
                residents, visitors, billing, staff, facilities, and security management.
              </p>
              <div className="flex flex-wrap gap-4">
            <Button size="lg">
             Start Free Trial <ArrowRight className="w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                >
                  <Smartphone className="w-4 h-4" /> Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">60+</p>
                  <p className="text-sm text-muted-foreground">Modules</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop"
                  alt="Modern Residential Building"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-6 border bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Trusted by 500+</p>
                    <p className="text-sm text-muted-foreground">Societies across India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
     <section id="features" className="py-20 px-6 bg-muted/50" data-testid="features-section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-['Outfit'] mb-4">
              Everything You Need to Manage Your Society
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive features designed for modern residential communities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-0 shadow-sm" data-testid={`feature-card-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-['Outfit']">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
       {/* Modules Section */}
      <section id="modules" className="py-20 px-6" data-testid="modules-section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-['Outfit'] mb-4">
              60+ Integrated Modules
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A complete ecosystem for society management
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {modules.map((module, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {module}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* BENEFITS */}
      <section className="py-20 px-6 bg-slate-900 text-white" data-testid="benefits-section">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-['Outfit'] mb-6">
                Why Choose MyTower?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Lock, title: "Bank-Grade Security", desc: "Your data is encrypted and secure with enterprise-level protection." },
                  { icon: Globe, title: "Multi-Society SaaS", desc: "Manage multiple societies from one platform with complete data isolation." },
                  { icon: BarChart3, title: "Real-time Analytics", desc: "Get insights into occupancy, finances, and operations at a glance." },
                  { icon: Smartphone, title: "Mobile Ready", desc: "Access everything from any device - desktop, tablet, or mobile." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop"
                alt="Happy Family"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 px-6" data-testid="cta-section">
        <div className="container mx-auto">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-['Outfit'] mb-4">
                Ready to Transform Your Society Management?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of societies already using MyTower to streamline their operations.
              </p>
        <Button size="lg">
           Get Started Free <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
    
    </div>
  );
};
