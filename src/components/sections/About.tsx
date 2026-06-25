import { useEffect, useRef, useState } from "react";

type Stat = {
  to: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { to: 10000, suffix: "+", label: "очаквани посетители" },
  { to: 100, suffix: "+", label: "изложители и партньори" },
  { to: 2, suffix: " дни", label: "31.10 - 01.11.2026" },
];

const DURATION = 1600;
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

const formatBG = (n: number) =>
  new Intl.NumberFormat("bg-BG").format(n).replace(/\u00A0/g, " ");

export function About() {
  return (
    <section
      id="about"
      aria-label="ключови данни за snow expo sofia 2026"
      className="relative isolate overflow-hidden text-[color:var(--about-fg)]"
      style={{
        background:
          "radial-gradient(ellipse at 80% 50%, #0a5a8a 0%, #004369 40%, #003355 100%)",
      }}
    >
      {/* Ambient wash — light side accent on the right (matches lecture section feel) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] -z-10 h-[360px] w-[360px] rounded-full bg-[#57c2e5] opacity-[0.28] blur-3xl"
      />


      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
        <div className="rounded-2xl border border-[color:var(--about-card-border)] bg-[color:var(--about-card-bg)] p-4 backdrop-blur-xl shadow-soft sm:p-6">
          <ul className="grid grid-cols-1 divide-y divide-[color:var(--about-divider)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((stat, i) => (
              <StatItem key={i} stat={stat} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLLIElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setValue(stat.to);
      return;
    }

    let raf = 0;
    let start = 0;

    const tick = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start;
      const t = Math.min(elapsed / DURATION, 1);
      setValue(Math.round(stat.to * easeOutQuart(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setValue(stat.to);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            raf = requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [stat.to]);

  return (
    <li
      ref={ref}
      className="flex h-full min-h-[88px] flex-col items-center justify-center gap-1.5 px-3 py-5 text-center sm:min-h-0 sm:px-4 sm:py-2"
    >
      <div className="font-display text-3xl font-black leading-none tracking-tight text-[color:var(--about-fg)] sm:text-4xl lg:text-5xl">
        <span>
          {formatBG(value)}
          {stat.suffix}
        </span>
      </div>
      <div className="font-display text-[11px] font-semibold lowercase tracking-[0.16em] text-[color:var(--about-fg)]/80 sm:text-xs">
        {stat.label}
      </div>
    </li>
  );
}
