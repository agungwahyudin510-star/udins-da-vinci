"use client";

import { useEffect, useRef } from "react";

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    type Star = { x: number; y: number; r: number; depth: number; phase: number };
    const stars: Star[] = [];
    const STAR_COUNT = width < 640 ? 130 : 220;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.4,
        depth: Math.random() * 0.8 + 0.3,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let scrollY = window.scrollY;
    let t = 0;
    let raf = 0;

    const onScroll = () => (scrollY = window.scrollY);
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const travel = (t * 14 + scrollY * 0.4) * s.depth;
        const y = ((s.y + travel) % (height + 40)) - 20;
        const x = (s.x + Math.sin(t * 0.2 + s.phase) * 6 * s.depth + width) % width;

        const twinkle = 0.5 + Math.sin(t * 1.8 + s.phase) * 0.5;
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 214, 255, ${0.3 + twinkle * 0.6})`;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y - s.depth * 10);
        ctx.strokeStyle = `rgba(220, 214, 255, ${0.08 * s.depth})`;
        ctx.lineWidth = s.r * 0.8;
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}