"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Persistent, full-viewport video backdrop.
 *
 * The four clips are treated as ONE continuous timeline. Overall page-scroll
 * progress (0→1) maps to a virtual playhead that travels through clip 1, then
 * 2, 3, 4 — so the subject is always on screen and changes continuously from
 * the top of the page to the bottom. Adjacent clips crossfade at the seams.
 *
 * The playhead is lerp-smoothed so it glides instead of snapping frame-to-frame.
 */
// basePath isn't auto-applied to plain string media URLs, so prefix manually.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const CLIPS = [
  `${BASE}/hero.mp4`,
  `${BASE}/section-results.mp4`,
  `${BASE}/section-skills.mp4`,
  `${BASE}/section-contact.mp4`,
];
const LERP = 0.18;
const FADE = 0.45; // seconds of crossfade around each clip boundary

export default function ScrollScrubStage() {
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const durations = useRef<number[]>(CLIPS.map(() => 0));
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reduce) {
      // Calm fallback: gently loop the first clip, no scrubbing.
      const v = videos.current[0];
      if (v) {
        v.loop = true;
        v.play().catch(() => {});
      }
      setShown(true);
      return;
    }

    let raf = 0;
    let maxScroll = 1;
    let started = false;
    let curObjX = 50; // current subject framing (horizontal %), lerped
    const current = CLIPS.map(() => 0);

    // Push the subject to the side OPPOSITE the text column per scroll band:
    // hero centre, about/results/contact → right (text left); skills → left
    // (text right). Anchors at p = 0 / .25 / .5 / .75 / 1.
    const OBJ_ANCHORS = [50, 72, 80, 22, 70];
    const subjectX = (p: number) => {
      const seg = Math.min(OBJ_ANCHORS.length - 2, Math.max(0, Math.floor(p * 4)));
      const f = p * 4 - seg;
      return OBJ_ANCHORS[seg] + (OBJ_ANCHORS[seg + 1] - OBJ_ANCHORS[seg]) * f;
    };

    const totalDur = () => durations.current.reduce((a, b) => a + b, 0);

    const updateBounds = () => {
      maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
    };

    const tick = () => {
      const total = totalDur();
      if (total > 0) {
        const p = Math.min(1, Math.max(0, window.scrollY / maxScroll));
        const T = p * total;

        // glide the subject framing toward the current band's target
        curObjX += (subjectX(p) - curObjX) * 0.06;

        // cumulative end time of each clip
        const ends: number[] = [];
        let acc = 0;
        for (let i = 0; i < CLIPS.length; i++) {
          acc += durations.current[i] || 0;
          ends.push(acc);
        }

        // which clip currently owns the playhead
        let owner = CLIPS.length - 1;
        for (let i = 0; i < CLIPS.length; i++) {
          if (T < ends[i]) {
            owner = i;
            break;
          }
        }

        const ops: number[] = CLIPS.map((_, i) => (i === owner ? 1 : 0));
        // crossfade across internal seams
        for (let b = 0; b < CLIPS.length - 1; b++) {
          const d = T - ends[b];
          if (d > -FADE && d < FADE) {
            const f = (d + FADE) / (2 * FADE);
            ops[b] = 1 - f;
            ops[b + 1] = f;
          }
        }

        let start = 0;
        for (let i = 0; i < CLIPS.length; i++) {
          const dur = durations.current[i] || 0;
          const local = Math.min(dur, Math.max(0, T - start));
          start += dur;

          const v = videos.current[i];
          if (!v) continue;
          v.style.opacity = ops[i].toFixed(3);
          v.style.objectPosition = `${curObjX.toFixed(1)}% 50%`;
          if (ops[i] > 0.001 && dur > 0) {
            current[i] += (local - current[i]) * LERP;
            if (Math.abs(v.currentTime - current[i]) > 0.01) {
              try {
                v.currentTime = current[i];
              } catch {
                /* not seekable yet */
              }
            }
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const onMeta = () => {
      videos.current.forEach((v, i) => {
        if (v && Number.isFinite(v.duration)) durations.current[i] = v.duration;
      });
      updateBounds();
      if (!started && (durations.current[0] || 0) > 0) {
        started = true;
        setShown(true);
      }
    };

    videos.current.forEach((v) => {
      if (!v) return;
      if (v.readyState >= 1) onMeta();
      else v.addEventListener("loadedmetadata", onMeta);
    });

    updateBounds();
    window.addEventListener("resize", updateBounds);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateBounds);
      videos.current.forEach(
        (v) => v && v.removeEventListener("loadedmetadata", onMeta)
      );
    };
  }, [reduce]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-bg">
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: shown ? 1 : 0 }}
      >
        {CLIPS.map((src, i) => (
          <video
            key={src}
            ref={(el) => {
              videos.current[i] = el;
            }}
            src={src}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: i === 0 ? 1 : 0 }}
            aria-hidden
          />
        ))}
      </div>

      {/* Light global base only — each section adds its own directional scrim on
          the text side (see DesktopExperience), so the subject stays visible. */}
      <div className="absolute inset-0 bg-bg/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-bg/35" />

      {/* soft accent glow */}
      <div
        className="pointer-events-none absolute -right-[10%] top-1/4 hidden h-[60vh] w-[60vh] rounded-full md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(91,141,239,0.10), transparent 70%)",
        }}
      />
    </div>
  );
}
