"use client";

import { useCallback, useEffect, useState } from "react";
import { projects } from "@/lib/data";
import GlassCarousel from "./GlassCarousel";

type Lightbox = { src: string; alt: string } | null;

function CircuitHorizontal() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <path className="circuit-line stroke-primary/30 stroke-1" d="M0 100h50m20 0h100m20 0h50M70 100l20-40h60l20 40M70 100l20 40h60l20-40" />
    </svg>
  );
}
function CircuitCircle() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <circle className="stroke-secondary/30 stroke-1" cx="200" cy="100" r="40" />
      <path className="circuit-line stroke-secondary/30 stroke-1" d="M100 100h60m80 0h60M200 20v40m0 80v40" />
    </svg>
  );
}
function CircuitDiagonal() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <path className="circuit-line stroke-primary/30 stroke-1" d="M50 50l100 100M150 50l-100 100M350 50l-100 100M250 50l100 100" />
    </svg>
  );
}

/** Wrapper that fills its parent absolutely and gives GlassCarousel a clean relative context */
function CarouselPanel({
  slides,
  onImageClick,
  objectFit = "cover",
  gradient,
  className = "",
}: {
  slides: { src: string; alt: string; caption: string }[];
  onImageClick: (src: string, alt: string) => void;
  objectFit?: "cover" | "contain";
  gradient?: string;
  className?: string;
}) {
  return (
    // Outer: absolute fill — positions the panel, no conflict with relative
    <div className={`absolute inset-0 ${className}`}>
      {/* Inner: relative — clean anchor for GlassCarousel's absolute slides */}
      <GlassCarousel
        slides={slides}
        onImageClick={onImageClick}
        objectFit={objectFit}
        className="h-full"
      />
      {gradient && (
        <div className={`absolute inset-0 ${gradient} pointer-events-none z-20`} />
      )}
    </div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<Lightbox>(null);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox]);

  const getProject = (id: string) => projects.find((p) => p.id === id)!;
  const laravel = getProject("laravel");
  const n8n1    = getProject("n8n1");
  const moodle  = getProject("moodle");
  const zapier  = getProject("Zapier");
  const make    = getProject("Make");
  const n8n2    = getProject("n8n2");
  const n8n3    = getProject("n8n3");

  return (
    <>
      <section id="projects" className="py-section-gap relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter mb-16 relative z-10">
          <h2 className="font-display-xl text-headline-lg mb-4">Engineering Showcase</h2>
          <p className="font-body-md text-text-dim max-w-2xl">
            A curated archive of architectural milestones in autonomous workflow engineering and system design.
          </p>
        </div>

        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

          {/* ── LARGE: Loan Tracking (col-span-2) ── */}
          <div className="md:col-span-2 glass-card rounded-2xl overflow-hidden relative group min-h-[420px]">
            <div className="absolute inset-0 z-0 logic-watermark p-8"><CircuitHorizontal /></div>
            <div className="relative z-10 grid md:grid-cols-5 h-full min-h-[420px]">
              <div className="md:col-span-3 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">payments</span>
                    <h3 className="font-display-xl text-2xl font-bold">{laravel.title}</h3>
                  </div>
                  <p className="text-text-dim text-sm leading-relaxed mb-6">{laravel.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono-label uppercase text-primary">Laravel</span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">MySQL</span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">State Pattern</span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                  <div><p className="spec-label">Input</p><p className="spec-value">Raw App Data</p></div>
                  <div><p className="spec-label">Process</p><p className="spec-value">Async Logic</p></div>
                  <div><p className="spec-label">Output</p><p className="spec-value">State Map</p></div>
                </div>
              </div>
              {/* Image panel — relative so CarouselPanel's absolute inset-0 fills it */}
              <div className="md:col-span-2 relative">
                <CarouselPanel
                  slides={laravel.slides}
                  onImageClick={openLightbox}
                  gradient="bg-gradient-to-r from-surface-card/60 via-transparent to-transparent"
                />
              </div>
            </div>
          </div>

          {/* ── SMALL: Moodle ── */}
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col group">
            {/* relative + explicit height so CarouselPanel fills it */}
            <div className="relative h-48 flex-shrink-0">
              <CarouselPanel slides={moodle.slides} onImageClick={openLightbox} />
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div className="space-y-3">
                <h3 className="font-display-xl text-lg font-bold">CLSU — ELEVATE</h3>
                <p className="text-text-dim text-xs leading-relaxed">{moodle.description}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="text-[9px] font-mono-label text-text-dim uppercase">Moodle</span>
                <span className="text-[9px] font-mono-label text-text-dim uppercase">PHP</span>
              </div>
            </div>
          </div>

          {/* ── LARGE: Blog Content AI (col-span-2) ── */}
          <div className="md:col-span-2 glass-card rounded-2xl overflow-hidden relative group min-h-[420px]">
            <div className="absolute inset-0 z-0 logic-watermark p-8"><CircuitCircle /></div>
            <div className="relative z-10 grid md:grid-cols-5 h-full min-h-[420px]">
              <div className="md:col-span-2 relative">
                <CarouselPanel
                  slides={n8n1.slides}
                  onImageClick={openLightbox}
                  gradient="bg-gradient-to-l from-surface-card/60 via-transparent to-transparent"
                />
              </div>
              <div className="md:col-span-3 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-secondary">auto_awesome</span>
                    <h3 className="font-display-xl text-2xl font-bold">Blog Content AI</h3>
                  </div>
                  <p className="text-text-dim text-sm leading-relaxed mb-6">{n8n1.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-secondary/10 border border-secondary/20 rounded text-[10px] font-mono-label uppercase text-secondary">N8n</span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">OpenAI API</span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">DALL-E 3</span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between">
                  <div><p className="spec-label">Input</p><p className="spec-value">Topic Query</p></div>
                  <div className="text-center"><p className="spec-label">Process</p><p className="spec-value">Recursive Prompting</p></div>
                  <div className="text-right"><p className="spec-label">Output</p><p className="spec-value">Live WordPress</p></div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SMALL: Multi-Platform Sync ── */}
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col group">
            <div className="relative h-48 flex-shrink-0 bg-white/5">
              <CarouselPanel slides={make.slides} onImageClick={openLightbox} objectFit="contain" />
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div className="space-y-3">
                <h3 className="font-display-xl text-lg font-bold">{make.title}</h3>
                <p className="text-text-dim text-xs leading-relaxed">{make.description}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="text-[9px] font-mono-label text-text-dim uppercase">Make.com</span>
                <span className="text-[9px] font-mono-label text-text-dim uppercase">API Integration</span>
              </div>
            </div>
          </div>

          {/* ── LARGE: The Gatekeeper (col-span-2) ── */}
          <div className="md:col-span-2 glass-card rounded-2xl overflow-hidden relative group min-h-[420px]">
            <div className="absolute inset-0 z-0 logic-watermark p-8"><CircuitDiagonal /></div>
            <div className="relative z-10 grid md:grid-cols-5 h-full min-h-[420px]">
              <div className="md:col-span-3 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">psychology</span>
                    <h3 className="font-display-xl text-2xl font-bold">The Gatekeeper</h3>
                  </div>
                  <p className="text-text-dim text-sm leading-relaxed mb-6">{zapier.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono-label uppercase text-primary">Zapier</span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">GPT-4</span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">Webhooks</span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                  <div><p className="spec-label">Input</p><p className="spec-value">Form Submission</p></div>
                  <div><p className="spec-label">Process</p><p className="spec-value">Intent Analysis</p></div>
                  <div><p className="spec-label">Output</p><p className="spec-value">Lead Score</p></div>
                </div>
              </div>
              <div className="md:col-span-2 relative">
                <CarouselPanel
                  slides={zapier.slides}
                  onImageClick={openLightbox}
                  gradient="bg-gradient-to-r from-surface-card/60 via-transparent to-transparent"
                />
              </div>
            </div>
          </div>

          {/* ── SMALL: Epic Gen ── */}
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col border-t-2 border-t-primary/20 group">
            <div className="relative h-48 flex-shrink-0 bg-surface-container-low">
              <CarouselPanel slides={n8n2.slides} onImageClick={openLightbox} objectFit="contain" />
            </div>
            <div className="p-8 flex flex-col flex-1 justify-between">
              <div className="space-y-3">
                <span className="material-symbols-outlined text-primary text-3xl">schema</span>
                <h3 className="font-display-xl text-lg font-bold">{n8n2.title}</h3>
                <p className="text-text-dim text-sm leading-relaxed">{n8n2.description}</p>
              </div>
              <div className="mt-6">
                <span className="px-2 py-1 bg-primary/10 rounded text-[9px] font-mono-label text-primary uppercase">n8n Logic</span>
              </div>
            </div>
          </div>

          {/* ── SMALL: QA Test ── */}
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col border-t-2 border-t-secondary/20 group">
            <div className="relative h-48 flex-shrink-0 bg-surface-container-low">
              <CarouselPanel slides={n8n3.slides} onImageClick={openLightbox} objectFit="contain" />
            </div>
            <div className="p-8 flex flex-col flex-1 justify-between">
              <div className="space-y-3">
                <span className="material-symbols-outlined text-secondary text-3xl">verified</span>
                <h3 className="font-display-xl text-lg font-bold">QA Test Suite Engine</h3>
                <p className="text-text-dim text-sm leading-relaxed">{n8n3.description}</p>
              </div>
              <div className="mt-6">
                <span className="px-2 py-1 bg-secondary/10 rounded text-[9px] font-mono-label text-secondary uppercase">Automation</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-4 right-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
