import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { ProjectVisual } from "@/components/ui/project-visual";
import { portfolio } from "@/data/portfolio";

function ProjectCard({ item }: { item: (typeof portfolio)[number] }) {
  const isLive = item.url && item.url !== "#";
  return (
    <div
      data-cursor="Lihat"
      className="group relative flex h-full w-[80vw] shrink-0 flex-col border border-white/15 bg-ink-panel transition hover:border-brass sm:w-[400px]"
    >
      <ProjectVisual src={item.image} alt={item.title} fig={item.fig} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="font-mono text-[11px] tracking-wide text-brass">
          {item.fig} — {item.category}
        </div>
        <h3 className="mt-2 font-display text-lg sm:text-xl">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm text-text-muted">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.stack.map((s) => (
            <span
              key={s}
              className="border border-line px-2 py-0.5 font-mono text-[10.5px] text-line-bright"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          {isLive ? (
            <Link
              href={item.url}
              target="_blank"
              className="font-mono text-xs text-brass-light transition hover:text-brass"
            >
              Lihat Live ↗
            </Link>
          ) : (
            <span className="font-mono text-xs text-text-muted/60">Segera hadir</span>
          )}
          <div className="h-px w-10 bg-line transition-all duration-300 group-hover:w-16" />
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portofolio" className="border-b border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal className="mb-10 max-w-lg">
          <div className="font-mono text-[11px] tracking-widest text-brass">PORTOFOLIO</div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl">
            Beberapa cetak biru yang udah jadi.
          </h2>
        </Reveal>
      </div>

      <div className="marquee-mask relative overflow-hidden">
        <div className="marquee-track flex w-max gap-5 sm:gap-6">
          {portfolio.map((item) => (
            <ProjectCard key={`a-${item.title}`} item={item} />
          ))}
          {portfolio.map((item) => (
            <ProjectCard key={`b-${item.title}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}