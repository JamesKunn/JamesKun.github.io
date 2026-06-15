"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectSlide } from "@/lib/data";

type Props = {
  slides: ProjectSlide[];
  onImageClick: (src: string, alt: string) => void;
  objectFit?: "cover" | "contain";
  className?: string;
};

export default function GlassCarousel({
  slides,
  onImageClick,
  objectFit = "cover",
  className = "",
}: Props) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = slides.length > 1;

  const goTo = useCallback(
    (index: number) => setCurrent((index + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (!hasMultiple) return;
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, [hasMultiple, slides.length]);

  return (
    <div className={`relative overflow-hidden group/car ${className}`}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <button
            type="button"
            className="w-full h-full cursor-zoom-in focus:outline-none"
            onClick={() => onImageClick(slide.src, slide.alt)}
            aria-label={`View ${slide.caption}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className={`transition-transform duration-700 group-hover/car:scale-105 ${
                objectFit === "contain" ? "object-contain p-3" : "object-cover"
              }`}
            />
          </button>

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 translate-y-full group-hover/car:translate-y-0 transition-transform duration-300 z-20 pointer-events-none">
            <p className="text-[10px] font-mono-label uppercase tracking-wider text-white/80">
              {slide.caption}
            </p>
          </div>
        </div>
      ))}

      {/* Nav buttons — appear on hover */}
      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={(e) => { e.stopPropagation(); goTo(current - 1); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/car:opacity-100 transition-opacity hover:bg-black/80"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={(e) => { e.stopPropagation(); goTo(current + 1); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/car:opacity-100 transition-opacity hover:bg-black/80"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={(e) => { e.stopPropagation(); goTo(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-4"
                    : "bg-white/40 w-1.5 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
