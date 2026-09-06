"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

function Seal() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-brass font-display text-sm italic text-brass-light">
        U·DV
      </div>
    );
  }

  return (
    <div className="relative mx-auto mb-7 h-24 w-24 overflow-hidden rounded-full border border-brass">
      <Image
        src="/avatar.jpg"
        alt=""
        fill
        sizes="96px"
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function Cta() {
  return (
    <section id="kontak" className="px-5 py-16 sm:px-6 md:py-24">
      <Reveal className="mx-auto max-w-lg text-center">
        <Seal />
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl">
          Punya ide yang siap diluncurkan?
        </h2>
        <p className="mt-5 text-sm text-text-muted sm:text-base">
          Hubungi lewat Instagram untuk diskusikan kebutuhan proyek Anda —
          landing page, company profile, atau kebutuhan yang lebih kompleks.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={siteConfig.instagram}
            target="_blank"
            className="bg-brass px-6 py-3 font-mono text-sm text-ink-deep transition hover:bg-brass-light"
          >
            Chat di Instagram →
          </Link>
          <Link
            href="#layanan"
            className="border border-line px-6 py-3 font-mono text-sm text-line-bright transition hover:border-line-bright"
          >
            Lihat Layanan
          </Link>
        </div>
      </Reveal>
    </section>
  );
}