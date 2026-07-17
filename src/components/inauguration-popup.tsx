"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/assets";

// The popup only appears on this local calendar date (inauguration day) and
// then automatically stops showing afterwards. Format: YYYY-MM-DD.
const INAUGURATION_DATE = "2026-07-17";

// The poster. Save your image at: public/images/inauguration.jpg
// (change the path here if you use a different name/extension).
const POSTER_SRC = asset("/images/inauguration.jpg");

// Natural pixel size of the poster — keeps the split halves perfectly aligned.
const POSTER_W = 2752;
const POSTER_H = 1536;

// Session key so the popup shows once per browser session, not on every click.
const SESSION_KEY = "simwa-inauguration-seen";

function todayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function InaugurationPopup() {
  const [open, setOpen] = useState(false);
  const [unveiling, setUnveiling] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (todayKey() !== INAUGURATION_DATE) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // sessionStorage may be unavailable (private mode) — show anyway.
    }
    setOpen(true);
  }, []);

  // Lock background scroll and enable ESC-to-close while the popup is open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      if (timer.current) window.clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore
    }
    setOpen(false);
  }

  // Click the poster to "inaugurate" — play the unveil animation, then enter.
  function inaugurate() {
    if (unveiling) return;
    setUnveiling(true);
    timer.current = window.setTimeout(close, 1250);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="SIMWA website inauguration"
      onClick={close}
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[rgba(16,38,27,0.82)] p-4 backdrop-blur-md ${
        unveiling ? "animate-[inaugBackdrop_1.2s_ease_forwards]" : "animate-[inaugFade_0.4s_ease]"
      }`}
    >
      {/* Close / skip button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
        aria-label="Close"
        className="fixed right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl animate-[inaugRise_0.6s_cubic-bezier(0.16,1,0.3,1)]"
      >
        {posterFailed ? (
          <div className="flex aspect-[2752/1536] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(135deg,_#10261b_0%,_#163522_100%)] px-6 text-center text-white">
            <img src={asset("/images/logo-emblem.png")} alt="SIMWA emblem" className="h-24 w-24 object-contain" />
            <p className="text-lg font-semibold">SIMWA Website Launch</p>
            <p className="text-sm text-white/70">(Add your poster at public/images/inauguration.jpg)</p>
            <button
              type="button"
              onClick={close}
              className="mt-2 rounded-full bg-[var(--gold)] px-6 py-2 text-sm font-semibold text-[#4a3407]"
            >
              Enter Website
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={inaugurate}
            aria-label="Click to inaugurate and unveil the website"
            className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-[var(--gold)]/40 shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
            style={{ aspectRatio: `${POSTER_W} / ${POSTER_H}` }}
          >
            {/* Full poster (fades out as it splits) */}
            <img
              src={POSTER_SRC}
              alt="SIMWA website inauguration"
              onError={() => setPosterFailed(true)}
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${
                unveiling ? "opacity-0" : "group-hover:scale-[1.015]"
              }`}
            />

            {unveiling && (
              <>
                {/* Left half of the poster slides away */}
                <img
                  src={POSTER_SRC}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover animate-[unveilLeft_1.15s_cubic-bezier(0.7,0,0.84,0)_forwards]"
                  style={{ clipPath: "inset(0 50% 0 0)" }}
                />
                {/* Right half of the poster slides away */}
                <img
                  src={POSTER_SRC}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover animate-[unveilRight_1.15s_cubic-bezier(0.7,0,0.84,0)_forwards]"
                  style={{ clipPath: "inset(0 0 0 50%)" }}
                />
                {/* Golden flash along the cut line */}
                <span className="pointer-events-none absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-[var(--gold-soft)] shadow-[0_0_40px_18px_rgba(244,217,139,0.9)] animate-[cutFlash_1.15s_ease-out_forwards]" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
