import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import PdfTabs from "@/components/pdf-tabs";
import LandingGalleryTabs from "@/components/landing-gallery-tabs";
import { activities, committeeMembers, hadiths, newsItems, pillars, programGroups, testimonials } from "@/lib/content";
import { landingGalleryCategories, landingGalleryImages } from "@/lib/landingImages";
import { asset } from "@/lib/assets";

export default function Home() {
  return (
    <SiteShell>
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

      <LandingGalleryTabs categories={landingGalleryCategories} />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Program Groups</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Dedicated teams serving the community</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programGroups.map((group) => (
            <div key={group.title} className="rounded-[1.5rem] border border-emerald-900/10 bg-[var(--beige)] p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{group.members.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pdf-section" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <PdfTabs />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="relative z-10 max-w-2xl rounded-[2rem] border border-[var(--gold)]/30 bg-[rgba(255,250,242,0.86)] p-8 shadow-[0_20px_70px_rgba(15,93,59,0.12)] backdrop-blur">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/30 bg-[rgba(244,217,139,0.28)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            <img src={asset("/images/logo-emblem.png")} alt="SIMWA emblem" className="h-7 w-7 rounded-full border border-white/20 bg-white/10 p-1" />
            SIMWA • Faith • Service • Community
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">Sirajul Islam Madrassa Welfare Association</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">A caring network of volunteers and leaders working for education, welfare, charity, and the spiritual well-being of the community.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/about" className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-2)]">Learn More</Link>
            <Link href="/contact" className="rounded-full border border-[var(--accent)]/20 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white">Contact Us</Link>
            <Link href="/contact" className="rounded-full border border-[var(--gold)]/40 bg-[rgba(244,217,139,0.28)] px-6 py-3 text-sm font-semibold text-amber-800 transition hover:bg-[rgba(244,217,139,0.4)]">Send Suggestions</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[var(--gold)]/25 bg-[linear-gradient(135deg,_rgba(255,250,242,0.95)_0%,_rgba(247,235,210,0.95)_100%)] p-8 shadow-[0_12px_40px_rgba(15,93,59,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">About SIMWA</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Vision, mission, objectives, and history in one place.</h2>
            <p className="mt-5 text-base leading-8 text-slate-700">SIMWA is committed to strengthening Islamic education, supporting the needs of the community, and preserving the legacy of the masjid and madrassa through compassionate service, organized programs, and sincere leadership.</p>
            <Link href="/about" className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-2)]">Read Full About Page</Link>
          </div>
          <div className="rounded-[2rem] border border-[var(--gold)]/25 bg-[linear-gradient(135deg,_rgba(15,93,59,0.95)_0%,_rgba(26,111,77,0.96)_100%)] p-8 text-white shadow-[0_12px_40px_rgba(15,93,59,0.15)]">
            <h3 className="text-2xl font-semibold">What SIMWA stands for</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/85">
              <li>• Faith-centered leadership</li>
              <li>• Education and moral guidance</li>
              <li>• Welfare and charity</li>
              <li>• Community unity and trust</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Activities</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Programs and community work</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activities.map((activity) => (
            <div key={activity.title} className="rounded-[1.5rem] border border-[var(--gold)]/20 bg-white p-6 shadow-[0_12px_40px_rgba(15,93,59,0.08)]">
              <h3 className="text-xl font-semibold text-slate-900">{activity.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

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
            <article key={item.title} className="overflow-hidden rounded-[1.5rem] border border-[var(--gold)]/20 bg-[rgba(255,250,242,0.96)] p-6 shadow-[0_16px_40px_rgba(15,93,59,0.08)]">
              <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
                <span>{item.date}</span>
                {item.pinned ? <span className="rounded-full bg-[var(--gold-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--amber-800)]">Pinned</span> : null}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
              <Link href="#" className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)]">Read more →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Pillars of Islam</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Five pillars that guide the Muslim life</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[1.5rem] border border-emerald-900/10 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">{pillar.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--beige)] p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Islamic Knowledge</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Daily hadith, Quran reflection, and important dates</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[1.25rem] bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Hadith</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">“The strongest man is the one who controls himself when angry.”</p>
            </div>
            <div className="rounded-[1.25rem] bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Verse of the Day</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">“Indeed, with hardship comes ease.” — Quran 94:6</p>
            </div>
            <div className="rounded-[1.25rem] bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Important Date</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">Ramadan Kareem and Eid celebrations are shared with the community each year.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Committee Members</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Leaders committed to service and guidance</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {committeeMembers.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-[2rem] border border-[var(--gold)]/20 bg-white shadow-[0_20px_50px_rgba(15,93,59,0.1)] text-center">
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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Program Groups</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Dedicated teams serving the community</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programGroups.map((group) => (
            <div key={group.title} className="rounded-[1.5rem] border border-emerald-900/10 bg-[var(--beige)] p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{group.members.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Testimonials</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Voices from the community</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-[1.5rem] border border-emerald-900/10 bg-white p-8 shadow-sm">
              <p className="text-base leading-8 text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-900/10 bg-slate-950 p-8 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Suggestion Box</p>
          <h2 className="mt-2 text-3xl font-semibold">Share your ideas and feedback with SIMWA</h2>
          <form className="mt-8 grid gap-4 lg:grid-cols-2">
            <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300" placeholder="Name" />
            <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300" placeholder="Email" />
            <textarea className="lg:col-span-2 min-h-32 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300" placeholder="Your suggestion" />
            <button className="lg:col-span-2 w-fit rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">Submit Suggestion</button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
