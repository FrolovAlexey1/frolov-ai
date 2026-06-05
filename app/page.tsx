"use client";

import {
  Network,
  Database,
  Plug,
  Bot,
  Server,
  Workflow,
  ChevronDown,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import ScrollProgress from "./components/ScrollProgress";
import ScrollScrubStage from "./components/ScrollScrubStage";
import Reveal from "./components/Reveal";
import { RevealGroup, RevealItem } from "./components/RevealGroup";
import MetricCounter from "./components/MetricCounter";
import SkillCard from "./components/SkillCard";
import Marquee from "./components/Marquee";
import Contact from "./components/Contact";

const TRUST = [
  "Ростелеком",
  "Газпромбанк",
  "РЖД-Медицина",
  "РВК",
  "Яндекс",
  "Сбер",
  "Ozon",
];

const METRICS = [
  {
    value: 1,
    prefix: "+",
    suffix: " млрд ₽",
    label: "выручки за год — портфель цифровых продуктов в Ростелекоме (рентабельность >40%)",
  },
  { value: 7, label: "стратегий новых технологических рынков" },
  {
    value: 3,
    label: "закрытых сделки M&A — одна за рекордные 3 месяца, самая быстрая в истории подразделения",
  },
  { value: 50, prefix: "$", suffix: "M+", label: "объём венчурных фондов под управлением" },
  { value: 3, suffix: " млрд ₽", label: "активов в управлении (портфель техкомпаний)" },
  { value: 40, suffix: "+", label: "проектов AI-трансформации" },
];

const AWARDS = [
  "1 место · Российско-Китайский конкурс инноваций",
  "Суперфиналист · GreenTech Startup Booster",
  "Победитель · Kryptonite Startup Challenge",
];

const SKILLS = [
  {
    icon: Network,
    title: "Мультиагентные системы",
    description: "Оркестрация агентов, агентные интерфейсы.",
  },
  {
    icon: Database,
    title: "RAG и локальный inference",
    description: "Открытые модели: Gemma, DeepSeek, LLaMA.",
  },
  {
    icon: Plug,
    title: "MCP-интеграции",
    description: "Подключение к корпоративным системам, в т.ч. 1С.",
  },
  {
    icon: Bot,
    title: "AI-ассистенты и Telegram-боты",
    description: "Как агентные интерфейсы для бизнес-процессов.",
  },
  {
    icon: Server,
    title: "Веб и бэкенд",
    description: "FastAPI, Streamlit, React, свои VPS, GitHub.",
  },
  {
    icon: Workflow,
    title: "Автоматизация",
    description: "LangChain, n8n, оркестрация процессов.",
  },
];

const TECH = [
  "Claude", "GPT", "LangChain", "n8n", "Python", "Matlab", "C++",
  "RAG", "MCP", "Multi-agent", "LLM", "FastAPI", "React", "GitHub",
];

const PANEL =
  "rounded-3xl border border-white/10 bg-bg/35 p-7 backdrop-blur-md md:p-10";

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <>
      <ScrollProgress />
      {/* persistent, continuously-scrubbed video backdrop */}
      <ScrollScrubStage />

      <main className="relative z-10">
        {/* ── БИТ 1 — HERO ─────────────────────────────────────────── */}
        <section
          aria-label="Алексей Фролов — вступление"
          className="flex min-h-dvh flex-col items-center justify-center px-6 text-center"
        >
          <motion.h1
            initial={
              reduce ? { opacity: 0 } : { opacity: 0, y: 40, filter: "blur(10px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-display text-[clamp(2.6rem,7vw,6rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]"
          >
            Алексей Фролов
          </motion.h1>

          <motion.p
            initial={
              reduce ? { opacity: 0 } : { opacity: 0, y: 36, filter: "blur(10px)" }
            }
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

        {/* ── БИТ 2 — КТО Я / ЧЕМ ЗАНИМАЮСЬ ───────────────────────── */}
        <section
          aria-label="Чем я занимаюсь"
          className="flex min-h-dvh items-center py-[12vh]"
        >
          <div className="container-x w-full">
            <div className="max-w-2xl">
              <Reveal from="left" blur>
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]">
                  Не презентую AI.{" "}
                  <span className="text-gradient">Внедряю.</span>
                </h2>
              </Reveal>
              <Reveal from="right" delay={0.08}>
                <p className="mt-6 text-lg leading-relaxed text-text/90">
                  Я помогаю компаниям пройти AI-трансформацию по-настоящему — не
                  слайдами, а продуктами, которые работают и приносят деньги.
                </p>
              </Reveal>

              <RevealGroup className="mt-10 grid gap-5" stagger={0.12}>
                <RevealItem from="bottom">
                  <article className="rounded-2xl border border-white/10 bg-bg/40 p-7 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-1">
                    <h3 className="font-display text-xl font-bold tracking-[-0.01em]">
                      BiometricLabs
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.12em] text-accent-2">
                      DeepTech-стартап · Industrial AI
                    </p>
                    <p className="mt-4 leading-relaxed text-text/75">
                      Сооснователь. Диагностика и мониторинг промышленной
                      инфраструктуры. 5 продуктов от идеи до рынка, 2 — в реальной
                      эксплуатации. Клиенты: Норникель, Северсталь, НЛМК, ИнтерРАО.
                      Привлёк <span className="text-text">$1M+</span> инвестиций.
                    </p>
                  </article>
                </RevealItem>

                <RevealItem from="bottom">
                  <article className="rounded-2xl border border-white/10 bg-bg/40 p-7 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-1">
                    <h3 className="font-display text-xl font-bold tracking-[-0.01em]">
                      Ассоциация лабораторий по развитию ИИ
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.12em] text-accent-2">
                      Сооснователь · председатель совета
                    </p>
                    <p className="mt-4 leading-relaxed text-text/75">
                      Объединил <span className="text-text">200+</span> AI-компаний
                      и команд. Реализовано <span className="text-text">40+</span>{" "}
                      проектов AI-трансформации.
                    </p>
                  </article>
                </RevealItem>
              </RevealGroup>

              <Reveal from="bottom" delay={0.1}>
                <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
                  {TRUST.map((name, i) => (
                    <span key={name} className="flex items-center gap-3">
                      {i > 0 && <span className="text-white/20">·</span>}
                      {name}
                    </span>
                  ))}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── БИТ 3 — РЕЗУЛЬТАТЫ ──────────────────────────────────── */}
        <section
          aria-label="Результаты"
          className="flex min-h-dvh items-center py-[12vh]"
        >
          <div className="container-x w-full">
            <Reveal from="bottom" className={`max-w-4xl ${PANEL}`}>
              <Reveal from="left" blur as="div">
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]">
                  Результаты,{" "}
                  <span className="text-gradient">а не обещания</span>
                </h2>
              </Reveal>

              <RevealGroup
                className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2"
                stagger={0.1}
              >
                {METRICS.map((m) => (
                  <RevealItem key={m.label} from="bottom">
                    <MetricCounter
                      value={m.value}
                      prefix={m.prefix}
                      suffix={m.suffix}
                      label={m.label}
                    />
                  </RevealItem>
                ))}
              </RevealGroup>

              <Reveal from="right" delay={0.08}>
                <p className="mt-10 max-w-2xl leading-relaxed text-text/85">
                  В BiometricLabs вывел 5 продуктов на рынок и продал AI-решения
                  крупнейшим промышленным игрокам страны. Дошёл до международных
                  рынков — Франция, Германия, Швейцария, США.
                </p>
              </Reveal>

              <RevealGroup className="mt-7 flex flex-wrap gap-3" stagger={0.08}>
                {AWARDS.map((a) => (
                  <RevealItem key={a} from="bottom">
                    <span className="inline-block rounded-full border border-white/10 bg-bg/40 px-5 py-2 text-sm text-text/85">
                      {a}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Reveal>
          </div>
        </section>

        {/* ── БИТ 4 — НАВЫКИ / ТЕХНОЛОГИИ ─────────────────────────── */}
        <section
          aria-label="Навыки и технологии"
          className="flex min-h-dvh flex-col justify-center py-[12vh]"
        >
          <div className="container-x w-full">
            <Reveal from="bottom" className={`max-w-4xl ${PANEL}`}>
              <Reveal from="left" blur as="div">
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]">
                  Я сам пишу{" "}
                  <span className="text-gradient">то, о чём говорю</span>
                </h2>
              </Reveal>
              <Reveal from="right" delay={0.08}>
                <p className="mt-5 max-w-2xl leading-relaxed text-text/85">
                  Большинство директоров по AI заканчиваются на красивой
                  презентации. Я начинаюсь там же, но иду до рабочего прототипа.
                </p>
              </Reveal>

              <RevealGroup
                className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                stagger={0.09}
              >
                {SKILLS.map((s) => (
                  <RevealItem key={s.title} from="bottom" className="h-full">
                    <SkillCard
                      icon={s.icon}
                      title={s.title}
                      description={s.description}
                    />
                  </RevealItem>
                ))}
              </RevealGroup>

              <Reveal from="bottom" delay={0.06}>
                <p className="mt-9 max-w-3xl text-balance font-display text-lg font-bold leading-snug tracking-[-0.01em] md:text-2xl">
                  Когда я обещаю результат — я знаю, как он устроен изнутри{" "}
                  <span className="text-gradient">и сколько реально стоит.</span>
                </p>
              </Reveal>
            </Reveal>
          </div>

          <div className="mt-10">
            <Marquee items={TECH} />
          </div>
        </section>

        {/* ── БИТ 5 — КОНТАКТЫ ────────────────────────────────────── */}
        <section
          aria-label="Контакты"
          className="flex min-h-dvh items-center"
        >
          <Contact />
        </section>

        <footer className="relative border-t border-white/10 py-10">
          <div className="container-x flex flex-col items-center justify-between gap-2 text-sm text-muted md:flex-row">
            <span>© 2026 Алексей Фролов</span>
            <span>AI Transformation Director · DeepTech</span>
          </div>
        </footer>
      </main>
    </>
  );
}
