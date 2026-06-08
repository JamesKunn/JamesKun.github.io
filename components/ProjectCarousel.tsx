"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectSlide } from "@/lib/data";

type Props = {
  projectId: string;
  slides: ProjectSlide[];
  onImageClick: (src: string, alt: string) => void;
};

export default function ProjectCarousel({
  projectId,
  slides,
  onImageClick,
}: Props) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = slides.length > 1;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    if (!hasMultiple) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [hasMultiple, slides.length]);

  return (
    <div className="project-carousel" data-project={projectId}>
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`carousel-slide${index === current ? " active" : ""}`}
          onClick={() => onImageClick(slide.src, slide.alt)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onImageClick(slide.src, slide.alt);
            }
          }}
          role="button"
          tabIndex={index === current ? 0 : -1}
          aria-label={`View ${slide.caption}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 800px) 100vw, 400px"
            style={{ objectFit: "cover" }}
          />
          <div className="decription-wrap">
            <div className="image-bg">
              <p className="desc">{slide.caption}</p>
            </div>
          </div>
        </div>
      ))}

      {hasMultiple && (
        <>
          <button
            type="button"
            className="carousel-nav prev"
            aria-label="Previous slide"
            onClick={(e) => {
              e.stopPropagation();
              goTo(current - 1);
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel-nav next"
            aria-label="Next slide"
            onClick={(e) => {
              e.stopPropagation();
              goTo(current + 1);
            }}
          >
            ›
          </button>
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`carousel-dot${index === current ? " active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(index);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    goTo(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
