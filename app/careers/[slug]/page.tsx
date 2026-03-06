"use client";

import { useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { MapPin, Briefcase, Clock } from "lucide-react";

export default function JobPage() {
  const { slug } = useParams();
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true);

  setTimeout(() => {
    router.push("/careers");
  }, 3500);
};

  // Dynamic Job Data
 const jobData: any = {
  "product-designer": {
    title: "Product Designer",
    department: "Design",
    location: "Lucknow / Remote",
    type: "Full Time",
    experience: "2+ Years",
about: `
We are a product-driven company focused on building intuitive and modern digital experiences. Our design team plays a crucial role in shaping how users interact with our platform.

We believe great design is not just about visuals but about solving real problems for users. Designers at our company collaborate closely with engineers and product teams to create simple, elegant, and functional user experiences.

As a Product Designer, you will help craft user-centered solutions that make our platform easy to use, visually engaging, and highly efficient.
`,

role: `
As a Product Designer, you will be responsible for designing user-friendly interfaces and improving the overall user experience of our platform.

You will collaborate with product managers, engineers, and stakeholders to transform ideas into wireframes, prototypes, and final designs. Your work will ensure our product remains intuitive, modern, and visually appealing.
`,

responsibilities: [
  "Design intuitive user interfaces for web applications",
  "Create wireframes, prototypes, and design systems",
  "Collaborate with product managers and developers",
  "Conduct user research and usability testing",
  "Ensure consistent design standards across the platform",
  "Improve product usability and visual experience",
],

requirements: [
  "Strong experience with Figma or modern design tools",
  "Good understanding of UI/UX principles",
  "Ability to design responsive and modern interfaces",
  "Strong communication and collaboration skills",
  "Portfolio showcasing product or UI design work",
],

benefits: [
  "Competitive salary and incentives",
  "Remote-friendly work environment",
  "Learning and growth opportunities",
  "Creative and collaborative design culture",
],
  },

  "engineering-manager": {
    title: "Engineering Manager",
    department: "Engineering",
    location: "Lucknow / Remote",
    type: "Full Time",
    experience: "5+ Years",
about: `
Our engineering team builds scalable technology platforms that power modern digital communities. We focus on building reliable, secure, and high-performance systems.

We are looking for an experienced Engineering Manager who can lead a team of developers and guide them toward delivering high-quality products.

Our culture encourages leadership, ownership, and continuous improvement across the engineering organization.
`,

role: `
As an Engineering Manager, you will lead and mentor a team of engineers while ensuring the successful delivery of product features.

You will collaborate with product managers and designers to plan development cycles, guide system architecture decisions, and maintain engineering standards.
`,

responsibilities: [
  "Lead and mentor engineering teams",
  "Oversee development planning and project execution",
  "Define technical architecture and engineering standards",
  "Improve team productivity and development processes",
  "Ensure product quality, scalability, and performance",
],

requirements: [
  "Strong experience in software engineering",
  "Leadership experience managing engineering teams",
  "Knowledge of modern backend and frontend technologies",
  "Strong problem solving and decision making skills",
  "Excellent communication and leadership abilities",
],

benefits: [
  "Leadership growth opportunities",
  "Flexible work environment",
  "Competitive compensation package",
  "Exposure to large scale engineering systems",
],
  },

  "customer-success-manager": {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Lucknow / Remote",
    type: "Full Time",
    experience: "3+ Years",
about: `
Our Customer Success team ensures that customers achieve maximum value from our platform. We focus on building long-term relationships and ensuring a smooth experience for our users.

Customer Success Managers act as the bridge between our company and our customers, ensuring satisfaction, retention, and continuous engagement with our platform.
`,

role: `
As a Customer Success Manager, you will work directly with customers to understand their needs, help them onboard successfully, and ensure they achieve their goals using our platform.

You will also collaborate with internal teams to improve the customer experience and resolve issues quickly.
`,

responsibilities: [
  "Manage onboarding and support for new customers",
  "Build strong relationships with clients",
  "Ensure customer satisfaction and retention",
  "Resolve customer issues and provide guidance",
  "Gather feedback to improve product experience",
],

requirements: [
  "Strong communication and interpersonal skills",
  "Experience in customer success or account management",
  "Ability to solve problems quickly and efficiently",
  "Customer-focused mindset",
],

benefits: [
  "Performance based incentives",
  "Flexible work environment",
  "Career growth opportunities",
  "Supportive and collaborative culture",
],
  },
};

  const job = jobData[slug as string];

  if (!job) return <div className="p-20 text-center">Job not found</div>;

  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-[#694CD0] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {job.title}
        </h1>

        <div className="flex justify-center gap-6 flex-wrap text-gray-300 text-sm">
          <span className="flex items-center gap-2">
            <Briefcase size={16}/> {job.department}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16}/> {job.type}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16}/> {job.location}
          </span>
        </div>

      <button
  onClick={scrollToForm}
  className="mt-10 px-8 py-3 bg-indigo-600 text-white 
             rounded-full font-medium
             hover:bg-indigo-700 transition"
>
  Apply Now
</button>
      </section>

      {/* JOB DETAILS */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-12">

        <Section title="About Us" content={job.about} />
        <Section title="Role Overview" content={job.role} />
        <ListSection title="Responsibilities" items={job.responsibilities} />
        <ListSection title="Requirements" items={job.requirements} />
        <ListSection title="Benefits" items={job.benefits} />

      </section>

      {/* APPLICATION FORM */}
      <section
        ref={formRef}
        className="bg-gray-50 py-20 px-6 border-t border-gray-200"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">

          <h2 className="text-3xl font-semibold mb-10 text-center">
            Application Form
          </h2>

         {submitted ? (
  <div className="text-center py-16">

    <div className="w-20 h-20 mx-auto rounded-full 
                    bg-[#694CD0]
                    flex items-center justify-center mb-6 shadow-lg">
      <span className="text-white text-3xl">✓</span>
    </div>

    <h3 className="text-3xl font-semibold mb-4">
      Application Submitted Successfully
    </h3>

    <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
      Thank you for applying. Our team will carefully review your application. 
      If you are shortlisted, we will contact you shortly.
      Please check your email for further updates.
    </p>

    <p className="mt-6 text-sm text-gray-400">
      Redirecting to careers page...
    </p>

  </div>
) : (
  <form onSubmit={handleSubmit} className="space-y-6">

    <div className="grid md:grid-cols-2 gap-6">
      <Input label="Full Name" required />
      <Input label="Email" required type="email" />
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <Input label="Current Location" required />
      <Input label="Phone Number" required />
    </div>

    <Input label="Resume Drive Link" required />

    <div className="grid md:grid-cols-2 gap-6">
      <Input label="Current CTC" required />
      <Input label="Expected CTC" required />
    </div>

    <Textarea label="Cover Letter" required />

    <button
      type="submit"
      className="w-full py-4 bg-[#694CD0] 
                 text-white rounded-full font-medium text-lg
                 hover:shadow-xl hover:shadow-purple-400/40 transition"
    >
      Apply for this position
    </button>

  </form>
)}
        </div>
      </section>

    </main>
  );
}

/* Reusable Sections */

function Section({ title, content }: any) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
}

function ListSection({ title, items }: any) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="list-disc pl-6 text-gray-600 space-y-2">
        {items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Input({ label, required, type="text" }: any) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        required={required}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
      />
    </div>
  );
}

function Textarea({ label, required }: any) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        rows={5}
        required={required}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#694CD0] outline-none"
      />
    </div>
  );
}