import { SiteShell } from "@/components/site-shell";
import { landingGalleryImages } from "@/lib/landingImages";
import { asset } from "@/lib/assets";

export default function GalleryPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Gallery</p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Moments of faith, learning, and community service.</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {landingGalleryImages.map((src, index) => (
            <article key={`${src}-${index}`} className="overflow-hidden rounded-3xl border border-[var(--gold)]/20 bg-white shadow-[0_16px_40px_rgba(15,93,59,0.08)]">
              <img src={asset(src)} alt={`SIMWA gallery image ${index + 1}`} className="h-56 w-full object-cover" />
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
