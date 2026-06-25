import { Users, Snowflake, Mountain, Briefcase, type LucideIcon } from "lucide-react";

type Card = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const CARDS: Card[] = [
  {
    title: "Семейства с деца",
    description:
      "Забавления, демонстрации и активности за малки и големи на едно място.",
    icon: Users,
  },
  {
    title: "Любители и начинаещи",
    description:
      "Открийте екипировка, съвети и училища, за да направите първите си завои на сняг.",
    icon: Snowflake,
  },
  {
    title: "Активни спортисти и професионалисти",
    description:
      "Срещнете водещи марки, нови технологии и експерти от зимната индустрия.",
    icon: Mountain,
  },
  {
    title: "Бизнес / B2B",
    description:
      "Партньорства, дистрибуция и контакти с цялата зимна екосистема в България.",
    icon: Briefcase,
  },
];

// Kinetic depth stack: staggered vertical offsets create dynamic rhythm
const OFFSET = [
  "lg:mt-0",
  "lg:mt-12",
  "lg:-mt-8",
  "lg:mt-4",
];

export function Audience() {
  return (
    <section
      id="audience"
      aria-labelledby="audience-title"
      className="relative isolate overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #EAF6FC 0%, #F5FAFF 45%, #BFE2F2 75%, #9BD2EA 100%)",
      }}
    >
      {/* Ambient brand washes — layered depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 -z-10 h-[480px] w-[480px] rounded-full blur-3xl animate-ambient-1"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--brand-coral) 22%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-24 -z-10 h-[560px] w-[560px] rounded-full blur-3xl animate-ambient-2"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in srgb, var(--brand-sky) 60%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-14">
        {/* Header — left-aligned for editorial feel */}
        <div className="mb-12 max-w-3xl text-center md:mb-16 md:text-left">
          <h2
            id="audience-title"
            className="font-display text-[1.75rem] font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ color: "var(--brand-deep)" }}
          >
            SNOW EXPO е за всеки,
            <br className="hidden sm:block" /> който обича{" "}
            <span className="text-gradient-cta">зимата</span>
          </h2>
          <div className="mt-6 hidden h-1.5 w-24 rounded-full bg-gradient-cta md:block" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-start lg:gap-7">
          {CARDS.map((card, i) => (
            <AudienceCard key={card.title} card={card} offset={OFFSET[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  card,
  offset,
}: {
  card: Card;
  offset: string;
}) {
  const Icon = card.icon;

  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border border-white/40 bg-white/20 p-7 backdrop-blur-xl transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-2 hover:bg-white/30 sm:p-8 ${offset}`}
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,67,105,0.05), 0 18px 40px -16px rgba(0,67,105,0.15), 0 36px 64px -32px rgba(0,67,105,0.18)",
      }}
    >
      {/* Soft glow behind card on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-2xl opacity-0 blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
        style={{
          background:
            "color-mix(in srgb, var(--brand-coral) 18%, transparent)",
        }}
      />

      <div
        className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-glow-coral transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
        style={{ backgroundImage: "var(--gradient-cta)" }}
      >
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>

      <h3
        className="font-display text-xl font-bold leading-snug sm:text-2xl"
        style={{ color: "var(--brand-deep)" }}
      >
        {card.title}
      </h3>
      <p
        className="mt-3 text-sm leading-relaxed"
        style={{
          color: "color-mix(in srgb, var(--brand-deep) 70%, transparent)",
        }}
      >
        {card.description}
      </p>

      {/* Animated coral→orange underline */}
      <div className="mt-6 h-[3px] w-12 rounded-full bg-gradient-cta transition-all duration-700 group-hover:w-full" />
    </article>
  );
}
