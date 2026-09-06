"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    let mouseX = 0,
      mouseY = 0,
      ringX = 0,
      ringY = 0,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);

    const targets = document.querySelectorAll<HTMLElement>("[data-cursor]");
    const cleanups: Array<() => void> = [];
    targets.forEach((el) => {
      const enter = () => {
        setHovering(true);
        setLabel(el.dataset.cursor || "");
      };
      const leave = () => setHovering(false);
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      cleanups.forEach((c) => c());
    };
  }, []);

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass-light"
      />
      <div
        ref={ringRef}
        className={`fixed left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brass/60 font-mono text-[10px] uppercase tracking-widest text-brass-light transition-[width,height,background-color] duration-200 ${
          hovering ? "h-16 w-16 bg-ink-panel/85 backdrop-blur-sm" : "h-8 w-8"
        }`}
      >
        {hovering ? label : ""}
      </div>
    </div>
  );
}