import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { newsItems } from "@/lib/content";

export default function NewsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">News & Announcements</p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Timely updates from the SIMWA community.</h1>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {newsItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl border border-[var(--gold)]/20 bg-[rgba(255,250,242,0.96)] p-6 shadow-[0_16px_40px_rgba(15,93,59,0.08)]">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>{item.date}</span>
                {item.pinned ? <span className="rounded-full bg-[var(--gold-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-800">Pinned</span> : null}
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
              <Link href="#" className="mt-4 inline-flex text-sm font-semibold text-[var(--accent)]">Read more →</Link>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
