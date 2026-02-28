"use client";

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground min-h-screen pt-32 pb-24 px-6">

      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Pricing Plans
        </h1>
        <p className="mt-4 text-muted-foreground">
          Flexible pricing tailored for societies of all sizes
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
      </section>

      <section className="max-w-5xl mx-auto space-y-14 text-muted-foreground">

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            1. Starter Plan
          </h2>
          <p>
            Essential modules suitable for small residential communities.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            2. Professional Plan
          </h2>
          <p>
            Advanced features including analytics and mobile access.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            3. Enterprise Plan
          </h2>
          <p>
            Fully customizable solution with priority support and integrations.
          </p>
        </div>

      </section>
    </main>
  );
}