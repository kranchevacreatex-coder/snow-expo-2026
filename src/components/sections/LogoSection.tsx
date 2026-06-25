import { MarqueeRow, placeholderRow1, placeholderRow2 } from "./LogoMarquee";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  topFade?: boolean;
  bottomGradient?: boolean;
  variant?: "default" | "audience";
};

export function LogoSection({ id, title, subtitle, topFade, bottomGradient, variant = "default" }: Props) {

  const isAudience = variant === "audience";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative isolate overflow-hidden"
      style={
        isAudience
          ? {
              background:
                "linear-gradient(135deg, #EAF6FC 0%, #F5FAFF 45%, #BFE2F2 75%, #9BD2EA 100%)",
            }
          : { backgroundColor: "#F4F8FC" }
      }
    >
      {isAudience ? (
        <>
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
        </>
      ) : null}


      {topFade && !isAudience ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[280px]"
          style={{
            background:
              "linear-gradient(180deg, #9BD2EA 0%, #BFE2F2 35%, #F5FAFF 75%, #F4F8FC 100%)",
          }}
        />
      ) : null}

      {bottomGradient && !isAudience ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[60%]"
            style={{
              background:
                "linear-gradient(180deg, rgba(244,248,252,0) 0%, #EAF6FC 45%, #BFE2F2 80%, #9BD2EA 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-[320px] w-[320px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in srgb, var(--brand-coral) 16%, transparent), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -right-20 -z-10 h-[360px] w-[360px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in srgb, var(--brand-sky) 45%, transparent), transparent 70%)",
            }}
          />
        </>
      ) : null}



      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-14">
        <div className="mb-12 max-w-3xl text-center md:mb-16 md:text-left">
          <h2
            id={`${id}-title`}
            className="font-display text-[1.75rem] font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ color: "var(--brand-deep)" }}
            data-reveal="up"
          >
            {title}
          </h2>
          {subtitle ? (
            <p
              className="mt-5 text-base leading-relaxed sm:text-lg"
              style={{
                color: "color-mix(in srgb, var(--brand-deep) 70%, transparent)",
              }}
              data-reveal="up"
              data-reveal-delay="180"
            >
              {subtitle}
            </p>
          ) : null}
          <div
            className="mt-6 hidden h-1.5 w-24 rounded-full bg-gradient-cta md:block"
            data-reveal="up"
            data-reveal-delay="260"
          />
        </div>

        <div
          className="relative"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
          data-reveal="fade"
          data-reveal-delay="280"
        >
          <MarqueeRow logos={placeholderRow1} direction="left" duration={42} />
          <MarqueeRow logos={placeholderRow2} direction="right" duration={56} />
        </div>
      </div>
    </section>
  );
}
