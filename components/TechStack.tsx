"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { skillCategories, techStacks, type TechItem } from "@/lib/data";

export default function TechStack() {
  const [selected, setSelected] = useState<TechItem | null>(null);

  const closeModal = useCallback(() => setSelected(null), []);

  const openSkill = useCallback((techId?: string) => {
    if (!techId) return;
    const tech = techStacks.find((t) => t.id === techId);
    if (tech) setSelected(tech);
  }, []);

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
      <section id="skills" className="py-section-gap overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="font-display-xl text-headline-lg mb-4">
              Technical Skills
            </h2>
            <p className="font-body-md text-text-dim">
              Organized by focus area — n8n, AI, APIs, and automation tools are
              core to how I build.
            </p>
          </div>
          <p className="font-mono-label text-text-dim text-sm italic">
            Click a highlighted skill to view details
          </p>
        </div>

        <div className="max-w-container-max mx-auto px-gutter space-y-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`glass-card rounded-2xl p-6 md:p-8 ${
                category.prominent
                  ? "border-primary/25 bg-primary/5"
                  : "border-white/5"
              }`}
            >
              <h3
                className={`font-display-xl text-lg font-bold mb-5 ${
                  category.prominent ? "text-primary" : "text-on-surface"
                }`}
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const tech = skill.techId
                    ? techStacks.find((t) => t.id === skill.techId)
                    : null;
                  const isClickable = Boolean(tech);

                  if (isClickable && tech) {
                    return (
                      <button
                        key={skill.label}
                        type="button"
                        onClick={() => openSkill(skill.techId)}
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-white/10 bg-surface-container-high hover:border-primary/50 hover:bg-surface-container transition-all group"
                      >
                        <div className="relative w-5 h-5 grayscale group-hover:grayscale-0 transition-all shrink-0">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        <span className="font-mono-label text-[11px] uppercase tracking-wider text-on-surface">
                          {skill.label}
                        </span>
                      </button>
                    );
                  }

                  return (
                    <span
                      key={skill.label}
                      className="inline-flex items-center px-4 py-2.5 rounded-lg border border-white/10 bg-surface-container-low font-mono-label text-[11px] uppercase tracking-wider text-text-dim"
                    >
                      {skill.label}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

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
