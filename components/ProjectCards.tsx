"use client";

import type { Project, ProjectProof } from "@/lib/data";
import GlassCarousel from "./GlassCarousel";

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
    <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="28" y="48" width="96" height="104" rx="16" stroke="rgba(122, 162, 255, 0.35)" strokeWidth="2" />
      <path d="M66 82L92 96L66 110V82Z" fill="rgba(122, 162, 255, 0.55)" />
      <path d="M140 70H250M140 100H290M140 130H220" stroke="rgba(122, 162, 255, 0.30)" strokeWidth="2" strokeLinecap="round" />
      <path d="M250 70L290 70M220 130L290 130" stroke="rgba(122, 162, 255, 0.45)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="312" cy="70" r="8" fill="rgba(122, 162, 255, 0.30)" />
      <circle cx="332" cy="98" r="6" fill="rgba(122, 162, 255, 0.35)" />
      <circle cx="312" cy="130" r="10" fill="rgba(122, 162, 255, 0.25)" />
      <path d="M150 150L210 90L270 150" stroke="rgba(122, 162, 255, 0.28)" strokeWidth="2" strokeLinecap="round" />
      <path d="M200 150L260 110L330 150" stroke="rgba(122, 162, 255, 0.22)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const circuitMap = {
  horizontal: CircuitHorizontal,
  circle: CircuitCircle,
  diagonal: CircuitDiagonal,
  video: CircuitVideoAI,
};

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
    <div className={`absolute inset-0 ${className}`}>
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
    <div className={`glass-card rounded-2xl overflow-hidden flex flex-col h-full ${className}`}>
      {children}
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span
          key={tag}
          className={
            i === 0
              ? "px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-mono-label uppercase text-primary"
              : "px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono-label uppercase"
          }
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function WorkflowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="mt-4 rounded-lg border border-white/10 bg-surface-container-low/60 px-4 py-3">
      <p className="spec-label mb-3">Architecture</p>
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-start">
            <span className="font-mono-label text-[10px] text-on-surface leading-snug">
              {step}
            </span>
            {i < steps.length - 1 && (
              <span className="text-primary/40 text-[10px] my-1 ml-1 leading-none">↓</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReliabilityList({ items }: { items: string[] }) {
  return (
    <div className="mt-4">
      <p className="spec-label mb-2">Engineering</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[9px] font-mono-label uppercase tracking-wide text-text-dim"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function DemonstratesList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-1">
      {items.map((item) => (
        <li key={item} className="text-text-dim text-xs leading-relaxed flex gap-2">
          <span className="text-tertiary shrink-0">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

const proofIcons: Record<ProjectProof["type"], string> = {
  github: "code",
  demo: "lock",
  architecture: "account_tree",
  screenshots: "photo_library",
};

function ProjectProofBadges({ proof, fallbackLink }: { proof?: ProjectProof[]; fallbackLink?: string }) {
  const items: ProjectProof[] =
    proof ??
    (fallbackLink ? [{ type: "github", label: "GitHub", href: fallbackLink }] : []);

  if (items.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => {
        const className =
          "inline-flex items-center gap-1 px-2.5 py-1 rounded border text-[10px] font-mono-label uppercase tracking-wider transition-colors " +
          (item.href
            ? "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20"
            : "border-white/10 bg-white/5 text-text-dim");

        const content = (
          <>
            <span className="material-symbols-outlined text-[13px]">
              {proofIcons[item.type]}
            </span>
            {item.label}
          </>
        );

        if (item.href) {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {content}
            </a>
          );
        }

        return (
          <span key={item.label} className={className}>
            {content}
          </span>
        );
      })}
    </div>
  );
}

function SpecGrid({ specs }: { specs: Project["specs"] }) {
  return (
    <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
      {specs.map(({ label, value }) => (
        <div key={label}>
          <p className="spec-label">{label}</p>
          <p className="spec-value">{value}</p>
        </div>
      ))}
    </div>
  );
}

function LargeProjectCard({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: (src: string, alt: string) => void;
}) {
  const Circuit = project.circuit ? circuitMap[project.circuit] : null;
  const imageLeft = project.imagePosition === "left";
  const gradient = imageLeft
    ? "bg-gradient-to-l from-surface-card/60 via-transparent to-transparent"
    : "bg-gradient-to-r from-surface-card/60 via-transparent to-transparent";

  return (
    <ProjectCardShell className={`md:col-span-2 min-h-[420px] ${project.shellClassName ?? ""}`}>
      <div className="relative flex-1 min-h-[420px]">
        {Circuit && (
          <div className="absolute inset-0 z-0 logic-watermark p-8">
            <Circuit />
          </div>
        )}

        <div className="relative z-10 grid md:grid-cols-5 h-full min-h-[420px]">
          {imageLeft && (
            <div className="md:col-span-2 relative">
              <CarouselPanel
                slides={project.slides}
                onImageClick={onImageClick}
                objectFit={project.objectFit}
                gradient={gradient}
              />
            </div>
          )}

          <div className="md:col-span-3 p-8 flex flex-col">
            {project.projectType && (
              <span className="font-mono-label text-[10px] uppercase tracking-wider text-secondary mb-3">
                Project type: {project.projectType}
              </span>
            )}

            <div className="flex items-start gap-3 mb-2">
              <span className="material-symbols-outlined text-primary mt-0.5">{project.icon}</span>
              <div>
                <h3 className="font-display-xl text-2xl font-bold">{project.title}</h3>
                {project.subtitle && (
                  <p className="text-text-dim text-sm mt-1">{project.subtitle}</p>
                )}
              </div>
            </div>

            <p className="text-text-dim text-sm leading-relaxed">{project.description}</p>
            {project.workflow && <WorkflowDiagram steps={project.workflow} />}
            {project.demonstrates && (
              <DemonstratesList items={project.demonstrates} />
            )}
            {project.reliability && (
              <ReliabilityList items={project.reliability} />
            )}

            {project.highlights && (
              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((item) => (
                  <li key={item} className="text-text-dim text-xs leading-relaxed flex gap-2">
                    <span className="text-primary shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6">
              <TagList tags={project.tags} />
            </div>
            <ProjectProofBadges proof={project.proof} fallbackLink={project.link} />
            <div className="flex-1 min-h-12" aria-hidden="true" />
            <SpecGrid specs={project.specs} />
          </div>

          {!imageLeft && (
            <div className="md:col-span-2 relative">
              <CarouselPanel
                slides={project.slides}
                onImageClick={onImageClick}
                objectFit={project.objectFit}
                gradient={gradient}
              />
            </div>
          )}
        </div>
      </div>
    </ProjectCardShell>
  );
}

function SmallProjectCard({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: (src: string, alt: string) => void;
}) {
  return (
    <ProjectCardShell className={`group ${project.shellClassName ?? ""}`}>
      <div className={`relative h-48 flex-shrink-0 ${project.imageClassName ?? ""}`}>
        <CarouselPanel
          slides={project.slides}
          onImageClick={onImageClick}
          objectFit={project.objectFit}
        />
      </div>

      <div className="p-8 flex flex-col flex-1 border-t border-white/10">
        {project.projectType && (
          <span className="font-mono-label text-[10px] uppercase tracking-wider text-secondary mb-3">
            Project type: {project.projectType}
          </span>
        )}

        <div className="flex items-start gap-3 mb-2">
          <span className="material-symbols-outlined text-primary">{project.icon}</span>
          <div>
            <h3 className="font-display-xl text-lg font-bold">{project.title}</h3>
            {project.subtitle && (
              <p className="text-text-dim text-xs mt-1">{project.subtitle}</p>
            )}
          </div>
        </div>

        <p className="text-text-dim text-sm leading-relaxed">{project.description}</p>
        {project.workflow && <WorkflowDiagram steps={project.workflow} />}
        {project.reliability && (
          <ReliabilityList items={project.reliability} />
        )}

        {project.highlights && (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((item) => (
              <li key={item} className="text-text-dim text-xs leading-relaxed flex gap-2">
                <span className="text-primary shrink-0">·</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6">
          <TagList tags={project.tags} />
        </div>
        <ProjectProofBadges proof={project.proof} fallbackLink={project.link} />
        <div className="flex-1 min-h-12" aria-hidden="true" />
        <SpecGrid specs={project.specs} />
      </div>
    </ProjectCardShell>
  );
}

export function ProjectCard({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: (src: string, alt: string) => void;
}) {
  if (project.layout === "large") {
    return <LargeProjectCard project={project} onImageClick={onImageClick} />;
  }
  return <SmallProjectCard project={project} onImageClick={onImageClick} />;
}

export function ProjectGrid({
  items,
  onImageClick,
}: {
  items: Project[];
  onImageClick: (src: string, alt: string) => void;
}) {
  return (
    <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
      {items.map((project) => (
        <ProjectCard key={project.id} project={project} onImageClick={onImageClick} />
      ))}
    </div>
  );
}

export type Lightbox = { src: string; alt: string } | null;

export function ImageLightbox({
  lightbox,
  onClose,
}: {
  lightbox: Lightbox;
  onClose: () => void;
}) {
  if (!lightbox) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <button
        className="absolute right-5 top-5 text-white text-3xl"
        onClick={onClose}
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
  );
}
