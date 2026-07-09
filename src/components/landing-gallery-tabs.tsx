"use client";

import { useState } from "react";
import { asset } from "@/lib/assets";

type Category = {
  title: string;
  images: string[];
};

export default function LandingGalleryTabs({ categories }: { categories: Category[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCategory = categories[selectedIndex] ?? { title: "", images: [] };

  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-[var(--gold)]/20 bg-slate-950/95 p-6 shadow-[0_20px_60px_rgba(15,93,59,0.12)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold-soft)]">Programs Gallery</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Moments from our programs and events</h2>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category.title}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  index === selectedIndex
                    ? "bg-[var(--accent)] text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {selectedCategory.images.slice(0, 6).map((src, index) => (
              <div key={`${selectedCategory.title}-${index}`} className="overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900">
                <img src={asset(src)} alt={`${selectedCategory.title} image ${index + 1}`} className="h-56 w-full object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>

          <div className="text-sm text-slate-300">
            Showing {Math.min(selectedCategory.images.length, 6)} of {selectedCategory.images.length} images for <span className="font-semibold text-white">{selectedCategory.title}</span>.
          </div>
        </div>
      </div>
    </section>
  );
}
