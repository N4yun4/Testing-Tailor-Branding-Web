import { ArrowRight } from "@phosphor-icons/react";
import { RevealGroup, RevealItem } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { heroStats } from "../data";

const marqueeWords = [
  "Jahit Custom",
  "Cosplay",
  "Pas di Badan",
  "Revisi Gratis",
  "Detail Akurat",
  "Bahan Pilihan",
  "Anime & Game",
  "Jahitan Rapi",
  "Harga Ramah",
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden">
      {/* couture backdrop — fades gracefully into the page on the left */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?q=80&w=1600&auto=format&fit=crop')",
          opacity: "var(--hero-texture-opacity)",
          filter: "grayscale(0.3) contrast(1.05)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 95% at 12% 8%, rgba(var(--bg-rgb),0.55), rgba(var(--bg-rgb),0.92) 70%), linear-gradient(180deg, rgba(var(--bg-rgb),0.7) 0%, var(--obsidian) 96%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 pt-28 pb-16 sm:px-8">
        <RevealGroup className="max-w-[60rem]">
          <RevealItem as="p" className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-[var(--muted)]">
            [ Atelier Jahit Kostum &amp; Cosplay ]
          </RevealItem>

          <RevealItem
            as="h1"
            className="mt-6 font-serif text-[clamp(2.8rem,8.5vw,6.5rem)] font-medium leading-[1.02] tracking-[-0.015em]"
          >
            Menguasai <span className="italic text-[var(--gold)]">Desain</span> dari Kain.
          </RevealItem>

          <RevealItem
            as="p"
            className="mt-7 max-w-[56ch] text-[clamp(1rem,1.6vw,1.2rem)] leading-relaxed text-[var(--muted)]"
          >
            Jahitan presisi, detail karakter yang akurat, dan kostum yang nyaman
            dipakai — untuk panggung, pemotretan, dan mewujudkan karakter favoritmu.
          </RevealItem>

          <RevealItem className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="#archive" variant="outline">
              [ Lihat Galeri Kostum ]
            </MagneticButton>
            <MagneticButton href="#commission" variant="ghost" strength={0.25}>
              Mulai Pesan <ArrowRight size={16} weight="bold" />
            </MagneticButton>
          </RevealItem>

          <RevealItem className="mt-12 grid grid-cols-3 gap-x-4 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8">
            {heroStats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                {i > 0 && <span aria-hidden className="hidden h-9 w-px bg-[var(--hairline-soft)] sm:block" />}
                <div className="flex flex-col">
                  <strong className="font-serif text-[1.45rem] font-medium leading-none text-[var(--silk)] sm:text-[1.6rem]">
                    {s.value}
                  </strong>
                  <span className="mt-2 text-[0.66rem] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-[0.72rem] sm:tracking-[0.18em]">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </RevealItem>
        </RevealGroup>
      </div>

      {/* kinetic marquee — perpetual motion (MOTION_INTENSITY 6) */}
      <div className="absolute inset-x-0 bottom-0 flex select-none overflow-hidden border-t border-[var(--hairline-soft)] py-4">
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10 font-serif text-[1.05rem] italic text-[var(--muted)]">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              {w}
              <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--gold)]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
