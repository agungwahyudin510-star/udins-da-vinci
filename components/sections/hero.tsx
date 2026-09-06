import Link from "next/link";
import { SplitText } from "@/components/ui/split-text";
import { Magnetic } from "@/components/ui/magnetic";

export function Hero() {
  return (
    <section className="relative border-b border-white/10 px-5 pb-16 pt-14 sm:px-6 md:pb-28 md:pt-20">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        {/* Kolom kiri: label vertikal + telemetry log */}
        <div className="flex flex-row items-start gap-6 md:flex-col md:gap-10">
          <div className="hidden md:block">
            <span
              className="block font-mono text-[10px] tracking-[0.3em] text-brass/70"
              style={{ writingMode: "vertical-rl" }}
            >
              MISI // 2026
            </span>
          </div>
          <dl className="grid grid-cols-3 gap-x-6 gap-y-3 font-mono text-[10.5px] text-text-muted md:grid-cols-1 md:gap-y-4">
            <div>
              <dt className="text-brass/70">PROYEK</dt>
              <dd className="mt-0.5 text-sm text-line-bright">06 selesai</dd>
            </div>
            <div>
              <dt className="text-brass/70">STACK</dt>
              <dd className="mt-0.5 text-sm text-line-bright">Next.js / TS</dd>
            </div>
            <div>
              <dt className="text-brass/70">BASIS</dt>
              <dd className="mt-0.5 text-sm text-line-bright">Karawang, ID</dd>
            </div>
          </dl>
        </div>

        {/* Kolom kanan: headline utama */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-widest text-brass sm:text-[11px]">
            <span className="h-px w-5 bg-brass" />
            SIGNAL MASUK — WEB STUDIO &amp; LANDING PAGE
          </div>

          <h1 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            <SplitText text="Merancang semesta" />
            <br />
            <SplitText text="digital untuk brand" />
            <br />
            <SplitText text="Anda." className="italic text-brass-light" />
          </h1>

          <p className="mt-6 max-w-md border-l border-line/60 pl-4 text-[15px] leading-relaxed text-text-muted">
            Landing page, company profile, dashboard — dikerjakan end-to-end
            oleh satu orang. Dari riset kebutuhan sampai go-live, tanpa delegate
            ke tim lain.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Magnetic>
              <Link
                href="#kontak"
                data-cursor="Chat"
                className="block bg-brass px-6 py-3 text-center font-mono text-sm text-ink-deep transition hover:bg-brass-light"
              >
                Mulai Diskusi Proyek →
              </Link>
            </Magnetic>
            <Link
              href="#portofolio"
              className="font-mono text-sm text-line-bright underline decoration-line/50 underline-offset-4 transition hover:decoration-brass-light"
            >
              lihat portofolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}