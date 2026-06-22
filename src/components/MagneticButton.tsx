import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

const spring = { stiffness: 220, damping: 18, mass: 0.4 };

/**
 * A button/link that physically pulls toward the cursor.
 * Position is driven entirely by motion values (outside the React render
 * cycle) so continuous mouse-move never triggers re-renders.
 */
export function MagneticButton({
  children,
  href,
  variant = "outline",
  className = "",
  strength = 0.4,
  block = false,
  type,
  disabled,
}: {
  children: ReactNode;
  href?: string;
  variant?: "outline" | "solid" | "ghost";
  className?: string;
  strength?: number;
  block?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), spring);
  const y = useSpring(useMotionValue(0), spring);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-[6px] font-medium tracking-[0.08em] text-[0.82rem] px-7 py-[0.95rem] transition-colors duration-300 [transition-timing-function:var(--ease-atelier)] cursor-pointer select-none";
  const variants: Record<string, string> = {
    outline:
      "border border-[var(--gold)] text-[var(--silk)] hover:bg-[var(--gold)] hover:text-[var(--on-gold)]",
    solid:
      "bg-[var(--gold)] border border-[var(--gold)] text-[var(--on-gold)] hover:bg-transparent hover:text-[var(--silk)]",
    ghost:
      "border border-transparent text-[var(--muted)] hover:text-[var(--gold)]",
  };

  const cls = `${base} ${variants[variant]} ${block ? "w-full py-[1.05rem]" : ""} ${
    disabled ? "opacity-60 pointer-events-none" : ""
  } ${className}`;

  const motionProps = {
    style: { x, y },
    onMouseMove: onMove,
    onMouseLeave: reset,
    whileTap: reduce ? undefined : { scale: 0.97 },
    className: cls,
  };

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type={type ?? "button"} disabled={disabled} {...motionProps}>
      {children}
    </motion.button>
  );
}
