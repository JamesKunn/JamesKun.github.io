"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 200) {
          current = el.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    const target = document.querySelector(href);
    if (!target) return;
    const header = document.querySelector("header") as HTMLElement;
    const top =
      (target as HTMLElement).offsetTop - (header?.offsetHeight ?? 80);
    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-white/10 bg-surface/70">
      <nav className="max-w-container-max mx-auto px-gutter py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          aria-label="Go to home"
          className="flex items-center gap-4"
        >
          <Image
            src="/images/logo.png"
            alt="JQ Logo"
            className="w-10 h-10 rounded-lg"
            width={40}
            height={40}
            priority
          />
          <span className="font-display-xl text-section-title font-bold text-on-surface tracking-tighter">
            James Quijada
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-mono-label text-mono-label uppercase tracking-widest">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className={`transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-on-surface"
                  : "text-text-dim hover:text-on-surface"
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="text-primary hover:text-on-surface transition-colors ml-2"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="material-symbols-outlined">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
        </div>

        {/* Mobile right: theme + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="text-primary"
          >
            <span className="material-symbols-outlined">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <button
            type="button"
            className="text-on-surface"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-container border-t border-white/10 px-gutter py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="font-mono-label text-mono-label uppercase tracking-widest text-text-dim hover:text-on-surface transition-colors text-left py-3 border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
