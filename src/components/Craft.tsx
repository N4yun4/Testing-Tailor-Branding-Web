import { motion, useReducedMotion } from "framer-motion";
import { craftSteps } from "../data";

export function Craft() {
  const reduce = useReducedMotion();

  return (
    <section id="craft" className="relative">
      <div aria-hidden className="mx-auto h-px max-w-[1240px] bg-[var(--hairline-soft)]" />

      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 md:py-32">
        <header className="mb-12 max-w-[640px] md:mb-24">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-[var(--muted)]">
            [ Prosesnya ]
          </p>
          <h2 className="mt-4 font-serif text-[clamp(2.1rem,5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            Cara Kami <span className="italic text-[var(--gold)]">Mengerjakannya</span>
          </h2>
          <p className="mt-5 max-w-[52ch] text-[var(--muted)]">
            Tanpa buru-buru. Setiap kostum lewat tiga tahap ini biar hasilnya rapi,
            pas di badan, dan sesuai karakter.
          </p>
        </header>

        <div className="flex flex-col gap-14 md:gap-28">
          {craftSteps.map((step, i) => {
            const flipped = i % 2 === 1;
            return (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: reduce ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ type: "spring", stiffness: 85, damping: 22 }}
                className="grid items-start gap-8 md:grid-cols-12 md:gap-12"
              >
                {/* giant index + title */}
                <div className={`md:col-span-5 ${flipped ? "md:order-2 md:col-start-8" : ""}`}>
                  <span className="block font-serif text-[clamp(4rem,12vw,8rem)] font-medium italic leading-[0.8] text-[var(--gold)]">
                    {step.index}
                  </span>
                  <h3 className="mt-6 font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-medium leading-tight">
                    {step.title}
                  </h3>
                </div>

                {/* copy + points */}
                <div className={`md:col-span-6 ${flipped ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}>
                  <p className="max-w-[52ch] text-[1.02rem] leading-relaxed text-[var(--muted)]">
                    {step.copy}
                  </p>
                  <ul className="mt-8 divide-y divide-[var(--hairline-soft)] border-t border-[var(--hairline-soft)]">
                    {step.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 py-3 text-[0.92rem] text-[var(--silk)]">
                        <span aria-hidden className="h-px w-4 flex-none bg-[var(--gold)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
