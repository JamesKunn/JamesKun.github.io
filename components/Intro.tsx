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

export default function Intro() {
  const { theme, mounted } = useTheme();
  const effectiveTheme = mounted ? theme : "light";
  const [downloading, setDownloading] = useState(false);

  const profileSrc =
    effectiveTheme === "light"
      ? "/images/prof-light.png"
      : "/images/prof.png";

  const scrollToContact = useCallback(() => {
    const target = document.querySelector("#contact");
    const header = document.querySelector(".header") as HTMLElement;
    if (!target) return;
    const top =
      (target as HTMLElement).offsetTop - (header?.offsetHeight ?? 70);
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
      showToast(
        "Resume download started! Check your downloads folder.",
        "info"
      );
    } finally {
      setTimeout(() => setDownloading(false), 2000);
    }
  }, []);

  return (
    <section id="intro">
      <div className="container">
        <div className="row">
          <div className="col-md-6 intro-photo-wrap">
            <Image
              src={profileSrc}
              alt="James Kun"
              className="intro-photo"
              width={380}
              height={480}
              priority
            />
          </div>
          <div className="col-md-6">
            <div className="intro-block">
              <h2>
                Hello, I&apos;m <strong>James Quijada</strong>
              </h2>
              <p>
                I specialize in AI Automation, Workflow Engineering, and building
                scalable systems that eliminate manual bottlenecks.
              </p>
              <div className="intro-cta">
                <button
                  type="button"
                  className="btn btn-primary"
                  id="btnResume"
                  onClick={handleResumeDownload}
                  disabled={downloading}
                  style={{ opacity: downloading ? 0.7 : 1 }}
                >
                  {downloading ? "Downloading..." : "Check my resume"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  id="btnHire"
                  onClick={scrollToContact}
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
