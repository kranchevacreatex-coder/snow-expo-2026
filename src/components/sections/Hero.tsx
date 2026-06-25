import { useEffect, useRef } from "react";
import { Calendar, MapPin, Sparkles, Ticket } from "lucide-react";
import heroPhoto from "@/assets/hero-snowboarder.jpg.asset.json";

export function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const photoRef = useRef<HTMLImageElement | null>(null);

  // Above-the-fold mount entrance: flip all internal [data-reveal] elements
  // to revealed on the next frame so the global IntersectionObserver does not
  // race with the Hero timeline.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const raf = requestAnimationFrame(() => {
      targets.forEach((el) => {
        const delay = Number(el.dataset.revealDelay ?? "0");
        if (delay > 0) {
          window.setTimeout(() => el.setAttribute("data-revealed", "true"), delay);
        } else {
          el.setAttribute("data-revealed", "true");
        }
      });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Subtle parallax on the background photo. Disabled on small viewports and
  // when the user prefers reduced motion.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const img = photoRef.current;
    if (!img) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tooSmall = window.matchMedia("(max-width: 767px)").matches;
    if (reduced || tooSmall) return;

    let frame = 0;
    let latest = window.scrollY;

    const apply = () => {
      frame = 0;
      const y = latest * 0.15;
      img.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
    };

    const onScroll = () => {
      latest = window.scrollY;
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    // Set initial transform so the base scale is in place.
    img.style.transform = "translate3d(0, 0, 0) scale(1.08)";
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      img.style.transform = "";
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="hero"
      aria-labelledby="hero-title"
      className="relative bg-white"
    >
      {/* Full-bleed photo */}
      <div className="relative isolate overflow-hidden shadow-soft">
        {/* Background image */}
        <img
          ref={photoRef}
          src={heroPhoto.url}
          alt="Сноубордист в скок над заснежен планински връх"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] saturate-[1.35] contrast-[1.08] will-change-transform"
          fetchPriority="high"
        />

        {/* Brand tint + readability gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(100deg, rgba(0,67,105,0.78) 0%, rgba(0,67,105,0.55) 35%, rgba(0,67,105,0.20) 60%, rgba(87,194,229,0.05) 100%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-between px-5 pt-12 pb-8 sm:px-10 sm:pt-20 sm:pb-10 lg:min-h-[640px] lg:px-14 lg:pt-24 lg:pb-12">
          {/* Top: text block */}
          <div className="flex max-w-2xl flex-col gap-6">
            <span
              data-reveal="up-sm"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:px-4 sm:text-[11px]"
            >
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-orange)]" />
              Първото национално зимно събитие в България
            </span>

            <h1
              id="hero-title"
              className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,67,105,0.45)] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-reveal="clip" data-reveal-delay="150" className="block">
                  Домът на
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-reveal="clip" data-reveal-delay="300" className="block text-white">
                  зимния спорт
                </span>
              </span>
            </h1>

            <p
              data-reveal="up"
              data-reveal-delay="550"
              className="max-w-xl text-base font-medium text-white/90 md:text-lg"
            >
              Зимни спортове, активен начин на живот и цялата зимна индустрия - на едно място.
            </p>

            <div
              data-reveal="up-sm"
              data-reveal-delay="750"
              className="flex flex-col gap-3 pt-2 sm:flex-row"
            >
              <a
                href="#registration"
                className="inline-flex h-13 min-h-12 w-full items-center justify-center rounded-full bg-gradient-cta px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-glow-coral transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Запази мястото си
              </a>
              <a
                href="#about"
                className="inline-flex h-13 min-h-12 w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:w-auto"
              >
                Научи повече
              </a>
            </div>
          </div>

          {/* Bottom: glass chip cards */}
          <ul className="mt-12 grid grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4 lg:max-w-3xl">
            <GlassChip
              icon={<Calendar className="h-5 w-5" />}
              title="31.10 - 01.11.2026"
              subtitle="Събота и неделя"
              delay={900}
            />
            <GlassChip
              icon={<MapPin className="h-5 w-5" />}
              title="Sofia Tech Park"
              subtitle="София, България"
              delay={1000}
            />
            <GlassChip
              icon={<Ticket className="h-5 w-5" />}
              title="Вход свободен"
              subtitle=""
              delay={1100}
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

function GlassChip({
  icon,
  title,
  subtitle,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
}) {
  return (
    <li
      data-reveal="up"
      data-reveal-delay={delay}
      className="flex items-center gap-3 rounded-2xl border border-white/25 bg-white/12 p-4 backdrop-blur-xl transition-colors hover:bg-white/20"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-cta text-white shadow-glow-coral">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="truncate font-display text-sm font-bold uppercase tracking-wide text-white">
          {title}
        </div>
        <div className="truncate text-xs font-medium text-white/75">{subtitle}</div>
      </div>
    </li>
  );
}
