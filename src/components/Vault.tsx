import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";
import { garments } from "../data";

export function Vault() {
  const reduce = useReducedMotion();
  const card: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 20 } },
  };

  return (
    <section id="archive" className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 md:py-32">
      <header className="mb-10 max-w-[640px] md:mb-16">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-[var(--muted)]">
          [ Galeri ]
        </p>
        <h2 className="mt-4 font-serif text-[clamp(2.1rem,5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.01em]">
          Yang Bisa <span className="italic text-[var(--gold)]">Kami Buat</span>
        </h2>
        <p className="mt-5 max-w-[52ch] text-[var(--muted)]">
          Dari jaket sampai gaun — tiap pesanan dipola sesuai ukuran, dijahit rapi,
          dan dirapikan sampai detail terakhir.
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--muted)] sm:hidden">
          Geser <span className="animate-pulse text-[var(--gold)]">→</span>
        </span>
      </header>

      <motion.div
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:items-start [&::-webkit-scrollbar]:hidden"
      >
        {garments.map((g, i) => (
          <motion.article
            key={g.index}
            variants={card}
            className={`w-[80%] shrink-0 snap-start sm:w-auto sm:shrink ${
              g.feature ? "lg:col-span-2" : ""
            } ${i === 1 || i === 2 ? "lg:mt-12" : ""}`}
          >
            <SpotlightCard className="h-full overflow-hidden">
              <div className="relative aspect-4/5 overflow-hidden rounded-t-2xl">
                <img
                  loading="lazy"
                  src={g.img}
                  alt={g.alt}
                  className="h-full w-full object-cover transition-transform duration-700 [transition-timing-function:var(--ease-atelier)] group-hover:scale-[1.05]"
                  style={{
                    filter: "grayscale(var(--img-grayscale)) brightness(var(--img-brightness))",
                  }}
                />
                <span className="absolute left-4 top-4 grid h-[2.2rem] w-[2.2rem] place-items-center rounded-full border border-[var(--hairline)] bg-[rgba(var(--bg-rgb),0.55)] font-serif text-[0.95rem] italic text-[var(--silk)] backdrop-blur-md">
                  {g.index}
                </span>
                <span className="absolute bottom-4 left-4 flex translate-y-0 items-center gap-1.5 rounded-full bg-[var(--gold)] px-[0.85rem] py-[0.45rem] text-[0.74rem] tracking-[0.04em] text-[var(--on-gold)] opacity-100 transition-all duration-400 [transition-timing-function:var(--ease-atelier)] sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  Lihat Spesifikasi Jahitan
                  <ArrowUpRight size={13} weight="bold" />
                </span>
              </div>
              <div className="px-6 pb-7 pt-5">
                <h3 className="font-serif text-[1.35rem] font-medium leading-tight">{g.title}</h3>
                <p className="mt-2 text-[0.85rem] text-[var(--muted)]">{g.origin}</p>
              </div>
            </SpotlightCard>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
