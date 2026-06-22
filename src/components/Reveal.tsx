import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const spring = { type: "spring", stiffness: 90, damping: 20 } as const;

/** Container that orchestrates a staggered waterfall of its <RevealItem> children. */
export function RevealGroup({
  children,
  className,
  delay = 0,
  stagger = 0.09,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "div" | "section" | "ul" | "header";
}) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

/** A single revealing child. Respects prefers-reduced-motion. */
export function RevealItem({
  children,
  className,
  y = 24,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "h1" | "h2" | "h3" | "p" | "span" | "a";
}) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: { opacity: 1, y: 0, transition: spring },
  };
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
