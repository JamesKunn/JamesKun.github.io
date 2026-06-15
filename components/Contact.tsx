"use client";

import { FormEvent, useState } from "react";

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_STATICFORMS_ACCESS_KEY ?? "sf_imnd7fe0bdg3l67n325cmehb";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [statusOk, setStatusOk] = useState(true);
  const [sending, setSending] = useState(false);

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
        <div className="text-center mb-16">
          <h2 className="font-display-xl text-headline-lg mb-4">
            Let&apos;s Build Something Smarter
          </h2>
          <p className="font-body-md text-text-dim">
            Whether you need to automate a complex business process or build a
            scalable web application, I&apos;m ready to help.
          </p>
        </div>

        <form
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
                placeholder="James Kun"
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
                placeholder="hello@jamesquijada.com"
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
              placeholder="Tell me about the workflow or system you want to automate..."
              className="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-4 text-on-surface placeholder-text-dim/50 focus:border-primary focus:ring-0 focus:outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-primary text-on-primary font-mono-label uppercase tracking-[0.2em] py-5 rounded hover:brightness-110 transition-all flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {sending ? "Sending..." : "Execute Request"}
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
