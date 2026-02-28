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
    "frontend-developer": {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Lucknow / Remote",
      type: "Full Time",
      experience: "2+ Years",
    about: `
We are a product-focused technology company building scalable, high-performance digital platforms used by modern businesses. Our engineering team is driven by clean architecture principles, performance optimization, and exceptional user experience.

We believe that frontend development is not just about building interfaces — it is about crafting seamless digital experiences that are fast, intuitive, and reliable. Our culture encourages ownership, technical excellence, and continuous learning. Every engineer contributes to improving product quality, performance, and scalability.

As part of our frontend team, you will work on modern web applications that directly impact user engagement and overall product success.
`,

role: `
As a Frontend Developer, you will design, develop, and maintain responsive and high-performance user interfaces. You will collaborate closely with backend engineers, designers, and product managers to translate business requirements into elegant technical solutions.

Your role will involve building reusable UI components, integrating APIs, optimizing performance, ensuring cross-browser compatibility, and maintaining code quality standards. You will take ownership of frontend modules from design to deployment while continuously improving user experience.
`,

responsibilities: [
  "Develop scalable and maintainable UI components using React.js and Next.js",
  "Implement responsive layouts ensuring cross-browser compatibility",
  "Integrate and consume RESTful APIs efficiently",
  "Optimize frontend performance for speed and accessibility",
  "Collaborate with designers to implement pixel-perfect UI/UX",
  "Maintain code quality through best practices and documentation",
  "Participate in code reviews and technical discussions",
  "Continuously improve frontend architecture and user experience",
],

requirements: [
  "Strong proficiency in React.js and Next.js",
  "Solid understanding of modern JavaScript (ES6+) and TypeScript",
  "Experience with Tailwind CSS or modern CSS frameworks",
  "Understanding of REST APIs and frontend-backend integration",
  "Knowledge of performance optimization techniques",
  "Familiarity with version control systems (Git)",
  "Strong debugging and problem-solving skills",
  "Ability to work independently and take ownership of features",
],

benefits: [
  "Competitive compensation and performance incentives",
  "Flexible work environment (Remote/Hybrid)",
  "Learning and development budget",
  "Exposure to scalable real-world product systems",
  "Collaborative and innovation-driven engineering culture",
  "Clear growth path and leadership opportunities",
],
    },

    "backend-developer": {
      title: "Backend Developer",
      department: "Engineering",
      location: "Lucknow / Remote",
      type: "Full Time",
      experience: "3+ Years",
      about: `
We are a product-driven technology company building scalable, secure, and high-performance digital platforms. Our systems power mission-critical applications that demand reliability, speed, and precision.

Our engineering culture is built around ownership, clean architecture, performance optimization, and long-term scalability. We emphasize writing maintainable code, designing resilient systems, and building infrastructure that can scale with business growth.

We operate with a strong product mindset — every backend decision directly impacts user experience, system reliability, and business outcomes. If you enjoy solving complex engineering problems and building systems that scale, you will thrive here.
`,

role: `
As a Backend Developer, you will design and build scalable APIs, manage databases, and develop core backend services that power our applications.

You will collaborate with frontend engineers, product managers, and DevOps teams to ensure seamless integration and system performance. Your responsibilities will include architecting backend modules, improving system efficiency, implementing security best practices, and ensuring high availability.

You will take full ownership of backend features from design to deployment while maintaining high code quality standards and documentation practices.
`,

responsibilities: [
  "Design and develop scalable RESTful APIs and backend services",
  "Architect and optimize database schemas and queries",
  "Implement authentication and authorization mechanisms (JWT, OAuth)",
  "Ensure application security, data protection, and compliance standards",
  "Monitor system performance and optimize server-side logic",
  "Collaborate with frontend and DevOps teams for seamless deployment",
  "Write clean, testable, and maintainable production-level code",
  "Participate in code reviews and contribute to technical decisions",
],

requirements: [
  "Strong proficiency in Node.js and Express.js",
  "Experience with MongoDB or PostgreSQL and database optimization",
  "Solid understanding of REST architecture and API best practices",
  "Knowledge of authentication systems and security fundamentals",
  "Experience with cloud platforms (AWS, GCP, or similar)",
  "Understanding of system design, scalability, and microservices concepts",
  "Strong debugging and problem-solving skills",
  "Ability to work independently and take ownership of modules",
],

benefits: [
  "Competitive compensation package",
  "Flexible work environment (Remote/Hybrid)",
  "Performance-based bonuses and incentives",
  "Learning and development budget",
  "Opportunity to work on scalable real-world systems",
  "Collaborative and growth-driven engineering culture",
],
    },

    "fullstack-developer": {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Lucknow / Remote",
      type: "Full Time",
      experience: "3+ Years",
     about: `
We are a fast-growing product-focused technology company building scalable digital platforms used by modern businesses. Our engineering team works on end-to-end systems that combine intuitive frontend experiences with powerful backend architecture.

We believe in writing clean, maintainable code and building systems that are scalable, secure, and performance-driven. Our culture encourages ownership, technical excellence, and continuous improvement. Every engineer contributes not just to features, but to long-term product architecture and engineering standards.

As a Full Stack Developer, you will work across the complete technology stack and directly impact how our products are built, scaled, and optimized.
`,

role: `
As a Full Stack Developer, you will be responsible for designing and implementing both frontend and backend components of our applications. You will work closely with product managers, designers, and other engineers to deliver high-quality features from concept to deployment.

Your role will involve building user-facing interfaces, developing scalable APIs, managing databases, and ensuring seamless integration between systems. You will take ownership of modules, optimize performance, and maintain high standards of code quality across the stack.
`,

responsibilities: [
  "Develop and maintain scalable frontend applications using React/Next.js",
  "Design and implement secure backend APIs using Node.js",
  "Architect and manage database schemas and data models",
  "Ensure seamless integration between frontend and backend systems",
  "Optimize applications for speed, performance, and scalability",
  "Collaborate with cross-functional teams to define and ship new features",
  "Write reusable, maintainable, and well-documented code",
  "Participate in code reviews and contribute to technical architecture decisions",
],

requirements: [
  "Strong proficiency in React.js and modern JavaScript frameworks",
  "Solid experience with Node.js and backend development",
  "Experience with MongoDB or PostgreSQL",
  "Understanding of RESTful APIs and system architecture",
  "Knowledge of authentication, authorization, and security best practices",
  "Basic understanding of cloud deployment and CI/CD pipelines",
  "Strong problem-solving and debugging skills",
  "Ability to work independently and manage complete features end-to-end",
],

benefits: [
  "Competitive salary and performance incentives",
  "Flexible work hours and remote-friendly culture",
  "Learning and certification support",
  "Exposure to scalable real-world systems",
  "Fast-growth environment with leadership opportunities",
  "Collaborative and innovation-driven engineering culture",
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