import { SiteShell } from "@/components/site-shell";

const topics = [
  { title: "Five Pillars of Islam", text: "A simple overview of the core practices that guide a Muslim’s life." },
  { title: "Six Articles of Faith", text: "An introduction to belief in Allah, angels, revealed books, prophets, the Day of Judgment, and divine decree." },
  { title: "Wudu and Salah", text: "Step-by-step guidance for purity and prayer." },
  { title: "Basic Duas", text: "Everyday supplications for gratitude, protection, and guidance." },
];

export default function LearningPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Islamic Learning</p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Accessible knowledge for lifelong spiritual growth.</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <article key={topic.title} className="rounded-3xl border border-emerald-900/10 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">{topic.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{topic.text}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
