"use client";

import { useState, useRef } from "react";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      formRef.current?.reset();
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* HERO */}
      <section className="pt-36 pb-20 px-6 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#694CD0]/5 to-transparent -z-10" />

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#694CD0]">
          Let’s Talk
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions about MyTower? Want a demo or pricing details?
          Our team is ready to help you modernize your society management.
        </p>

        <div className="w-24 h-1 bg-[#694CD0] mx-auto mt-8 rounded-full" />
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-16">

        {/* LEFT INFO PANEL */}
        <div className="space-y-10">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Why Contact MyTower?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We help residential communities streamline billing, visitor
              management, complaints, and communication — all from a
              secure, cloud-based platform.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">

            <ContactCard
              icon={<Mail />}
              title="Sales & Demo"
              value="sales@mytower.com"
            />

            <ContactCard
              icon={<Phone />}
              title="Customer Support"
              value="+91 98765 43210"
            />

            <ContactCard
              icon={<MapPin />}
              title="Office Location"
              value="Lucknow, India"
            />

          </div>

          {/* Trust Highlight */}
          <div className="p-6 rounded-2xl bg-[#694CD0]/10 border border-[#694CD0]/20">
            <p className="font-medium text-[#694CD0]">
              Trusted by 200+ Residential Societies
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Secure infrastructure. Transparent accounting.
              Real-time access. Designed for modern communities.
            </p>
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-card border border-b rounded-3xl p-10 shadow-xl">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

            <h3 className="text-2xl font-semibold text-[#694CD0]">
              Send Us a Message
            </h3>

            <Input placeholder="Full Name" required  className="border border-b"/>
            <Input type="email" placeholder="Email Address" required />
            <Input placeholder="Mobile Number" required />

            <select required className="inputStyle w-full">
              <option value="">Select Inquiry Type</option>
              <option>Request Demo</option>
              <option>Pricing Details</option>
              <option>Technical Support</option>
              <option>Partnership</option>
              <option>General Query</option>
            </select>

            <textarea
              required
              rows={4}
              placeholder="Tell us about your requirement..."
              className="inputStyle w-full"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-semibold text-white
                         bg-[#694CD0] hover:bg-[#5838b8]
                         transition-all duration-300
                         hover:scale-[1.02]
                         disabled:opacity-70 shadow-lg"
            >
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>

          </form>
        </div>

      </section>

      {/* SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl px-12 py-10 text-center shadow-2xl">
            <CheckCircle2 className="mx-auto text-[#694CD0] mb-4" size={50} />
            <h4 className="text-xl font-semibold text-[#694CD0]">
              Message Sent Successfully
            </h4>
            <p className="text-gray-600 mt-2">
              Our team will contact you shortly.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

/* Reusable Input */
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="inputStyle w-full"
    />
  );
}

/* Contact Card */
function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 p-5 border rounded-2xl hover:shadow-md transition">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#694CD0]/10 text-[#694CD0]">
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}