"use client";

import { useCallback, useEffect, useState } from "react";
import { projects } from "@/lib/data";
import ProjectCarousel from "./ProjectCarousel";

type LightboxState = { src: string; alt: string } | null;

export default function Projects() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

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
      <section id="projects" className="grey-bg mar-tm-10">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3 className="title-small">
                <span>Projects</span>
              </h3>
              <p className="content-detail">
                A selection demonstrating websites, workflow automation, and
                AI-powered systems.
              </p>
            </div>
            <div className="col-md-9 content-right">
              <div className="projects-grid">
                {projects.map((project) => (
                  <div key={project.id} className="project-item">
                    <ProjectCarousel
                      projectId={project.id}
                      slides={project.slides}
                      onImageClick={openLightbox}
                    />
                    <div className="project-info">
                      <h4>
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h4>
                      <p>{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="project-lightbox"
        className={`project-lightbox${lightbox ? " active" : ""}`}
        aria-hidden={!lightbox}
        onClick={closeLightbox}
      >
        <button
          type="button"
          className="project-lightbox-close"
          title="Close"
          onClick={closeLightbox}
          aria-label="Close lightbox"
        >
          &times;
        </button>
        {lightbox && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="project-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    </>
  );
}
