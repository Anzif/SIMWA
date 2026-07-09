import Link from "next/link";
import { asset } from "@/lib/assets";
import { MobileNav } from "@/components/mobile-nav";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/committee", label: "Committee" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/learning", label: "Learning" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent text-[var(--text)]">
      <header className="sticky top-0 z-50 border-b border-[var(--gold)]/20 bg-[rgba(255,250,242,0.94)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.5rem] border border-[var(--gold)]/40 bg-[linear-gradient(135deg,_var(--accent)_0%,_#1f764f_100%)] p-2 shadow-[0_8px_20px_rgba(15,93,59,0.18)] md:h-24 md:w-24">
              <img src={asset("/images/logo-emblem.png")} alt="SIMWA emblem" className="max-h-full max-w-full object-contain" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">SIMWA</p>
              <p className="text-xs text-slate-600">Sirajul Islam Madrassa Welfare Association</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-[var(--gold)] hover:underline decoration-[var(--gold)]/50 decoration-2">
                {link.label}
              </Link>
            ))}
          </nav>
          <MobileNav links={links} />
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[var(--gold)]/20 bg-[linear-gradient(135deg,_#10261b_0%,_#163522_100%)] px-6 py-12 text-slate-300 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-lg font-semibold text-white">SIMWA</p>
            <p className="text-sm leading-7">Sirajul Islam Madrassa Welfare Association</p>
            <p className="mt-3 text-sm leading-7">Serving the community through education, welfare, and faith-based service.</p>
          </div>
          <div>
            <p className="mb-3 text-lg font-semibold text-white">Follow</p>
            <div className="flex gap-3 text-sm">
              <a href="#" className="transition hover:text-[var(--gold-soft)]">Facebook</a>
              <a href="#" className="transition hover:text-[var(--gold-soft)]">Instagram</a>
              <a href="#" className="transition hover:text-[var(--gold-soft)]">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
