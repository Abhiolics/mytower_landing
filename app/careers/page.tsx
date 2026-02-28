"use client";

import { MapPin, Clock, Briefcase, Users } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const jobs = [
    {
      slug: "frontend-developer",
      title: "Frontend Developer",
      department: "Engineering",
      location: "Lucknow / Remote",
      experience: "2+ Years",
      type: "Full Time",
      description:
        "Build modern and scalable web applications using React and Next.js.",
      skills: ["React", "Next.js", "Tailwind"],
    },
    {
      slug: "backend-developer",
      title: "Backend Developer",
      department: "Engineering",
      location: "Lucknow / Remote",
      experience: "3+ Years",
      type: "Full Time",
      description:
        "Design secure APIs and manage scalable backend infrastructure.",
      skills: ["Node.js", "MongoDB", "API Design"],
    },
    {
      slug: "fullstack-developer",
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Lucknow / Remote",
      experience: "3+ Years",
      type: "Full Time",
      description:
        "Work across frontend and backend to deliver complete web solutions.",
      skills: ["React", "Node", "Database"],
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-24">

      {/* HERO */}
<section className="bg-[#694CD0] text-white py-7 px-6 rounded-3xl">
  <div className="text-center max-w-2xl mx-auto">
    <h1 className="text-4xl font-semibold tracking-tight">
      Join Our Team
    </h1>
    <p className="mt-4 text-white/80 text-base">
      Build impactful products with a modern engineering team.
    </p>
  </div>
</section>

      {/* JOB LIST */}
      <section className="mt-16 max-w-5xl mx-auto space-y-8">

        {jobs.map((job) => (
          <div
            key={job.slug}
            className="bg-white border border-gray-200 rounded-2xl 
                       p-8 flex flex-col md:flex-row md:items-start 
                       justify-between gap-8
                       shadow-sm hover:shadow-md transition"
          >
            {/* LEFT SIDE */}
            <div className="flex-1">

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {job.title}
              </h3>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-5 mt-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Briefcase size={14}/> {job.department}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14}/> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14}/> {job.type}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={14}/> {job.experience}
                </span>
              </div>

              {/* One Line Description */}
              <p className="mt-4 text-gray-600 text-sm">
                {job.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {job.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-gray-100 
                               rounded-md text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE BUTTON */}
            <div className="md:self-start">
              <Link href={`/careers/${job.slug}`}>
                <button className="px-6 py-2.5 rounded-lg 
                                   bg-[#694CD0] text-white text-sm
                                   hover:bg-[#5a3db0] transition">
                  Apply Now
                </button>
              </Link>
            </div>

          </div>
        ))}

      </section>
    </main>
  );
}