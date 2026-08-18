"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { RESUME_FILENAME, RESUME_PATH } from "@/lib/data";
import { useTheme } from "./ThemeProvider";

function showToast(message: string, type: "success" | "info" | "error" = "success") {
  const bgColor =
    type === "success" ? "#28a745" : type === "info" ? "#17a2b8" : "#dc3545";
  const el = document.createElement("div");
  el.style.cssText = `
    position: fixed; top: 20px; right: 20px; background: ${bgColor};
    color: white; padding: 12px 20px; border-radius: 8px; z-index: 10000;
    font-weight: 500; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: slideIn 0.3s ease; max-width: 300px; word-wrap: break-word;
  `;
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => {
    el.style.animation = "slideOut 0.3s ease";
    setTimeout(() => el.remove(), 300);
  }, 4000);
}

export default function Hero() {
  const { theme, mounted } = useTheme();
  const [downloading, setDownloading] = useState(false);

  const effectiveTheme = mounted ? theme : "dark";
  const profileSrc =
    effectiveTheme === "light"
      ? "/images/me_sunny_-removebg-preview.png"
      : "/images/me_night_-removebg-preview.png";

  const scrollToContact = useCallback(() => {
    const target = document.querySelector("#contact");
    const header = document.querySelector("header") as HTMLElement;
    if (!target) return;
    const top =
      (target as HTMLElement).offsetTop - (header?.offsetHeight ?? 80);
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const handleResumeDownload = useCallback(async () => {
    setDownloading(true);
    try {
      const response = await fetch(RESUME_PATH);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = RESUME_FILENAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      showToast("Resume downloaded successfully!", "success");
    } catch {
      const link = document.createElement("a");
      link.href = RESUME_PATH;
      link.download = RESUME_FILENAME;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("Resume download started! Check your downloads folder.", "info");
    } finally {
      setTimeout(() => setDownloading(false), 2000);
    }
  }, []);

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
          <p className="font-mono-label text-primary uppercase tracking-[0.2em]">
            Autonomous Logic Systems
          </p>
          <h1 className="font-display-xl text-4xl md:text-[64px] md:leading-tight leading-snug font-bold">
            Hello, I&apos;m{" "}
            <span className="text-primary">James Quijada</span>
          </h1>
          <p className="font-body-lg text-body-lg text-text-dim max-w-xl">
          I build intelligent AI automations that eliminate manual work, fix broken workflows, 
          and scale business operations.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleResumeDownload}
            disabled={downloading}
            className="bg-primary text-on-primary px-8 py-4 rounded font-mono-label uppercase tracking-wider hover:brightness-110 hover:shadow-[0_0_20px_rgba(208,188,255,0.4)] transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {downloading ? "Downloading..." : "Check my resume"}
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
          </button>
          <button
            type="button"
            onClick={scrollToContact}
            className="border border-secondary text-secondary px-8 py-4 rounded font-mono-label uppercase tracking-wider hover:bg-secondary/10 transition-all"
          >
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}
