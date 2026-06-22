import { Sun, Moon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Aktifkan tema gelap" : "Aktifkan tema terang"}
      className="relative grid h-[38px] w-[38px] place-items-center overflow-hidden rounded-full border border-[var(--hairline)] text-[var(--gold)] transition-[border-color,transform] duration-300 hover:border-[var(--gold)] hover:-rotate-12 active:scale-95"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute"
        >
          {isLight ? <Moon size={18} weight="light" /> : <Sun size={18} weight="light" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
