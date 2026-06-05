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

export default function Reveal({
  children,
  from = "bottom",
  delay = 0,
  blur = false,
  className,
  as = "div",
}: {
  children: ReactNode;
  from?: Direction;
  delay?: number;
  blur?: boolean;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4, delay } },
      }
    : {
        hidden: {
          opacity: 0,
          ...OFFSET[from],
          ...(blur ? { filter: "blur(10px)" } : {}),
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          ...(blur ? { filter: "blur(0px)" } : {}),
          transition: {
            type: "spring",
            stiffness: 90,
            damping: 20,
            mass: 0.8,
            delay,
          },
        },
      };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
