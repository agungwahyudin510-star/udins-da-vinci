import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="py-9">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6">
        <span className="font-mono text-[10px] tracking-widest text-brass">
          {siteConfig.name.toUpperCase()} © 2026
        </span>
        <div className="flex gap-6 text-sm text-text-muted">
          <Link href="#tentang" className="hover:text-line-bright">Tentang</Link>
          <Link href="#layanan" className="hover:text-line-bright">Layanan</Link>
          <Link href="#portofolio" className="hover:text-line-bright">Portofolio</Link>
          <Link href={siteConfig.instagram} target="_blank" className="hover:text-line-bright">
            Instagram
          </Link>
          <Link href={siteConfig.whatsapp} target="_blank" className="hover:text-line-bright">
            WhatsApp
          </Link>
        </div>
      </div>
    </footer>
  );
}
