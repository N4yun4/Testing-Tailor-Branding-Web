import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks } from "../data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header className="fixed inset-x-0 top-3 z-50 mx-auto w-[calc(100%-2rem)] max-w-[1240px] sm:top-5">
      <motion.div
        animate={{
          backgroundColor: scrolled ? "var(--header-bg-scrolled)" : "var(--header-bg)",
        }}
        transition={{ duration: 0.4 }}
        style={{
          boxShadow: "inset 0 1px 0 var(--glass-inner)",
        }}
        className="rounded-[22px] border border-[var(--hairline)] backdrop-blur-xl backdrop-saturate-150 md:rounded-full"
      >
        <div className="flex items-center justify-between gap-6 px-5 py-[0.7rem] md:pl-7">
          <a
            href="#top"
            className="whitespace-nowrap font-serif text-[1.3rem] font-medium"
            aria-label="Atelier Noctra — beranda"
          >
            Atelier <span className="italic text-[var(--gold)]">Noctra</span>
          </a>

          <nav className="hidden items-center gap-8 text-[0.86rem] md:flex" aria-label="Navigasi utama">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative py-1 text-[var(--muted)] transition-colors duration-300 hover:text-[var(--silk)]"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-300 [transition-timing-function:var(--ease-atelier)] group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-[0.55rem] whitespace-nowrap rounded-full border border-[var(--hairline)] px-[0.9rem] py-[0.45rem] text-[0.68rem] font-medium tracking-[0.12em] lg:flex">
              <span className="h-[6px] w-[6px] flex-none rounded-full bg-[var(--green)] animate-pulse-dot" />
              MENERIMA PESANAN <span className="text-[var(--muted)]">· Yuk pesan</span>
            </div>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Buka/tutup navigasi"
              aria-expanded={open}
              className="grid h-[38px] w-[38px] place-items-center rounded-full border border-[var(--hairline)] text-[var(--silk)] transition-colors hover:border-[var(--gold)] md:hidden"
            >
              {open ? <X size={18} /> : <List size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
              aria-label="Navigasi seluler"
            >
              <div className="mt-1 flex flex-col gap-1 border-t border-[var(--hairline-soft)] px-3 pb-3 pt-3">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-[var(--silk)] transition-colors hover:bg-[var(--obsidian)]"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mt-1 flex items-center gap-[0.55rem] px-3 py-2 text-[0.68rem] font-medium tracking-[0.12em] text-[var(--silk)]">
                  <span className="h-[6px] w-[6px] rounded-full bg-[var(--green)] animate-pulse-dot" />
                  MENERIMA PESANAN <span className="text-[var(--muted)]">· Yuk pesan</span>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
