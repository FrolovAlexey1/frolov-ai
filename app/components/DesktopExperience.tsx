"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import ScrollScrubStage from "./ScrollScrubStage";
import Reveal from "./Reveal";
import { RevealGroup, RevealItem } from "./RevealGroup";
import MetricCounter from "./MetricCounter";
import SkillCard from "./SkillCard";
import Marquee from "./Marquee";
import Contact from "./Contact";
import { TRUST, METRICS, AWARDS, SKILLS, TECH } from "../content";

/** A full-height beat with a narrow text column pinned to one side and a
 *  directional scrim darkening only that side (the subject stays visible). */
function Beat({
  side,
  ariaLabel,
  children,
}: {
  side: "left" | "right";
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-label={ariaLabel}
      className="relative flex min-h-dvh items-center py-[12vh]"
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          side === "left"
            ? "bg-gradient-to-r from-bg via-bg/45 to-transparent"
            : "bg-gradient-to-l from-bg via-bg/45 to-transparent"
        }`}
      />
      <div className="container-x relative w-full">
        <div className={`max-w-xl ${side === "right" ? "ml-auto" : ""}`}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function DesktopExperience() {
  const reduce = useReducedMotion();

  return (
    <main className="relative">
      <ScrollScrubStage />

      <div className="relative z-10">
        {/* ── HERO ───────────────────────────────────────────── */}
        <section
          aria-label="Алексей Фролов — вступление"
          className="flex min-h-dvh flex-col items-center justify-center px-6 text-center"
        >
          <motion.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-display text-[clamp(2.6rem,7vw,6rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]"
          >
            Алексей Фролов
          </motion.h1>
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 36, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="mt-6 max-w-2xl text-balance text-lg text-text/90 md:text-2xl"
          >
            Строю AI там, где он реально меняет бизнес — от стратегии до{" "}
            <span className="text-gradient font-semibold">работающего кода</span>.
          </motion.p>
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="mt-8 text-sm uppercase tracking-[0.18em] text-muted md:text-base"
          >
            AI Transformation Director · DeepTech-предприниматель · 15+ лет
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={reduce ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-muted"
            >
              <span className="text-xs uppercase tracking-[0.2em]">Листайте</span>
              <ChevronDown className="h-5 w-5" aria-hidden />
            </motion.div>
          </motion.div>
        </section>

        {/* ── 2 · КТО Я (text left / subject right) ───────────── */}
        <Beat side="left" ariaLabel="Чем я занимаюсь">
          <Reveal from="left" blur>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]">
              Не презентую AI. <span className="text-gradient">Внедряю.</span>
            </h2>
          </Reveal>
          <Reveal from="left" delay={0.08}>
            <p className="mt-6 text-lg leading-relaxed text-text/90">
              Я помогаю компаниям пройти AI-трансформацию по-настоящему — не
              слайдами, а продуктами, которые работают и приносят деньги.
            </p>
          </Reveal>
          <RevealGroup className="mt-9 grid gap-5" stagger={0.12}>
            <RevealItem from="left">
              <article className="rounded-2xl border border-white/10 bg-bg/45 p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-1">
                <h3 className="font-display text-xl font-bold tracking-[-0.01em]">BiometricLabs</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.12em] text-accent-2">DeepTech-стартап · Industrial AI</p>
                <p className="mt-3 leading-relaxed text-text/75">
                  Сооснователь. Диагностика и мониторинг промышленной инфраструктуры.
                  5 продуктов от идеи до рынка, 2 — в реальной эксплуатации. Клиенты:
                  Норникель, Северсталь, НЛМК, ИнтерРАО. Привлёк{" "}
                  <span className="text-text">$1M+</span> инвестиций.
                </p>
              </article>
            </RevealItem>
            <RevealItem from="left">
              <article className="rounded-2xl border border-white/10 bg-bg/45 p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-1">
                <h3 className="font-display text-xl font-bold tracking-[-0.01em]">Ассоциация лабораторий по развитию ИИ</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.12em] text-accent-2">Сооснователь · председатель совета</p>
                <p className="mt-3 leading-relaxed text-text/75">
                  Объединил <span className="text-text">200+</span> AI-компаний и
                  команд. Реализовано <span className="text-text">40+</span> проектов
                  AI-трансформации.
                </p>
              </article>
            </RevealItem>
          </RevealGroup>
          <Reveal from="left" delay={0.1}>
            <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
              {TRUST.map((name, i) => (
                <span key={name} className="flex items-center gap-3">
                  {i > 0 && <span className="text-white/20">·</span>}
                  {name}
                </span>
              ))}
            </p>
          </Reveal>
        </Beat>

        {/* ── 3 · РЕЗУЛЬТАТЫ (text left / subject right) ──────── */}
        <Beat side="left" ariaLabel="Результаты">
          <Reveal from="left" blur>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]">
              Результаты, <span className="text-gradient">а не обещания</span>
            </h2>
          </Reveal>
          <RevealGroup className="mt-9 grid grid-cols-2 gap-x-8 gap-y-8" stagger={0.1}>
            {METRICS.map((m) => (
              <RevealItem key={m.label} from="bottom">
                <MetricCounter value={m.value} prefix={m.prefix} suffix={m.suffix} label={m.label} />
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal from="left" delay={0.08}>
            <p className="mt-9 leading-relaxed text-text/85">
              В BiometricLabs вывел 5 продуктов на рынок и продал AI-решения
              крупнейшим промышленным игрокам страны. Дошёл до международных рынков —
              Франция, Германия, Швейцария, США.
            </p>
          </Reveal>
          <RevealGroup className="mt-6 flex flex-wrap gap-3" stagger={0.08}>
            {AWARDS.map((a) => (
              <RevealItem key={a} from="bottom">
                <span className="inline-block rounded-full border border-white/10 bg-bg/45 px-4 py-2 text-sm text-text/85 backdrop-blur-sm">{a}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Beat>

        {/* ── 4 · НАВЫКИ (text RIGHT / subject left) ──────────── */}
        <Beat side="right" ariaLabel="Навыки и технологии">
          <Reveal from="right" blur>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]">
              Я сам пишу <span className="text-gradient">то, о чём говорю</span>
            </h2>
          </Reveal>
          <Reveal from="right" delay={0.08}>
            <p className="mt-5 leading-relaxed text-text/85">
              Большинство директоров по AI заканчиваются на красивой презентации. Я
              начинаюсь там же, но иду до рабочего прототипа.
            </p>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.09}>
            {SKILLS.map((s) => (
              <RevealItem key={s.title} from="right" className="h-full">
                <SkillCard icon={s.icon} title={s.title} description={s.description} />
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal from="right" delay={0.06}>
            <p className="mt-8 text-balance font-display text-lg font-bold leading-snug tracking-[-0.01em] md:text-xl">
              Когда я обещаю результат — я знаю, как он устроен изнутри{" "}
              <span className="text-gradient">и сколько реально стоит.</span>
            </p>
          </Reveal>
        </Beat>

        {/* tech marquee — full width band */}
        <div className="relative z-10 -mt-[6vh] mb-[6vh]">
          <Marquee items={TECH} />
        </div>

        {/* ── 5 · КОНТАКТЫ (text left / subject right) ────────── */}
        <section aria-label="Контакты" className="relative flex min-h-dvh items-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/45 to-transparent" />
          <div className="relative w-full">
            <div className="container-x">
              <div className="max-w-xl">
                <Contact bare />
              </div>
            </div>
          </div>
        </section>

        <footer className="relative border-t border-white/10 py-10">
          <div className="container-x flex flex-col items-center justify-between gap-2 text-sm text-muted md:flex-row">
            <span>© 2026 Алексей Фролов</span>
            <span>AI Transformation Director · DeepTech</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
