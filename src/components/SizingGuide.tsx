import { motion, useReducedMotion } from "framer-motion";
import { Ruler, Info } from "@phosphor-icons/react";
import { sizeChartBase, sizeChartPants } from "../data";

type Chart = typeof sizeChartBase;

function SizeTable({ chart }: { chart: Chart }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--surface)]">
      <div className="flex items-center justify-between border-b border-[var(--hairline-soft)] px-5 py-4">
        <h3 className="font-serif text-[1.2rem] font-medium">{chart.caption}</h3>
        <span className="text-[0.66rem] uppercase tracking-[0.16em] text-[var(--muted)]">cm</span>
      </div>
      <table className="w-full border-collapse text-[0.9rem]">
        <thead>
          <tr className="border-b border-[var(--hairline-soft)]">
            <th className="px-5 py-3 text-left text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
              Ukuran
            </th>
            {chart.cols.map((c) => (
              <th
                key={c}
                className="px-2 py-3 text-center font-mono text-[0.8rem] font-semibold tracking-wider text-[var(--gold)]"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {chart.rows.map((row) => (
            <tr
              key={row.label}
              className="border-b border-[var(--hairline-faint)] last:border-0 transition-colors hover:bg-[rgba(var(--gold-rgb),0.04)]"
            >
              <td className="px-5 py-3 text-[var(--silk)]">{row.label}</td>
              {row.values.map((v, i) => (
                <td key={i} className="px-2 py-3 text-center font-mono text-[var(--muted)]">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SizingGuide() {
  const reduce = useReducedMotion();
  return (
    <section id="sizing" className="relative">
      <div aria-hidden className="mx-auto h-px max-w-[1240px] bg-[var(--hairline-soft)]" />

      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 md:py-32">
        <header className="mb-10 max-w-[640px] md:mb-16">
          <p className="flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-[var(--muted)]">
            <Ruler size={15} weight="light" className="text-[var(--gold)]" /> [ Panduan Ukuran ]
          </p>
          <h2 className="mt-4 font-serif text-[clamp(2.1rem,5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            Panduan <span className="italic text-[var(--gold)]">Ukuran</span>
          </h2>
          <p className="mt-5 max-w-[52ch] text-[var(--muted)]">
            Cek ukuranmu sebelum pesan — semua angka dalam sentimeter (cm). Kalau ragu atau
            badanmu di antara ukuran, pilih <span className="text-[var(--silk)]">Custom</span> di
            form pesanan, nanti kami bantu ukur.
          </p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          transition={{ type: "spring", stiffness: 85, damping: 22 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <SizeTable chart={sizeChartBase} />
          <SizeTable chart={sizeChartPants} />
        </motion.div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[var(--hairline)] bg-[var(--surface)] px-5 py-4">
          <Info size={18} weight="light" className="mt-0.5 flex-none text-[var(--gold)]" />
          <p className="text-[0.9rem] text-[var(--muted)]">
            <span className="text-[var(--silk)]">Catatan:</span> untuk rok hanya perlu ukuran
            lingkar pinggang, lingkar panggul, dan panjang rok.
          </p>
        </div>
      </div>
    </section>
  );
}
