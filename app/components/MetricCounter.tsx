"use client";

import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useReducedMotion,
  animate as fmAnimate,
} from "framer-motion";

/**
 * Animated count-up metric. `value` is the numeric target; `prefix`/`suffix`
 * frame it (e.g. "+", " млрд ₽"). Counts up once when scrolled into view.
 */
export default function MetricCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView || done) return;
    const node = numRef.current;
    if (!node) return;

    if (reduce) {
      node.textContent = value.toFixed(decimals);
      setDone(true);
      return;
    }

    const controls = fmAnimate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        node.textContent = latest.toLocaleString("ru-RU", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      },
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
  }, [inView, value, decimals, reduce, done]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="whitespace-nowrap font-display text-[clamp(2rem,3vw,3rem)] font-extrabold leading-none tracking-[-0.02em] text-accent-3">
        {prefix}
        <span ref={numRef}>0</span>
        {suffix}
      </div>
      <p className="mt-3 text-sm leading-snug text-text/85 md:text-base">
        {label}
      </p>
    </div>
  );
}
