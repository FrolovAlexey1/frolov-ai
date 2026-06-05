"use client";

import { ChevronDown } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import AutoVideo from "./AutoVideo";
import Reveal from "./Reveal";
import { RevealGroup, RevealItem } from "./RevealGroup";
import MetricCounter from "./MetricCounter";
import SkillCard from "./SkillCard";
import Marquee from "./Marquee";
import Contact from "./Contact";
import { CLIPS, TRUST, METRICS, AWARDS, SKILLS, TECH } from "../content";

/** A framed, autoplaying video card used between text blocks (no overlap). */
function VideoCard({
  src,
  position = "50% 40%",
}: {
  src: string;
  position?: string;
}) {
  return (
    <Reveal from="bottom">
      <div className="relative mt-7 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
        <AutoVideo src={src} objectPosition={position} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
      </div>
    </Reveal>
  );
}

export default function MobileExperience() {
  return (
    <main className="relative bg-bg">
      {/* ── HERO — ContainerScroll 3D reveal of the live video ───── */}
      <ContainerScroll
        titleComponent={
          <div className="px-4">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              AI Transformation Director · DeepTech · 15+ лет
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.4rem,12vw,3.6rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]">
              Алексей Фролов
            </h1>
            <p className="mx-auto mt-3 max-w-md text-balance text-base text-text/85">
              Строю AI там, где он реально меняет бизнес — до{" "}
              <span className="text-gradient font-semibold">работающего кода</span>.
            </p>
          </div>
        }
      >
        <AutoVideo src={CLIPS.hero} objectPosition="50% 25%" />
      </ContainerScroll>

      <div className="-mt-24 flex justify-center pb-6 text-muted">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-[0.2em]">Листайте</span>
          <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden />
        </div>
      </div>

      {/* ── 2 · КТО Я ───────────────────────────────────────────── */}
      <section aria-label="Чем я занимаюсь" className="px-5 py-12">
        <Reveal from="left" blur>
          <h2 className="font-display text-[clamp(1.9rem,8vw,2.6rem)] font-extrabold uppercase leading-[1.04] tracking-[-0.02em]">
            Не презентую AI. <span className="text-gradient">Внедряю.</span>
          </h2>
        </Reveal>
        <Reveal from="right" delay={0.06}>
          <p className="mt-4 text-base leading-relaxed text-text/85">
            Я помогаю компаниям пройти AI-трансформацию по-настоящему — не слайдами, а
            продуктами, которые работают и приносят деньги.
          </p>
        </Reveal>

        <VideoCard src={CLIPS.hero} position="50% 30%" />

        <RevealGroup className="mt-7 grid gap-4" stagger={0.1}>
          <RevealItem from="left">
            <article className="rounded-2xl border border-white/10 bg-surface/60 p-5">
              <h3 className="font-display text-lg font-bold">BiometricLabs</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-accent-2">DeepTech-стартап · Industrial AI</p>
              <p className="mt-3 text-sm leading-relaxed text-text/75">
                Сооснователь. Диагностика и мониторинг промышленной инфраструктуры. 5
                продуктов от идеи до рынка, 2 — в эксплуатации. Клиенты: Норникель,
                Северсталь, НЛМК, ИнтерРАО. Привлёк <span className="text-text">$1M+</span>.
              </p>
            </article>
          </RevealItem>
          <RevealItem from="right">
            <article className="rounded-2xl border border-white/10 bg-surface/60 p-5">
              <h3 className="font-display text-lg font-bold">Ассоциация лабораторий по развитию ИИ</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-accent-2">Сооснователь · председатель совета</p>
              <p className="mt-3 text-sm leading-relaxed text-text/75">
                Объединил <span className="text-text">200+</span> AI-компаний и команд.
                Реализовано <span className="text-text">40+</span> проектов AI-трансформации.
              </p>
            </article>
          </RevealItem>
        </RevealGroup>

        <Reveal from="bottom" delay={0.08}>
          <p className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
            {TRUST.map((n, i) => (
              <span key={n} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/20">·</span>}
                {n}
              </span>
            ))}
          </p>
        </Reveal>
      </section>

      {/* ── 3 · РЕЗУЛЬТАТЫ ──────────────────────────────────────── */}
      <section aria-label="Результаты" className="px-5 py-12">
        <Reveal from="left" blur>
          <h2 className="font-display text-[clamp(1.9rem,8vw,2.6rem)] font-extrabold uppercase leading-[1.04] tracking-[-0.02em]">
            Результаты, <span className="text-gradient">а не обещания</span>
          </h2>
        </Reveal>

        <VideoCard src={CLIPS.results} position="50% 40%" />

        <RevealGroup className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7" stagger={0.08}>
          {METRICS.map((m) => (
            <RevealItem key={m.label} from="bottom">
              <MetricCounter value={m.value} prefix={m.prefix} suffix={m.suffix} label={m.label} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal from="right" delay={0.06}>
          <p className="mt-8 text-sm leading-relaxed text-text/85">
            В BiometricLabs вывел 5 продуктов на рынок и продал AI-решения крупнейшим
            промышленным игрокам страны. Дошёл до международных рынков — Франция,
            Германия, Швейцария, США.
          </p>
        </Reveal>
        <RevealGroup className="mt-5 flex flex-wrap gap-2" stagger={0.07}>
          {AWARDS.map((a) => (
            <RevealItem key={a} from="bottom">
              <span className="inline-block rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-xs text-text/85">{a}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ── 4 · НАВЫКИ ──────────────────────────────────────────── */}
      <section aria-label="Навыки и технологии" className="px-5 py-12">
        <Reveal from="right" blur>
          <h2 className="font-display text-[clamp(1.9rem,8vw,2.6rem)] font-extrabold uppercase leading-[1.04] tracking-[-0.02em]">
            Я сам пишу <span className="text-gradient">то, о чём говорю</span>
          </h2>
        </Reveal>
        <Reveal from="left" delay={0.06}>
          <p className="mt-4 text-base leading-relaxed text-text/85">
            Большинство директоров по AI заканчиваются на красивой презентации. Я
            начинаюсь там же, но иду до рабочего прототипа.
          </p>
        </Reveal>

        <VideoCard src={CLIPS.skills} position="50% 30%" />

        <RevealGroup className="mt-7 grid gap-3" stagger={0.08}>
          {SKILLS.map((s, i) => (
            <RevealItem key={s.title} from={i % 2 ? "right" : "left"} className="h-full">
              <SkillCard icon={s.icon} title={s.title} description={s.description} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal from="bottom" delay={0.06}>
          <p className="mt-7 text-balance font-display text-lg font-bold leading-snug">
            Когда я обещаю результат — я знаю, как он устроен изнутри{" "}
            <span className="text-gradient">и сколько реально стоит.</span>
          </p>
        </Reveal>
      </section>

      <div className="py-2">
        <Marquee items={TECH} />
      </div>

      {/* ── 5 · КОНТАКТЫ ────────────────────────────────────────── */}
      <section aria-label="Контакты" className="px-5 py-12">
        <VideoCard src={CLIPS.contact} position="50% 35%" />
        <div className="mt-8">
          <Contact bare />
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-muted">
        <p>© 2026 Алексей Фролов</p>
        <p className="mt-1">AI Transformation Director · DeepTech</p>
      </footer>
    </main>
  );
}
