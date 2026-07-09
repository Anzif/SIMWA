import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import PdfTabs from "@/components/pdf-tabs";
import { SuggestionForm } from "@/components/suggestion-form";
import LandingGalleryTabs from "@/components/landing-gallery-tabs";
import { activities, committeeMembers, hadiths, newsItems, pillars, programGroups, testimonials } from "@/lib/content";
import { landingGalleryCategories, landingGalleryImages } from "@/lib/landingImages";
import { asset } from "@/lib/assets";

const stats = [
  { value: `${committeeMembers.length}+`, label: "Committee & Volunteers" },
  { value: `${programGroups.length}`, label: "Dedicated Program Groups" },
  { value: `${activities.length}+`, label: "Community Programs" },
];

export default function Home() {
  return (
    <SiteShell>
      {/* Hadith scroll — directly under the menu */}
      <section className="overflow-hidden bg-[rgba(255,250,242,0.96)] py-4 shadow-[0_12px_30px_rgba(15,93,59,0.12)]">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 text-sm font-semibold text-slate-800 lg:px-8">
          <span className="rounded-full border border-[var(--gold)]/30 bg-[rgba(244,217,139,0.28)] px-4 py-2 text-[var(--accent)]">Hadith Scroll</span>
          <div className="relative w-full overflow-hidden rounded-full border border-[var(--accent)]/15 bg-white/90 py-2">
            <div className="animate-marquee flex min-w-max items-center gap-10 px-6 text-sm leading-6 text-slate-800">
              {hadiths.concat(hadiths).map((hadith, index) => (
                <div key={`${hadith.source}-${index}`} className="inline-flex items-center gap-3 whitespace-nowrap">
                  <span className="font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">{hadith.source}:</span>
                  <span>“{hadith.text}”</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hero — introduces the organization */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,155,60,0.22),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(15,93,59,0.20),_transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/30 bg-[rgba(244,217,139,0.28)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                <img src={asset("/images/logo-emblem.png")} alt="SIMWA emblem" className="h-6 w-6 rounded-full border border-[var(--gold)]/30 bg-white p-0.5" />
                Faith • Education • Welfare
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Sirajul Islam Madrassa <span className="text-[var(--accent)]">Welfare Association</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                SIMWA is a community-driven organization rooted in faith, education, and service. From the Sirajul Islam Madrassa and Masjid, we bring together families, teachers, and volunteers to nurture Islamic learning, care for those in need, and strengthen the bonds of our community — through relief drives, medical camps, student programs, and year-round welfare initiatives.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,93,59,0.25)] transition hover:bg-[var(--accent-2)]">Learn More About Us</Link>
                <Link href="/contact" className="rounded-full border border-[var(--accent)]/20 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white">Contact Us</Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[2.5rem] border border-[var(--gold)]/30 bg-[linear-gradient(135deg,_rgba(15,93,59,0.97)_0%,_rgba(26,111,77,0.97)_100%)] p-10 text-center text-white shadow-[0_24px_70px_rgba(15,93,59,0.28)]">
                <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-[1.75rem] border border-[var(--gold)]/40 bg-white/95 p-3 shadow-inner">
                  <img src={asset("/images/logo-emblem.png")} alt="SIMWA emblem" className="max-h-full max-w-full object-contain" />
                </div>
                <p className="mt-6 text-lg font-semibold">SIMWA</p>
                <p className="mt-2 text-sm leading-7 text-white/80">Serving the community through education, welfare, charity, and faith-based service.</p>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-[var(--gold)]/25 bg-[rgba(255,250,242,0.9)] p-6 text-center shadow-[0_12px_40px_rgba(15,93,59,0.08)] backdrop-blur">
                <p className="text-4xl font-semibold text-[var(--accent)]">{stat.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-scrolling gallery */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,155,60,0.25),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(15,93,59,0.22),_transparent_38%)]" />
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--gold)]/20 bg-slate-950/95 p-4 shadow-[0_20px_60px_rgba(15,93,59,0.18)]">
            <div className="animate-gallery flex w-max gap-4 py-3">
              {landingGalleryImages.concat(landingGalleryImages).map((src, index) => (
                <div key={`${src}-${index}`} className="min-w-[20rem] overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900">
                  <img src={asset(src)} alt={`SIMWA gallery image ${index + 1}`} className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program groups */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Program Groups</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Dedicated teams serving the community</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programGroups.map((group) => (
            <div key={group.title} className="rounded-[1.5rem] border border-emerald-900/10 bg-[var(--beige)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,93,59,0.12)]">
              <h3 className="text-xl font-semibold text-slate-900">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{group.members.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs gallery tabs */}
      <LandingGalleryTabs categories={landingGalleryCategories} />

      {/* Activities */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Activities</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Programs and community work</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activities.map((activity) => (
            <div key={activity.title} className="rounded-[1.5rem] border border-[var(--gold)]/20 bg-white p-6 shadow-[0_12px_40px_rgba(15,93,59,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,93,59,0.14)]">
              <h3 className="text-xl font-semibold text-slate-900">{activity.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PDF library */}
      <section id="pdf-section" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <PdfTabs />
      </section>

      {/* Latest news */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Latest News</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Announcements and important updates</h2>
          </div>
          <Link href="/news" className="text-sm font-semibold text-[var(--accent)]">View all</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[1.5rem] border border-[var(--gold)]/20 bg-[rgba(255,250,242,0.96)] p-6 shadow-[0_16px_40px_rgba(15,93,59,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,93,59,0.14)]">
              <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
                <span>{item.date}</span>
                {item.pinned ? <span className="rounded-full bg-[var(--gold-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-800">Pinned</span> : null}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Pillars of Islam */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Pillars of Islam</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Five pillars that guide the Muslim life</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[1.5rem] border border-emerald-900/10 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,93,59,0.12)]">
              <div className="text-3xl">{pillar.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Committee members */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Committee Members</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Leaders committed to service and guidance</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {committeeMembers.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-[2rem] border border-[var(--gold)]/20 bg-white shadow-[0_20px_50px_rgba(15,93,59,0.1)] text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(15,93,59,0.18)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                {member.image ? (
                  <img src={asset(member.image)} alt={member.name} className="absolute inset-0 h-full w-full object-cover object-center" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center border border-dashed border-slate-300 bg-slate-50 text-sm font-medium text-slate-500">
                    Photo pending
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[var(--accent)]">{member.role}</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Testimonials</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Voices from the community</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="relative rounded-[1.5rem] border border-emerald-900/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,93,59,0.12)]">
              <span aria-hidden="true" className="absolute right-6 top-2 font-serif text-6xl leading-none text-[var(--gold)]/30">”</span>
              <p className="relative text-base leading-8 text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Suggestion box */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-900/10 bg-slate-950 p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Suggestion Box</p>
          <h2 className="mt-2 text-3xl font-semibold">Share your ideas and feedback with SIMWA</h2>
          <SuggestionForm />
        </div>
      </section>
    </SiteShell>
  );
}
