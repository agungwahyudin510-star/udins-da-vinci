import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="tentang" className="border-b border-white/10 px-5 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:gap-14">
        <Reveal>
          <div className="font-mono text-[11px] tracking-widest text-brass">TENTANG</div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl">
            Satu developer, macam-macam medan.
          </h2>
          <p className="mt-5 text-sm text-text-muted sm:text-base">
            Udins — developer independen yang terbiasa berpindah &ldquo;medan
            proyek&rdquo;: dari dashboard trading berbasis AI, aplikasi
            terdesentralisasi di blockchain, sampai website katalog untuk
            brand fashion dan parfum lokal.
          </p>
          <p className="mt-4 text-sm text-text-muted sm:text-base">
            Setiap proyek dirancang ulang sesuai karakter brand klien, bukan
            comot template — dibangun dengan stack modern dan siap deploy
            cepat.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative border border-dashed border-line bg-ink-panel p-6 sm:p-7">
            <div className="font-mono text-[11px] tracking-widest text-brass">
              CATATAN TEKNIS
            </div>
            <ul className="mt-4 divide-y divide-white/10 text-sm">
              {[
                ["Stack", siteConfig.stack.slice(0, 2).join(" · ")],
                ["Styling", "Tailwind CSS"],
                ["Animasi", "Framer Motion"],
                ["Proses", "Design → Build → Iterasi"],
                ["Basis", siteConfig.location],
              ].map(([k, v]) => (
                <li key={k} className="flex justify-between py-2.5 text-text-muted">
                  <span>{k}</span>
                  <b className="font-medium text-white">{v}</b>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}