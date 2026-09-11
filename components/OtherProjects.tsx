"use client";

import { useCallback, useEffect, useState } from "react";
import { otherProjects } from "@/lib/data";
import {
  ImageLightbox,
  ProjectGrid,
  type Lightbox,
} from "./ProjectCards";

export default function OtherProjects() {
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

  return (
    <>
      <section
        id="other-projects"
        className="py-section-gap relative overflow-hidden border-t border-outline-variant/10"
      >
        <div className="max-w-container-max mx-auto px-gutter mb-16 relative z-10">
          <h2 className="font-display-xl text-headline-lg mb-4">Other Projects</h2>
          <p className="font-body-md text-text-dim max-w-2xl">
            Web applications and systems that demonstrate software engineering
            fundamentals alongside automation work.
          </p>
        </div>

        <ProjectGrid items={otherProjects} onImageClick={openLightbox} />
      </section>

      <ImageLightbox lightbox={lightbox} onClose={closeLightbox} />
    </>
  );
}
