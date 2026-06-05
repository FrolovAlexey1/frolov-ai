"use client";

import type { LucideIcon } from "lucide-react";

export default function SkillCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group h-full rounded-2xl border border-white/10 bg-bg/40 p-6 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-1 hover:bg-bg/55">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-bg/40 text-accent-1 transition-colors duration-200 group-hover:text-accent-2">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="font-display text-lg font-bold tracking-[-0.01em]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
