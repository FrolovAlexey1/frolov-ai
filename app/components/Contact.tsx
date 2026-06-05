"use client";

import { Phone, Mail, MapPin, Globe } from "lucide-react";
import Reveal from "./Reveal";
import { RevealGroup, RevealItem } from "./RevealGroup";

const ROWS = [
  { icon: Phone, label: "+7 (964) 704-64-53", href: "tel:+79647046453" },
  { icon: Mail, label: "frolov.alexey88@gmail.com", href: "mailto:frolov.alexey88@gmail.com" },
  { icon: MapPin, label: "Москва · готов к командировкам", href: null },
  { icon: Globe, label: "Английский C1 · опыт международных проектов", href: null },
];

/** `bare` = no own container/padding (parent provides the column). */
export default function Contact({ bare = false }: { bare?: boolean }) {
  const body = (
    <>
      <Reveal from="left" blur>
        <h2 className="font-display text-[clamp(2.2rem,6vw,4rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]">
          Давайте <span className="text-gradient">поговорим</span>
        </h2>
      </Reveal>

      <Reveal from="left" delay={0.08}>
        <p className="mt-5 text-lg leading-relaxed text-text/85">
          Нужен человек, который превратит AI из модного слова в работающий актив?
          Напишите — обсудим вашу задачу честно и по делу.
        </p>
      </Reveal>

      <RevealGroup className="mt-9 flex flex-col gap-1.5" stagger={0.08}>
        {ROWS.map(({ icon: Icon, label, href }) => {
          const inner = (
            <span className="flex items-center gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-bg/45 text-accent-1 transition-colors duration-200 group-hover:text-accent-2">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-display text-lg font-bold tracking-[-0.01em] transition-colors duration-200 md:text-xl">
                {label}
              </span>
            </span>
          );
          return (
            <RevealItem key={label} from="left">
              {href ? (
                <a
                  href={href}
                  className="group block rounded-2xl px-3 py-3 transition-all duration-200 hover:bg-bg/40 hover:[&_.font-display]:text-gradient"
                >
                  {inner}
                </a>
              ) : (
                <div className="group block rounded-2xl px-3 py-3">{inner}</div>
              )}
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal from="left" delay={0.1}>
        <p className="mt-8 text-base leading-relaxed text-muted">
          Открыт к роли <span className="text-text">AI Transformation Director</span> /{" "}
          <span className="text-text">Head of AI Strategy</span>, проектной работе и
          партнёрствам в DeepTech.
        </p>
      </Reveal>

      <Reveal from="left" delay={0.16}>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:frolov.alexey88@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Написать на почту
          </a>
          <a
            href="tel:+79647046453"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg/45 px-7 py-3.5 font-semibold text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-1"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Позвонить
          </a>
        </div>
      </Reveal>
    </>
  );

  if (bare) return body;
  return <div className="container-x py-[14vh]">{body}</div>;
}
