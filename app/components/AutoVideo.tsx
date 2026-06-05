"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Autoplaying, muted, looping, playsInline video — the iOS-reliable way to show
 * motion (unlike scroll-scrubbing currentTime, which iOS Safari won't repaint).
 * Loads + plays only while near the viewport; pauses when off-screen.
 */
export default function AutoVideo({
  src,
  className = "",
  objectPosition = "50% 50%",
}: {
  src: string;
  className?: string;
  objectPosition?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        setActive(e.isIntersecting);
        if (e.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { rootMargin: "250px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={active ? src : undefined}
      muted
      loop
      autoPlay
      playsInline
      preload="none"
      aria-hidden
      style={{ objectPosition }}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
