"use client";

import { useState, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
      formRef.current?.reset();
      setTimeout(() => setShowPopup(false), 3000);
    }, 1500);
  };

  return (
    <main className="bg-background text-foreground min-h-screen pt-32 pb-24 px-6">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Contact Us
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Let’s Build Smarter Communities Together
        </p>
        <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
          Whether you’re a Resident, Society Committee Member, Builder,
          or Property Manager — we’re here to help you simplify
          residential management with My Tower.
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
      </section>

      {/* FORM */}
      <section className="max-w-5xl mx-auto">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-3xl p-10 space-y-10 shadow-xl"
        >

          {/* GET IN TOUCH */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">📩 Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input required placeholder="Full Name" className="border rounded-xl px-4 py-3 bg-background" />
              <input required placeholder="Mobile Number" className="border rounded-xl px-4 py-3 bg-background" />
              <input required type="email" placeholder="Email Address" className="border rounded-xl px-4 py-3 bg-background" />
              
              <select required className="border rounded-xl px-4 py-3 bg-background">
                <option value="">Your Role</option>
                <option>Resident</option>
                <option>RWA / Society Committee Member</option>
                <option>Property Manager</option>
                <option>Builder / Developer</option>
                <option>Security Head</option>
                <option>Facility Manager</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* SOCIETY DETAILS */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">🏢 Society / Property Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input placeholder="Society / Tower Name" className="border rounded-xl px-4 py-3 bg-background" />
              <input placeholder="City" className="border rounded-xl px-4 py-3 bg-background" />
              <input placeholder="State" className="border rounded-xl px-4 py-3 bg-background" />

              <select className="border rounded-xl px-4 py-3 bg-background">
                <option>Total Number of Units / Flats</option>
                <option>Below 50</option>
                <option>50 – 100</option>
                <option>100 – 300</option>
                <option>300 – 500</option>
                <option>500+</option>
              </select>
            </div>

            <div className="mt-6 space-y-4">
              <p>Is your society currently using any management software?</p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="software" /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="software" /> No
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="software" /> Not Sure
                </label>
              </div>
              <input placeholder="If Yes: Current Software Name" className="border rounded-xl px-4 py-3 bg-background mt-4 w-full" />
            </div>
          </div>

          {/* INQUIRY TYPE */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">📝 Type of Inquiry</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Request Product Demo",
                "Pricing Information",
                "Free Trial Activation",
                "Technical Support",
                "Partnership Inquiry",
                "Feature Request",
                "General Query",
              ].map((item, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">💬 Message</h2>
            <textarea
              required
              rows={5}
              placeholder="Tell us more about your requirement"
              className="w-full border rounded-xl px-4 py-3 bg-background"
            />
          </div>

          {/* CONSENT */}
          <div className="flex items-start gap-3">
            <input required type="checkbox" />
            <p className="text-sm text-muted-foreground">
              I agree to be contacted by the My Tower team regarding my inquiry
              and understand that my data will be handled as per the Privacy Policy.
            </p>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:scale-105 transition disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>

        </form>
      </section>

      {/* DIRECT CONTACT */}
      <section className="max-w-5xl mx-auto mt-20 text-center space-y-6">
        <h2 className="text-3xl font-semibold">🚀 Prefer Direct Contact?</h2>
        <p><strong>Sales & Demo Requests:</strong> sales@mytower.com</p>
        <p><strong>Customer Support:</strong> support@mytower.com</p>
        <p><strong>Partnership & Business Inquiries:</strong> partners@mytower.com</p>

        <div className="mt-8">
          <h3 className="text-xl font-semibold">🕒 Support Hours</h3>
          <p>Monday – Saturday</p>
          <p>9:00 AM – 6:00 PM</p>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white text-black rounded-2xl px-12 py-10 text-center shadow-2xl">
            <CheckCircle2 className="mx-auto text-green-500 mb-4" size={50} />
            <h4 className="text-xl font-semibold mb-2">
              Inquiry Submitted Successfully
            </h4>
            <p className="text-gray-600">
              Our team will get in touch with you shortly.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}