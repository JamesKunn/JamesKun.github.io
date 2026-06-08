"use client";

import { FormEvent, useState } from "react";

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_STATICFORMS_ACCESS_KEY ?? "sf_imnd7fe0bdg3l67n325cmehb";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const submitBtn = form.querySelector("#sendMessage") as HTMLInputElement;
    const originalText = submitBtn.value;

    setSending(true);
    setStatus("");
    submitBtn.value = "Sending...";
    submitBtn.disabled = true;

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
      setStatusColor("#28a745");
      form.reset();
    } catch {
      setStatus(
        "Sorry, there was an error sending your message. Please try again."
      );
      setStatusColor("#dc3545");
    } finally {
      submitBtn.value = originalText;
      submitBtn.disabled = false;
      setSending(false);
    }
  };

  return (
    <section id="contact" className="white-bg">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h3 className="title-small">
              <span>Let&apos;s Build Something Smarter</span>
            </h3>
            <p className="content-detail">
              Whether you need to automate a complex business process or build a
              scalable web application, I&apos;m ready to help.
            </p>
          </div>
          <div className="contact-form-wrapper">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="group">
                <input required name="name" type="text" placeholder=" " />
                <label htmlFor="name">Name</label>
              </div>
              <div className="group">
                <input
                  required
                  name="_replyto"
                  type="email"
                  placeholder=" "
                />
                <label htmlFor="_replyto">Email</label>
              </div>
              <div className="group">
                <textarea required name="message" placeholder=" " />
                <label htmlFor="message">Message</label>
              </div>
              <input
                id="sendMessage"
                type="submit"
                value={sending ? "Sending..." : "Send Message"}
                disabled={sending}
              />
            </form>
            {status && (
              <p
                id="contactStatus"
                className="contact-status"
                style={{ color: statusColor }}
              >
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
