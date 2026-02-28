"use client";

export default function ModulesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen pt-32 pb-24 px-6">

      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Integrated Modules
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
      </section>

      <section className="max-w-5xl mx-auto space-y-10 text-muted-foreground">

        {[
          "Resident Management",
          "Flat & Ownership Tracking",
          "Visitor & Gate Pass System",
          "Billing & Payment Collection",
          "Vendor & Staff Management",
          "Complaint Resolution System",
          "Facility Booking",
          "Financial Reporting"
        ].map((item, i) => (
          <div key={i}>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              {i + 1}. {item}
            </h2>
            <p>
              Detailed module designed to streamline society operations efficiently.
            </p>
          </div>
        ))}

      </section>
    </main>
  );
}