"use client";

import { FormEvent, useCallback, useState } from "react";
import { RESUME_FILENAME, RESUME_PATH, socialLinks } from "@/lib/data";

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_STATICFORMS_ACCESS_KEY ?? "sf_imnd7fe0bdg3l67n325cmehb";

const GITHUB_URL =
  socialLinks.find((link) => link.label === "GitHub")?.href ??
  "https://github.com/JamesKunn/";

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

export default function Contact() {
  const [status, setStatus] = useState("");
  const [statusOk, setStatusOk] = useState(true);
  const [sending, setSending] = useState(false);
  const [downloading, setDownloading] = useState(false);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setStatus("");

    const formData = new FormData(form);
    formData.set("accessKey", ACCESS_KEY);

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Network response was not ok");
      await response.json();
      setStatus("Message sent successfully! I'll get back to you soon.");
      setStatusOk(true);
      form.reset();
    } catch {
      setStatus(
        "Sorry, there was an error sending your message. Please try again."
      );
      setStatusOk(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-section-gap bg-background">
      <div className="max-w-[800px] mx-auto px-gutter">
        <div className="text-center mb-12">
          <h2 className="font-display-xl text-headline-lg mb-4">
            Have a Process That Should Be Automated?
          </h2>
          <p className="font-body-md text-text-dim leading-relaxed max-w-2xl mx-auto">
            Whether you need to automate a repetitive business process, connect
            multiple applications, or build an AI-powered workflow, I can help
            turn the idea into a working system.
          </p>
          <p className="font-body-md text-on-surface mt-4 max-w-2xl mx-auto">
            Let&apos;s build something that saves time, reduces manual work, and
            actually works.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#contact-form"
            className="bg-primary text-on-primary px-6 py-3 rounded font-mono-label uppercase tracking-wider text-sm hover:brightness-110 transition-all"
          >
            Contact Me
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-on-surface px-6 py-3 rounded font-mono-label uppercase tracking-wider text-sm hover:bg-white/5 transition-all"
          >
            View GitHub
          </a>
          <button
            type="button"
            onClick={handleResumeDownload}
            disabled={downloading}
            className="border border-secondary text-secondary px-6 py-3 rounded font-mono-label uppercase tracking-wider text-sm hover:bg-secondary/10 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {downloading ? "Downloading..." : "Download Resume"}
          </button>
        </div>

        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="space-y-8 bg-surface-card p-10 rounded-2xl border border-white/5 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-mono-label text-xs uppercase tracking-widest text-text-dim block">
                Your Name
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-4 text-on-surface placeholder-text-dim/50 focus:border-primary focus:ring-0 focus:outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono-label text-xs uppercase tracking-widest text-text-dim block">
                Your Email
              </label>
              <input
                required
                name="_replyto"
                type="email"
                placeholder="hello@example.com"
                className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-4 text-on-surface placeholder-text-dim/50 focus:border-primary focus:ring-0 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-mono-label text-xs uppercase tracking-widest text-text-dim block">
              Project Details
            </label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me about the process or workflow you want to automate..."
              className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-4 text-on-surface placeholder-text-dim/50 focus:border-primary focus:ring-0 focus:outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-primary text-on-primary font-mono-label uppercase tracking-[0.2em] py-5 rounded hover:brightness-110 transition-all flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {sending ? "Sending..." : "Contact Me"}
            {!sending && (
              <span className="material-symbols-outlined">send</span>
            )}
          </button>

          {status && (
            <p
              className={`text-center text-sm font-mono-label ${
                statusOk ? "text-tertiary" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
