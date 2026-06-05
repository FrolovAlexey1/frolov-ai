"use client";

import { useEffect, useState } from "react";

/**
 * Returns true on phones (<768px), false on larger screens, and null until the
 * component has mounted (so SSR can render the desktop tree by default).
 */
export default function useIsMobile(): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}
