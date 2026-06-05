"use client";

import { Phone, Mail, MapPin, Globe } from "lucide-react";
import Reveal from "./Reveal";
import { RevealGroup, RevealItem } from "./RevealGroup";

const ROWS = [
  {
    icon: Phone,
    label: "+7 (964) 704-64-53",
    href: "tel:+79647046453",
  },
  {
    icon: Mail,
    label: "frolov.alexey88@gmail.com",
    href: "mailto:frolov.alexey88@gmail.com",
  },
  { icon: MapPin, label: "Москва · готов к командировкам", href: null },
  { icon: Globe, label: "Английский C1 · опыт международных проектов", href: null },
];

export default function Contact() {
  return (
    <div className="container-x py-[16vh] md:py-[20vh]">
      <Reveal from="bottom">
        <h2 className="font-display text-[clamp(2.4rem,7vw,5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]">
          Давайте <span className="text-gradient">поговорим</span>
        </h2>
      </Reveal>

      <Reveal from="right" delay={0.08}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text/85">
          Нужен человек, который превратит AI из модного слова в работающий
          актив? Напишите — обсудим вашу задачу честно и по делу.
        </p>
      </Reveal>

      <RevealGroup className="mt-12 flex flex-col gap-2" stagger={0.08}>
        {ROWS.map(({ icon: Icon, label, href }) => {
          const inner = (
            <span className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface/60 text-accent-1 transition-colors duration-200 group-hover:text-accent-2">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-display text-xl font-bold tracking-[-0.01em] transition-colors duration-200 md:text-2xl">
                {label}
              </span>
            </span>
          );

          return (
            <RevealItem key={label} from="bottom">
              {href ? (
                <a
                  href={href}
                  className="group block rounded-2xl px-4 py-4 transition-all duration-200 hover:bg-surface/50 hover:[&_.font-display]:text-gradient"
                >
                  {inner}
                </a>
              ) : (
                <div className="group block rounded-2xl px-4 py-4">{inner}</div>
              )}
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal from="bottom" delay={0.1}>
        <p className="mt-12 max-w-2xl text-base leading-relaxed text-muted">
          Открыт к роли{" "}
          <span className="text-text">AI Transformation Director</span> /{" "}
          <span className="text-text">Head of AI Strategy</span>, проектной работе
          и партнёрствам в DeepTech.
        </p>
      </Reveal>

      <Reveal from="bottom" delay={0.16}>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:frolov.alexey88@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Написать на почту
          </a>
          <a
            href="tel:+79647046453"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 font-semibold text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-1"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Позвонить
          </a>
        </div>
      </Reveal>
    </div>
  );
}
