import { useState } from "react";

// TODO: Replace with confirmed program when provided by client.
type Item = { time: string; title: string; desc?: string };

const day1: Item[] = [
  { time: "10:00 - 10:30", title: "Официално откриване на SNOW EXPO Sofia 2026" },
  { time: "10:30 - 11:30", title: "Лекция: Зимният спорт в България - настояще и бъдеще" },
  { time: "11:30 - 12:30", title: "Демонстрация: Ново оборудване за сезон 2026/27" },
  { time: "13:00 - 14:00", title: "Обедна пауза" },
  { time: "14:00 - 15:00", title: "Панел дискусия: Как да развием зимния туризъм" },
  { time: "15:30 - 16:30", title: "Уъркшоп: Първи стъпки на ски - за начинаещи" },
  { time: "17:00 - 17:30", title: "Закриване на първия ден" },
];

const day2: Item[] = [
  { time: "10:00 - 10:30", title: "Откриване на втория ден" },
  { time: "10:30 - 11:30", title: "Лекция: Безопасност на пистата - съвети от професионалисти" },
  { time: "11:30 - 12:30", title: "Демонстрация: AR технологии в зимните спортове" },
  { time: "13:00 - 14:00", title: "Обедна пауза" },
  { time: "14:00 - 15:30", title: "B2B срещи и нетуъркинг за индустрията" },
  { time: "15:30 - 16:30", title: "Уъркшоп: Физическа подготовка за зимния сезон" },
  { time: "17:00 - 17:30", title: "Официално закриване на SNOW EXPO Sofia 2026" },
];

// Same soft glassmorphism shadow used on Audience cards
const SOFT_SHADOW =
  "inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,67,105,0.05), 0 18px 40px -16px rgba(0,67,105,0.15), 0 36px 64px -32px rgba(0,67,105,0.18)";

export function Program() {
  const [active, setActive] = useState<1 | 2>(1);
  const items = active === 1 ? day1 : day2;

  const tabBase =
    "rounded-full px-5 py-2.5 text-sm font-semibold font-display transition-all sm:px-6 sm:py-3 sm:text-base";
  const tabActive = "text-white";
  const tabIdle =
    "border border-white/40 bg-white/20 text-[color:var(--brand-deep)]/65 backdrop-blur-xl hover:bg-white/30 hover:text-[color:var(--brand-deep)]";

  const activeTabStyle = {
    backgroundImage: "var(--gradient-cta)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.35), 0 10px 28px -14px color-mix(in srgb, var(--brand-coral) 55%, transparent), 0 22px 48px -24px color-mix(in srgb, var(--brand-coral) 40%, transparent)",
  } as const;

  return (
    <section
      id="program"
      aria-labelledby="program-title"
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: "#F4F8FC" }}
    >
      {/* Subtle top-left sky ambient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 -z-10 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--brand-sky) 45%, transparent), transparent 70%)",
        }}
      />




      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-14">
        <div className="mb-10 max-w-3xl md:mb-14">
          <h2
            id="program-title"
            className="font-display text-[1.75rem] font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ color: "var(--brand-deep)" }}
            data-reveal="up"
          >
            Програма на <span className="text-gradient-cta">събитието</span>
          </h2>
          <div
            className="mt-6 hidden h-1.5 w-24 rounded-full bg-gradient-cta md:block"
            data-reveal="up"
            data-reveal-delay="180"
          />
        </div>

        {/* Tabs */}
        <div
          className="mb-8 flex flex-wrap items-center justify-center gap-3"
          data-reveal="up-sm"
          data-reveal-delay="120"
        >
          <button
            type="button"
            onClick={() => setActive(1)}
            className={`${tabBase} ${active === 1 ? tabActive : tabIdle}`}
            aria-pressed={active === 1}
            style={active === 1 ? activeTabStyle : undefined}
          >
            Ден 1 - Събота 31.10
          </button>
          <button
            type="button"
            onClick={() => setActive(2)}
            className={`${tabBase} ${active === 2 ? tabActive : tabIdle}`}
            aria-pressed={active === 2}
            style={active === 2 ? activeTabStyle : undefined}
          >
            Ден 2 - Неделя 01.11
          </button>
        </div>

        {/* Glassmorphism container — exact Audience card treatment */}
        <div
          className="rounded-2xl border border-white/40 bg-white/20 p-3 backdrop-blur-xl sm:p-5"
          style={{ boxShadow: SOFT_SHADOW }}
          data-reveal="up"
          data-reveal-delay="240"
        >
          <ul className="divide-y divide-[color:rgba(0,67,105,0.08)]">
            {items.map((item, i) => {
              const isBreak = item.title.toLowerCase().includes("обедна пауза");
              return (
                <li
                  key={`${active}-${i}`}
                  className="flex flex-col gap-1.5 px-3 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-5 sm:py-5"
                  data-reveal="up-sm"
                  data-reveal-delay={`${Math.min(i * 80, 480)}`}
                >
                  <span
                    className={`shrink-0 font-display text-sm font-bold sm:w-44 sm:text-base ${
                      isBreak ? "italic" : ""
                    }`}
                    style={{
                      color: isBreak
                        ? "color-mix(in srgb, var(--brand-deep) 50%, transparent)"
                        : "#e94b2e",
                    }}
                  >
                    {item.time}
                  </span>
                  <span
                    className={`min-w-0 font-display text-base leading-snug sm:text-lg ${
                      isBreak ? "font-medium italic" : "font-bold"
                    }`}
                    style={{
                      color: isBreak
                        ? "color-mix(in srgb, var(--brand-deep) 55%, transparent)"
                        : "var(--brand-deep)",
                    }}
                  >
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
