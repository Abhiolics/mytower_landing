"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
const FAQ_DATA = [
  {
    question: "What does MyTower help manage?",
    answer:
      "MyTower simplifies complete society operations — from maintenance billing and visitor management to complaints, announcements, and financial tracking. Everything runs in one centralized platform.",
  },
  {
    question: "Is MyTower secure for financial transactions?",
    answer:
      "Yes. We use modern encryption and secure authentication systems to protect resident data and online payments. Your society’s financial records remain safe and fully transparent.",
  },
  {
    question: "Can residents pay maintenance online?",
    answer:
      "Absolutely. Residents can securely pay maintenance dues online and receive instant digital receipts. Admins get real-time payment tracking and automated reports.",
  },
  {
    question: "Does MyTower support visitor management?",
    answer:
      "Yes. Guard staff and residents can manage visitor approvals digitally, reducing manual entry errors and improving security at the gate.",
  },
  {
    question: "Is it suitable for large gated communities?",
    answer:
      "MyTower is built to scale. Whether your society has 50 apartments or 1,000+ units, the platform maintains performance, speed, and reliability.",
  },
  {
    question: "How does MyTower improve transparency?",
    answer:
      "All financial records, announcements, and complaint updates are visible in real time. This reduces disputes and builds trust between residents and management.",
  },
  {
    question: "Do you provide onboarding and support?",
    answer:
      "Yes. We assist with setup, training, and continuous support to ensure smooth adoption for admins, committees, and residents.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Everything You Need to Know About MyTower
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Clear answers to common questions about security, payments,
            automation, and how MyTower simplifies modern society management.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium">
                  {faq.question}
                </span>

                <Plus
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-60 mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}