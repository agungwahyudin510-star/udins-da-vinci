import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="layanan" className="border-b border-white/10 px-5 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 max-w-lg md:mb-12">
          <div className="font-mono text-[11px] tracking-widest text-brass">LAYANAN</div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl">
            Yang bisa dikerjakan untuk Anda.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="group h-full bg-ink-deep p-6 transition duration-300 hover:-translate-y-1 hover:bg-ink-panel sm:p-7">
                <div className="mb-5 h-7 w-7 rounded-full border border-brass transition group-hover:border-brass-light" />
                <h3 className="font-display text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{s.description}</p>
                <div className="mt-4 font-mono text-xs text-brass-light">{s.price}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6" delay={services.length * 70}>
          <p className="font-mono text-[11px] text-text-muted/70">
            * Harga belum termasuk biaya domain &amp; hosting/server.
          </p>
        </Reveal>
      </div>
    </section>
  );
}