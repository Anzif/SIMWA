import { SiteShell } from "@/components/site-shell";
import { asset } from "@/lib/assets";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">About SIMWA</p>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h1 className="max-w-3xl text-4xl font-semibold text-slate-900 sm:text-5xl">A trusted welfare association rooted in faith, service, and education.</h1>
            <img src={asset("/images/logo-emblem.png")} alt="SIMWA emblem" className="h-20 w-20 rounded-3xl border border-emerald-900/10 bg-white p-2 shadow-sm" />
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-emerald-900/10 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-4 rounded-3xl bg-[rgba(15,93,59,0.05)] p-6">
              <img src={asset("/images/logo-emblem.png")} alt="SIMWA emblem" className="h-16 w-16 rounded-2xl border border-emerald-900/10 bg-white/90 p-2" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">SIMWA Story</p>
                <h2 className="text-3xl font-semibold text-slate-900">From humble beginnings to a thriving community movement.</h2>
              </div>
            </div>
            <p className="mb-6 text-base leading-8 text-slate-700">Sirajul Islam Madrassa Welfare Association brings together families, teachers, and volunteers to strengthen the madrassa and support the wider community. Our programs blend faith, education, and practical help in a way that inspires trust and creates real change.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--beige)] p-5">
                <h3 className="font-semibold text-slate-900">Vision</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">A stronger community where every child has access to faith-based learning and every family receives support in times of need.</p>
              </div>
              <div className="rounded-2xl bg-[var(--beige)] p-5">
                <h3 className="font-semibold text-slate-900">Mission</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">To nurture spiritual growth, education, and mutual care through organized welfare programs, scholarships, and community guidance.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-emerald-900/10 bg-[var(--beige)] p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">Objectives</h2>
            <ul className="space-y-3 text-sm leading-7 text-slate-700">
              <li>• Strengthen Islamic education for children and youth.</li>
              <li>• Organize heartfelt welfare programs for families in need.</li>
              <li>• Promote social harmony, compassion, and community trust.</li>
              <li>• Preserve the masjid and madrassa as centers of learning and worship.</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
