"use client";

export default function FeaturesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen pt-32 pb-24 px-6">

      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Platform Features
        </h1>
        <p className="mt-4 text-muted-foreground">
          Comprehensive capabilities designed for modern society management
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
      </section>

      <section className="max-w-5xl mx-auto space-y-14 text-muted-foreground leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            1. Multi-Society Management
          </h2>
          <p>
            Manage multiple residential communities from a single secure dashboard
            with complete data isolation.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            2. Resident Self-Service Portal
          </h2>
          <p>
            Residents can pay bills, manage visitors, raise complaints, and
            access important documents seamlessly.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            3. Security & Visitor Management
          </h2>
          <p>
            Digital gate pass system with real-time tracking and verification.
          </p>
        </div>

      </section>
    </main>
  );
}