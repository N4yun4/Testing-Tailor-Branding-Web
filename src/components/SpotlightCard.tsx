import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

/**
 * Card whose 1px hairline border illuminates under the cursor — a radial
 * gold glow tracked via motion values (no re-renders), layered over the
 * static hairline so the "Hairline Rule" still holds at rest.
 */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const glow = useMotionTemplate`radial-gradient(180px circle at ${mx}px ${my}px, rgba(var(--gold-rgb), 0.55), transparent 70%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <div
      onMouseMove={onMove}
      className={`group relative rounded-2xl border border-[var(--hairline)] bg-[var(--surface)] ${className}`}
    >
      {/* illuminated border layer */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: glow,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      {children}
    </div>
  );
}
