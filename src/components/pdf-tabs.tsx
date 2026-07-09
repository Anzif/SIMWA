"use client";

import { useState } from "react";
import { asset } from "@/lib/assets";

const docs = [
  {
    id: "anniversary",
    title: "SIMWA Anniversary 4th Edition",
    subtitle: "A special commemorative PDF for the fourth anniversary.",
    src: "/pdfs/SIMWA aniiversary 4th.pdf",
  },
  {
    id: "founding",
    title: "SIMWA Old - Founding Team",
    subtitle: "The original SIMWA founding team and early history.",
    src: "/pdfs/SIMwa old.pdf",
  },
];

export default function PdfTabs() {
  const [active, setActive] = useState(docs[0].id);
  const current = docs.find((item) => item.id === active) ?? docs[0];

  return (
    <div className="rounded-[2rem] border border-[var(--gold)]/25 bg-white p-6 shadow-[0_20px_50px_rgba(15,93,59,0.08)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">PDF Library</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">SIMWA Anniversary & Founding Records</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700">Explore the full PDF editions directly on the site with matching brand colors and easy tab navigation.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {docs.map((doc) => (
            <button
              key={doc.id}
              type="button"
              onClick={() => setActive(doc.id)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                active === doc.id
                  ? "bg-[var(--accent)] text-white shadow-[0_10px_30px_rgba(15,93,59,0.18)]"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {doc.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-[var(--accent)]/15 bg-slate-950 p-4">
        <div className="mb-4 rounded-[1.5rem] bg-slate-900/95 px-6 py-5 text-white shadow-[0_18px_50px_rgba(15,93,59,0.16)]">
          <h3 className="text-lg font-semibold">{current.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{current.subtitle}</p>
        </div>
        <object data={asset(current.src)} type="application/pdf" className="h-[55vh] w-full rounded-[1.5rem] border border-slate-800 bg-slate-950 md:h-[65vh] lg:h-[75vh]">
          <p className="text-sm text-slate-300">Your browser does not support embedded PDFs. <a className="text-[var(--accent)] underline" href={asset(current.src)} target="_blank" rel="noreferrer">Open the PDF directly</a>.</p>
        </object>
      </div>
    </div>
  );
}
