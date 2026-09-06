"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#kontak", label: "Kontak" },
];

function LogoMark() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" className="shrink-0">
        <circle cx="14" cy="14" r="12" stroke="#C89B3C" strokeWidth="1" />
        <path d="M14 4V24M4 14H24" stroke="#5D7399" strokeWidth="0.6" />
        <circle cx="14" cy="14" r="3.4" stroke="#DCE8F5" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-brass/60">
      <Image
        src="/avatar.jpg"
        alt=""
        fill
        sizes="28px"
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-deep/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-6">
        <Link
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-display text-base sm:text-lg"
        >
          <LogoMark />
          {siteConfig.name}
        </Link>

        <div className="hidden gap-8 text-sm text-text-muted md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-line-bright">
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#kontak"
          className="hidden border border-brass px-4 py-2 font-mono text-xs tracking-wide text-brass-light transition hover:bg-brass hover:text-ink-deep md:inline-flex"
        >
          MULAI PROYEK →
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-line-bright transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-line-bright transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm text-text-muted hover:text-line-bright"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#kontak"
            onClick={() => setOpen(false)}
            className="mt-2 border border-brass px-4 py-2.5 text-center font-mono text-xs tracking-wide text-brass-light"
          >
            MULAI PROYEK →
          </Link>
        </div>
      </div>
    </header>
  );
}