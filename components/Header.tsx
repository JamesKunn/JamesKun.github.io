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
      const introEl = document.querySelector("#intro") as HTMLElement | null;
      const aboutEl = document.querySelector("#about") as HTMLElement | null;

      // Merge logic: "About Me" should stay active while user is within
      // either #intro or #about.
      if (introEl && aboutEl) {
        const headerOffset = 200;
        const introTop = introEl.offsetTop - headerOffset;
        const aboutBottom = aboutEl.offsetTop + aboutEl.offsetHeight - headerOffset;

        if (window.scrollY >= introTop && window.scrollY < aboutBottom) {
          setActiveSection("about");
          return;
        }
      }

      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 200) {
          current = el.id;
        }
      });

      // Ensure link highlight matches existing section IDs exactly.
      setActiveSection(current);
    };


    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback(
    (href: string) => {
      // Merge logic: when clicking "About Me" (#about), scroll to #intro first.
      const resolvedHref = href === "#about" ? "#intro" : href;

      const target = document.querySelector(resolvedHref);
      if (!target) return;
      const header = document.querySelector(".header") as HTMLElement;
      const headerHeight = header?.offsetHeight ?? 70;
      const top = (target as HTMLElement).offsetTop - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
      setMobileOpen(false);
    },
    []
  );


  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <button
            type="button"
            className="nav-link"
            style={{ padding: 0 }}
            onClick={() => scrollTo("#home")}
            aria-label="Go to home"
          >
            <Image
              src="/images/logo.png"
              alt="logo"
              className="logo-nav"
              width={50}
              height={50}
              priority
            />
          </button>
        </div>

        <nav className={`nav-menu${mobileOpen ? " mobile-open" : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              className={`nav-link${activeSection === link.href.slice(1) ? " active" : ""}`}
              onClick={() => scrollTo(link.href)}
            >
              {link.label}
            </button>
          ))}

          <div className="theme-toggle">
            <input
              type="radio"
              id="light-mode"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={() => setTheme("light")}
            />
            <label htmlFor="light-mode" className="theme-label">
              ☀️
            </label>
            <input
              type="radio"
              id="dark-mode"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={() => setTheme("dark")}
            />
            <label htmlFor="dark-mode" className="theme-label">
              🌙
            </label>
          </div>
        </nav>

        <button
          type="button"
          className={`mobile-menu-btn${mobileOpen ? " active" : ""}`}
          id="mobile-menu-btn"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  );
}
