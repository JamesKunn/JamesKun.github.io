"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { techStacks, type TechItem } from "@/lib/data";

export default function TechStack() {
  const [selected, setSelected] = useState<TechItem | null>(null);

  const closeModal = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [selected, closeModal]);

  return (
    <>
      <section id="tech" className="py-section-gap overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="font-display-xl text-headline-lg mb-4">
              Tech Stacks
            </h2>
            <p className="font-body-md text-text-dim">
              Core technologies powering my automation ecosystems.
            </p>
          </div>
          <p className="font-mono-label text-text-dim text-sm italic">
            Click a skill to view details
          </p>
        </div>

        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStacks.map((tech) => (
            <button
              key={tech.id}
              type="button"
              onClick={() => setSelected(tech)}
              className="bg-surface-card border border-white/5 p-6 flex flex-col items-center justify-center gap-4 group hover:border-primary/50 hover:bg-surface-container-high transition-all duration-300 rounded-lg"
            >
              <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 transition-all">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="font-mono-label uppercase text-[11px] tracking-widest text-center leading-tight">
                {tech.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-surface-container border border-white/10 rounded-2xl w-[90%] max-w-md shadow-2xl relative">
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-4 top-4 text-text-dim hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="flex items-center gap-4 px-8 py-6 border-b border-white/10">
              <div className="relative w-10 h-10">
                <Image
                  src={selected.icon}
                  alt={selected.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3 className="font-display-xl text-xl font-bold text-on-surface">
                {selected.name}
              </h3>
            </div>
            <div className="px-8 py-6">
              <p className="font-body-md text-text-dim leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
