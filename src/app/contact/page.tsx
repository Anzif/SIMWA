import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-emerald-900/10 bg-[var(--beige)] p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Contact</p>
            <h1 className="text-4xl font-semibold text-slate-900">We welcome your questions and suggestions.</h1>
            <p className="mt-4 text-sm leading-8 text-slate-700">Reach the SIMWA team through phone, email, or by visiting the office during working hours.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>📞 +91 98765 43210</li>
              <li>✉️ simwa@example.org</li>
              <li>📍 Near Masjid, City Road, Kerala</li>
            </ul>
          </div>
          <form className="rounded-3xl border border-emerald-900/10 bg-white p-8 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Name" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Email" />
            </div>
            <textarea className="mt-4 min-h-32 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Your message" />
            <button className="mt-4 rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900">Send Message</button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
