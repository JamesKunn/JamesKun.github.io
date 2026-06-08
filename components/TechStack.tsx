"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { techStacks, type TechItem } from "@/lib/data";

export default function TechStack() {
  const [selected, setSelected] = useState<TechItem | null>(null);

  const closeModal = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [selected, closeModal]);

  return (
    <>
      <section id="tech" className="white-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3 className="title-small">
                <span>Tech Stacks</span>
              </h3>
              <p className="content-detail">
                Click a skill to view details about my experience.
              </p>
            </div>
            <div className="col-md-9 content-right">
              <div className="tech-grid">
                {techStacks.map((tech) => (
                  <button
                    key={tech.id}
                    type="button"
                    className="tech-item"
                    data-tech={tech.id}
                    onClick={() => setSelected(tech)}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={24}
                      height={24}
                    />
                    <span>{tech.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="tech-modal"
        className={`tech-modal${selected ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
        role="dialog"
        aria-modal="true"
        aria-hidden={!selected}
      >
        {selected && (
          <div className="tech-modal-content">
            <button
              type="button"
              className="tech-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="tech-modal-header">
              <Image
                id="tech-modal-icon"
                src={selected.icon}
                alt={selected.name}
                width={40}
                height={40}
              />
              <h3 id="tech-modal-title">{selected.name}</h3>
            </div>
            <div className="tech-modal-body">
              <p id="tech-modal-description">{selected.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
