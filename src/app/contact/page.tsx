import { SiteShell } from "@/components/site-shell";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-emerald-900/10 bg-[var(--beige)] p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Contact</p>
            <h1 className="text-4xl font-semibold text-slate-900">We welcome your questions and suggestions.</h1>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
