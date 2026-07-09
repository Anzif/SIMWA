import { SiteShell } from "@/components/site-shell";
import { committeeMembers } from "@/lib/content";

export default function CommitteePage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Committee Members</p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Dedicated leaders guiding SIMWA with sincerity and service.</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {committeeMembers.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-[2rem] border border-[var(--gold)]/20 bg-white shadow-[0_22px_60px_rgba(15,93,59,0.08)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="absolute inset-0 h-full w-full object-cover object-center" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center border border-dashed border-slate-300 bg-slate-50 text-sm font-medium text-slate-500">
                    Photo pending
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--accent)]">{member.role}</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">{member.name}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
