"use client";

export default function Marquee({ items }: { items: string[] }) {
  // duplicate the list so the -50% translate loops seamlessly
  const doubled = [...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden py-6"
      role="presentation"
      aria-hidden
    >
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

      <div className="marquee-track flex w-max items-center gap-4">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-border bg-surface/60 px-5 py-2 text-sm font-medium text-text/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
