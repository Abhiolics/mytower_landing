"use client";

import { ArrowUpRight, MapPin, Clock } from "lucide-react";

const categories = [
  "View all",
  "Development",
  "Design",
  "Marketing",
  "Customer Service",
  "Operations",
  "Finance",
  "Management",
];

const jobs = [
  {
    title: "Product Designer",
    desc: "We’re looking for a mid-level product designer to join our team.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Engineering Manager",
    desc: "We’re looking for an experienced engineering manager to join our team.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Customer Success Manager",
    desc: "We’re looking for a customer success manager to join our team.",
    remote: true,
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-background px-6 pt-32 pb-24 overflow-hidden">

      {/* Soft Background Gradient */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#694CD0]/20 blur-3xl rounded-full -z-10" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-400/10 blur-3xl rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="mb-20">
          <span className="inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium bg-card/60 backdrop-blur-md">
            We're hiring!
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight">
            Be part of our mission
          </h1>

          <p className="mt-6 text-muted-foreground max-w-2xl text-lg leading-relaxed">
            We’re looking for passionate people to join MyTower in building
            the future of smart society management. We value ownership,
            transparency, and meaningful impact.
          </p>
        </section>

        {/* CATEGORY FILTERS */}
        <section className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full border text-sm transition-all
                ${
                  i === 0
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card hover:bg-muted"
                }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* JOB LISTINGS */}
        <section className="divide-y border-t">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 group"
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-tight group-hover:text-[#694CD0] transition">
                  {job.title}
                </h3>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  {job.desc}
                </p>

                <div className="flex gap-4 mt-5 flex-wrap">
                  {job.remote && (
                    <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm bg-card">
                      <MapPin className="w-4 h-4" /> 100% remote
                    </span>
                  )}
                  <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm bg-card">
                    <Clock className="w-4 h-4" /> {job.type}
                  </span>
                </div>
              </div>

              {/* Apply */}
              <button className="flex items-center gap-2 text-lg font-medium hover:text-[#694CD0] transition">
                Apply <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}