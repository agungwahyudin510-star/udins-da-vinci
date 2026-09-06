"use client";

import { useState } from "react";
import Image from "next/image";

export function ProjectVisual({
  src,
  alt,
  fig,
}: {
  src: string;
  alt: string;
  fig: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[4/2.6] w-full overflow-hidden border-b border-white/10 bg-ink-deep">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-panel px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-line/50" />
        <span className="h-2 w-2 rounded-full bg-line/50" />
        <span className="h-2 w-2 rounded-full bg-line/50" />
        <span className="ml-2 truncate font-mono text-[10px] text-text-muted/70">
          {alt.toLowerCase().replace(/\s+/g, "")}.com
        </span>
      </div>

      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          onError={() => setFailed(true)}
          sizes="(max-width: 768px) 82vw, 420px"
        />
      ) : (
        <div className="flex h-[calc(100%-33px)] items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(200,155,60,0.14),transparent_60%)]">
          <span className="font-display text-4xl italic text-line/40">{fig}</span>
        </div>
      )}
    </div>
  );
}