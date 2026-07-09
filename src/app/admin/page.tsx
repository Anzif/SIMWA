import { SiteShell } from "@/components/site-shell";

export default function AdminPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Admin Dashboard</p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Manage news, gallery, committee members, and suggestions from one place.</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Manage News",
            "Manage Gallery",
            "Manage Committee",
            "Manage Learning Content",
            "View Suggestions",
            "Export Suggestions",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-emerald-900/10 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">Built for simple administration with secure access and role-based permissions.</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
