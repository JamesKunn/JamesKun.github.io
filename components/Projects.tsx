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

function CircuitVideoAI() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* video frame */}
      <rect
        x="28"
        y="48"
        width="96"
        height="104"
        rx="16"
        stroke="rgba(122, 162, 255, 0.35)"
        strokeWidth="2"
      />
      <path
        d="M66 82L92 96L66 110V82Z"
        fill="rgba(122, 162, 255, 0.55)"
      />

      {/* waveform / timeline */}
      <path
        d="M140 70H250M140 100H290M140 130H220"
        stroke="rgba(122, 162, 255, 0.30)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M250 70L290 70M220 130L290 130"
        stroke="rgba(122, 162, 255, 0.45)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* AI sparkle nodes */}
      <circle cx="312" cy="70" r="8" fill="rgba(122, 162, 255, 0.30)" />
      <circle cx="332" cy="98" r="6" fill="rgba(122, 162, 255, 0.35)" />
      <circle cx="312" cy="130" r="10" fill="rgba(122, 162, 255, 0.25)" />

      {/* diagonal motion lines */}
      <path
        d="M150 150L210 90L270 150"
        stroke="rgba(122, 162, 255, 0.28)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M200 150L260 110L330 150"
        stroke="rgba(122, 162, 255, 0.22)"
        strokeWidth="2"
        strokeLinecap="round"
      />
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

function ProjectCardShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden flex flex-col h-full ${className}`}
    >
      {children}
    </div>
  );
}

type SpecItem = { label: string; value: string };

function SmallProjectCard({
  project,
  icon,
  tags,
  specs,
  onImageClick,
  shellClassName = "",
  imageClassName = "",
  objectFit = "cover",
}: {
  project: (typeof projects)[number];
  icon: string;
  tags: React.ReactNode;
  specs: SpecItem[];
  onImageClick: (src: string, alt: string) => void;
  shellClassName?: string;
  imageClassName?: string;
  objectFit?: "cover" | "contain";
}) {
  return (
    <ProjectCardShell className={`group ${shellClassName}`}>
      <div className={`relative h-48 flex-shrink-0 ${imageClassName}`}>
        <CarouselPanel
          slides={project.slides}
          onImageClick={onImageClick}
          objectFit={objectFit}
        />
      </div>

      <div className="p-8 flex flex-col flex-1 border-t border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-primary">{icon}</span>
          <h3 className="font-display-xl text-lg font-bold">{project.title}</h3>
        </div>

        <p className="text-text-dim text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-6">{tags}</div>

        <div className="flex-1 min-h-12" aria-hidden="true" />

        <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
          {specs.map(({ label, value }) => (
            <div key={label}>
              <p className="spec-label">{label}</p>
              <p className="spec-value">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </ProjectCardShell>
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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox]);

  const getProject = (id: string) => projects.find((p) => p.id === id)!;
  const laravel = getProject("laravel");
  const n8n1 = getProject("n8n1");
  const moodle = getProject("moodle");
  const zapier = getProject("Zapier");
  const make = getProject("Make");
  const n8n2 = getProject("n8n2");
  const n8n3 = getProject("n8n3");
  const python = getProject("python");

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
          <ProjectCardShell className="md:col-span-2 min-h-[420px]">
            <div className="relative flex-1 min-h-[420px]">
              <div className="absolute inset-0 z-0 logic-watermark p-8">
                <CircuitHorizontal />
              </div>

              <div className="relative z-10 grid md:grid-cols-5 h-full min-h-[420px]">
                <div className="md:col-span-3 p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">payments</span>
                    <h3 className="font-display-xl text-2xl font-bold">{laravel.title}</h3>
                  </div>

                  <p className="text-text-dim text-sm leading-relaxed">{laravel.description}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono-label uppercase text-primary">
                      Laravel
                    </span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">
                      PHP
                    </span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">
                      MySQL
                    </span>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                    <div>
                      <p className="spec-label">Problem</p>
                      <p className="spec-value"> fragmented loan tracking</p>
                    </div>
                    <div>
                      <p className="spec-label">Solution</p>
                      <p className="spec-value"> centralized dashboard & workflows</p>
                    </div>
                    <div>
                      <p className="spec-label">Impact</p>
                      <p className="spec-value"> faster decisions & clearer reporting</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 relative">
                  <CarouselPanel
                    slides={laravel.slides}
                    onImageClick={openLightbox}
                    gradient="bg-gradient-to-r from-surface-card/60 via-transparent to-transparent"
                  />
                </div>
              </div>
            </div>
          </ProjectCardShell>

          {/* ── SMALL: Moodle ── */}
          <SmallProjectCard
            project={moodle}
            icon="school"
            onImageClick={openLightbox}
            tags={
              <>
                <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono-label uppercase text-primary">
                  Moodle
                </span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">
                  LMS
                </span>
              </>
            }
            specs={[
              { label: "Problem", value: "manual learning flows" },
              { label: "Solution", value: "structured course ecosystem" },
              { label: "Impact", value: "smoother delivery & tracking" },
            ]}
          />

          {/* ── LARGE: Blog Content AI ── */}
          <ProjectCardShell className="md:col-span-2 min-h-[420px]">
            <div className="relative flex-1 min-h-[420px]">
              <div className="absolute inset-0 z-0 logic-watermark p-8">
                <CircuitCircle />
              </div>

              <div className="relative z-10 grid md:grid-cols-5 h-full min-h-[420px]">
                <div className="md:col-span-2 relative">
                  <CarouselPanel
                    slides={n8n1.slides}
                    onImageClick={openLightbox}
                    gradient="bg-gradient-to-l from-surface-card/60 via-transparent to-transparent"
                  />
                </div>

                <div className="md:col-span-3 p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    <h3 className="font-display-xl text-2xl font-bold">{n8n1.title}</h3>
                  </div>

                  <p className="text-text-dim text-sm leading-relaxed">{n8n1.description}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono-label uppercase text-primary">
                      n8n
                    </span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">
                      GPT
                    </span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">
                      DALL·E
                    </span>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                    <div>
                      <p className="spec-label">Problem</p>
                      <p className="spec-value"> manual content bottleneck</p>
                    </div>
                    <div>
                      <p className="spec-label">Solution</p>
                      <p className="spec-value"> AI article pipeline</p>
                    </div>
                    <div>
                      <p className="spec-label">Impact</p>
                      <p className="spec-value"> faster publishing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProjectCardShell>

          {/* ── SMALL: Multi-Platform Sync ── */}
          <SmallProjectCard
            project={make}
            icon="sync"
            onImageClick={openLightbox}
            objectFit="contain"
            imageClassName="bg-white/5"
            tags={
              <>
                <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono-label uppercase text-primary">
                  MAKE
                </span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">
                  API
                </span>
              </>
            }
            specs={[
              { label: "Problem", value: "error-prone manual order handling" },
              { label: "Solution", value: "multi-platform automation" },
              { label: "Impact", value: "zero manual entry" },
            ]}
          />

          {/* ── LARGE: The Gatekeeper ── */}
          <ProjectCardShell className="md:col-span-2 min-h-[420px]">
            <div className="relative flex-1 min-h-[420px]">
              <div className="absolute inset-0 z-0 logic-watermark p-8">
                <CircuitDiagonal />
              </div>

              <div className="relative z-10 grid md:grid-cols-5 h-full min-h-[420px]">
                <div className="md:col-span-3 p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">smart_toy</span>
                    <h3 className="font-display-xl text-2xl font-bold">{zapier.title}</h3>
                  </div>

                  <p className="text-text-dim text-sm leading-relaxed">{zapier.description}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono-label uppercase text-primary">
                      Zapier
                    </span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">
                      Calendar
                    </span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">
                      Telegram
                    </span>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                    <div>
                      <p className="spec-label">Problem</p>
                      <p className="spec-value"> noisy lead intake</p>
                    </div>
                    <div>
                      <p className="spec-label">Solution</p>
                      <p className="spec-value"> AI triage + routing</p>
                    </div>
                    <div>
                      <p className="spec-label">Impact</p>
                      <p className="spec-value"> cleaner pipeline</p>
                    </div>
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
          </ProjectCardShell>

          {/* ── SMALL: Epic Gen ── */}
          <SmallProjectCard
            project={n8n2}
            icon="fact_check"
            onImageClick={openLightbox}
            objectFit="contain"
            shellClassName="border-t-2 border-t-primary/20"
            imageClassName="bg-surface-container-low"
            tags={
              <>
                <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono-label uppercase text-primary">
                  PRD
                </span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">
                  AI
                </span>
              </>
            }
            specs={[
              { label: "Problem", value: "slow planning cycles" },
              { label: "Solution", value: "auto epic generation" },
              { label: "Impact", value: "faster delivery" },
            ]}
          />

          {/* ── SMALL: Test Case Gen ── */}
          <SmallProjectCard
            project={n8n3}
            icon="bug_report"
            onImageClick={openLightbox}
            objectFit="contain"
            tags={
              <>
                <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono-label uppercase text-primary">
                  QA
                </span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">
                  PDF
                </span>
              </>
            }
            specs={[
              { label: "Problem", value: "time-consuming QA setup" },
              { label: "Solution", value: "autonomous test generation" },
              { label: "Impact", value: "faster validation" },
            ]}
          />

          {/* ── LARGE: Youtube AI Repurposing ── */}
          <ProjectCardShell className="md:col-span-2 min-h-[420px]">
            <div className="relative flex-1 min-h-[420px]">
              <div className="absolute inset-0 z-0 logic-watermark p-8">
                <CircuitVideoAI />
              </div>

              <div className="relative z-10 grid md:grid-cols-5 h-full min-h-[420px]">
                <div className="md:col-span-3 p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary">smart_display</span>
                    <h3 className="font-display-xl text-2xl font-bold">{python.title}</h3>
                  </div>

                  <p className="text-text-dim text-sm leading-relaxed">{python.description}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono-label uppercase text-primary">
                      Python
                    </span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">
                      FFMPEG
                    </span>
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase">
                      AI
                    </span>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
                    <div>
                      <p className="spec-label">Input</p>
                      <p className="spec-value"> long-form video link</p>
                    </div>
                    <div>
                      <p className="spec-label">Process</p>
                      <p className="spec-value"> AI highlight + subtitle generation</p>
                    </div>
                    <div>
                      <p className="spec-label">Output</p>
                      <p className="spec-value"> viral-ready short</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 relative">
                  <CarouselPanel
                    slides={python.slides}
                    onImageClick={openLightbox}
                    gradient="bg-gradient-to-r from-surface-card/60 via-transparent to-transparent"
                  />
                </div>
              </div>
            </div>
          </ProjectCardShell>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            className="absolute right-5 top-5 text-white text-3xl"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-[85vw] rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
