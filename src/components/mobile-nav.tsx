"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = { href: string; label: string };

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--gold)]/40 text-[var(--accent)] transition hover:bg-[var(--gold)]/10"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <nav className="absolute right-0 top-full z-50 mt-3 w-56 overflow-hidden rounded-2xl border border-[var(--gold)]/30 bg-[rgba(255,250,242,0.98)] shadow-[0_20px_50px_rgba(15,93,59,0.18)] backdrop-blur">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-[var(--gold)]/10 hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
