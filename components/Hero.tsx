"use client";

import Image from "next/image";
import { useCallback } from "react";
import { useTheme } from "./ThemeProvider";

function scrollToSection(href: string) {
  const target = document.querySelector(href);
  const header = document.querySelector("header") as HTMLElement;
  if (!target) return;
  const top =
    (target as HTMLElement).offsetTop - (header?.offsetHeight ?? 80);
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Hero() {
  const { theme, mounted } = useTheme();

  const effectiveTheme = mounted ? theme : "dark";
  const profileSrc =
    effectiveTheme === "light"
      ? "/images/me_sunny_-removebg-preview.png"
      : "/images/me_night_-removebg-preview.png";

  const scrollToProjects = useCallback(() => scrollToSection("#projects"), []);
  const scrollToContact = useCallback(() => scrollToSection("#contact"), []);

  return (
    <section
      id="home"
      className="max-w-container-max mx-auto px-gutter py-section-gap mb-0 flex flex-col md:flex-row items-center gap-16"
    >
      {/* Portrait */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-2xl opacity-50" />
        <Image
          key={profileSrc}
          src={profileSrc}
          alt="James Quijada Portrait"
          className="relative w-full max-w-md mx-auto rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02] object-cover"
          width={450}
          height={560}
          priority
        />
        <div className="absolute bottom-4 right-4 bg-surface-container-high px-4 py-2 rounded-lg border border-primary/30 flex items-center gap-2">
          <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
          <span className="font-mono-label text-[12px] uppercase text-on-surface">
            Available for Hire
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-8">
        <div className="space-y-4">
          <h1 className="font-display-xl text-4xl md:text-[56px] md:leading-tight leading-snug font-bold">
            James Bryan Quijada
          </h1>
          <p className="font-display-xl text-xl md:text-2xl text-primary font-semibold">
            AI Automation &amp; Workflow Engineer
          </p>
          <p className="font-body-lg text-body-lg text-text-dim max-w-xl leading-relaxed">
            I build AI-powered workflows that automate repetitive business
            processes, connect APIs and business applications, and turn manual
            operations into reliable, scalable systems.
          </p>
          <p className="font-mono-label text-xs md:text-sm text-text-dim tracking-wide">
            <span className="text-primary">n8n</span>
            {" · AI · APIs · Webhooks · Make · Zapier · Next.js · Python"}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={scrollToProjects}
            className="bg-primary text-on-primary px-8 py-4 rounded font-mono-label uppercase tracking-wider hover:brightness-110 hover:shadow-[0_0_20px_rgba(208,188,255,0.4)] transition-all flex items-center gap-2"
          >
            View My Projects
            <span className="material-symbols-outlined text-[18px]">
              arrow_downward
            </span>
          </button>
          <button
            type="button"
            onClick={scrollToContact}
            className="border border-secondary text-secondary px-8 py-4 rounded font-mono-label uppercase tracking-wider hover:bg-secondary/10 transition-all"
          >
            Let&apos;s Work Together
          </button>
        </div>
      </div>
    </section>
  );
}
