import mountainAsset from "@/assets/snow-expo-mountain.png.asset.json";

// TODO: Replace with real partner/sponsor/exhibitor logos and URLs when provided by client.
export type LogoItem = { name: string; src: string; href: string };

const placeholder = (n: number): LogoItem[] =>
  Array.from({ length: n }, (_, i) => ({
    name: `Логотип ${i + 1}`,
    src: mountainAsset.url,
    href: "#",
  }));

export const placeholderRow1 = placeholder(9);
export const placeholderRow2 = placeholder(9);

const CARD_SHADOW =
  "inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,67,105,0.05), 0 18px 40px -16px rgba(0,67,105,0.15), 0 36px 64px -32px rgba(0,67,105,0.18)";

function LogoCard({ logo }: { logo: LogoItem }) {
  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={logo.name}
      className="group mx-3 flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-white/40 bg-white/60 p-5 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.04] sm:h-28 sm:w-52"
      style={{ boxShadow: CARD_SHADOW }}
    >
      <img
        src={logo.src}
        alt={logo.name}
        loading="lazy"
        className="max-h-12 w-auto object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-14"
      />
    </a>
  );
}

export function MarqueeRow({
  logos,
  direction = "left",
  duration = 40,
}: {
  logos: LogoItem[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const doubled = [...logos, ...logos];
  return (
    <div className="group/marquee relative overflow-hidden py-2">
      <div
        className="flex w-max group-hover/marquee:[animation-play-state:paused]"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((logo, i) => (
          <LogoCard key={i} logo={logo} />
        ))}
      </div>
    </div>
  );
}
