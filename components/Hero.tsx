"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const HERO_TEXT = "I build clean websites and reliable automations.";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = typedRef.current;
    if (!el) return;

    const typed = new Typed(el, {
      strings: [HERO_TEXT],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      fadeOut: false,
      startDelay: 1000,
      backDelay: 3000,
      smartBackspace: false,
      shuffle: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home">
      <div className="container">
        <div className="row">
          <div className="wrap-hero-content">
            <div className="hero-content">
              <h1>Hello Po</h1>
              <br />
              <span className="typed" ref={typedRef} />
            </div>
          </div>
          <div className="mouse-icon margin-20">
            <div className="scroll" />
          </div>
        </div>
      </div>
    </section>
  );
}
