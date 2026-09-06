"use client";

import { useState } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export function Astronaut() {
  const [failed, setFailed] = useState(false);
  const { scrollYProgress } = useScroll();

  const top = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["8%", "22%", "48%", "40%", "65%", "88%"]
  );
  const left = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["72%", "8%", "78%", "12%", "70%", "20%"]
  );
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 12, -6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 0.9]);

  return (
    <motion.div
      style={{ top, left, rotate, scale }}
      className="pointer-events-none fixed z-5 h-20 w-20 -translate-x-1/2 -translate-y-1/2 sm:h-28 sm:w-28"
      aria-hidden="true"
    >
      {!failed ? (
        <Image
  src="/astronaut.png"
  alt=""
  fill
  priority
  sizes="(max-width: 640px) 80px, 112px"
  className="object-contain drop-shadow-[0_0_25px_rgba(255,217,138,0.25)]"
  onError={() => setFailed(true)}
/>
      ) : (
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full drop-shadow-[0_0_20px_rgba(255,217,138,0.25)]"
        >
          <circle cx="50" cy="38" r="22" fill="rgba(220,232,245,0.08)" stroke="#DCE8F5" strokeWidth="2.5" />
          <path d="M50 16 a22 22 0 0 1 0 44" fill="none" stroke="#F2B84B" strokeWidth="1.5" opacity="0.5" />
          <rect x="34" y="55" width="32" height="30" rx="10" fill="none" stroke="#DCE8F5" strokeWidth="2.5" />
          <line x1="34" y1="68" x2="20" y2="60" stroke="#DCE8F5" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="66" y1="68" x2="80" y2="76" stroke="#DCE8F5" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="42" y1="85" x2="38" y2="98" stroke="#DCE8F5" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="58" y1="85" x2="64" y2="98" stroke="#DCE8F5" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )}
    </motion.div>
  );
}