"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "./ui/separator";

export default function Footer() {
  const footerLinks = [
   { label: "Home", href: "/" },
  { label: "Categories", href: "/features" },
  { label: "Properties", href: "/feature-01" },
  { label: "Featured property", href: "/cta-01" },
  { label: "Testimonials", href: "/about-us-01" },
  { label: "Blog", href: "/careers" },
  { label: "FAQs", href: "/faq-01" },
  { label: "Careers", href: "/careers" },
];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-muted/40">
      
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#694CD0]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-20">

        {/* Newsletter Section */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <p className="text-muted-foreground text-lg">
              The Operating System for Societies.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="flex flex-col lg:flex-row gap-6">
         
            </div>
          </div>
        </div>

        <Separator />

        {/* CTA + Links */}
        <div className="grid md:grid-cols-12 gap-10">

          {/* CTA */}
          <div className="md:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-semibold leading-tight">
              Built for Modern Communities.
            </h2>

            <Button className="rounded-full px-8 py-6 bg-teal-400 hover:bg-teal-400/80 text-black font-medium">
              Get in touch
            </Button>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3">
            <ul className="space-y-4 text-sm">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[#694CD0] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-3">
            <ul className="space-y-4 text-sm">
              {footerLinks.slice(4, 8).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[#694CD0] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>©2026 My Tower. All Rights Reserved</p>

          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-[#694CD0] transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#694CD0] transition">
              Terms & Condition
            </Link>
            <Link href="/contact" className="hover:text-[#694CD0] transition">
              Support
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}