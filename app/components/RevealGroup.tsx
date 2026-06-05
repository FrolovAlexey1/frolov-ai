"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "left" | "right" | "bottom" | "top";

const OFFSET: Record<Direction, { x?: number; y?: number }> = {
  left: { x: -80 },
  right: { x: 80 },
  bottom: { y: 60 },
  top: { y: -60 },
};

/** Stagger container — wrap multiple <RevealItem> for a cascading reveal. */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  from = "bottom",
  className,
}: {
  children: ReactNode;
  from?: Direction;
  className?: string;
}) {
  const reduce = useReducedMotion();

  const item: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4 } },
      }
    : {
        hidden: { opacity: 0, ...OFFSET[from] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { type: "spring", stiffness: 90, damping: 20, mass: 0.8 },
        },
      };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
