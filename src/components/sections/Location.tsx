import { CalendarDays, MapPin, ParkingCircle, ArrowUpRight, CalendarPlus } from "lucide-react";

export function Location() {
  const address = "Sofia Tech Park, бул. Цариградско шосе 111Г, София";
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Sofia+Tech+Park+%D0%B1%D1%83%D0%BB.+%D0%A6%D0%B0%D1%80%D0%B8%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%BE+%D1%88%D0%BE%D1%81%D0%B5+111%D0%93+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F";
  const embedUrl =
    "https://www.google.com/maps?q=Sofia+Tech+Park,+%D0%B1%D1%83%D0%BB.+%D0%A6%D0%B0%D1%80%D0%B8%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%BE+%D1%88%D0%BE%D1%81%D0%B5+111%D0%93,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F&output=embed";
  const calendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=SNOW+EXPO+Sofia+2026&dates=20261031T100000/20261101T180000&details=%D0%94%D0%BE%D0%BC%D1%8A%D1%82+%D0%BD%D0%B0+%D0%B7%D0%B8%D0%BC%D0%BD%D0%B8%D1%8F+%D1%81%D0%BF%D0%BE%D1%80%D1%82.+%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B5%D0%BD+%D0%B2%D1%85%D0%BE%D0%B4.&location=Sofia+Tech+Park%2C+%D0%B1%D1%83%D0%BB.+%D0%A6%D0%B0%D1%80%D0%B8%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%BE+%D1%88%D0%BE%D1%81%D0%B5+111%D0%93%2C+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F&ctz=Europe%2FSofia";

  const items = [
    { icon: CalendarDays, text: "31.10 - 01.11.2026" },
    { icon: MapPin, text: address },
    { icon: ParkingCircle, text: "Безплатен паркинг" },
  ];

  return (
    <section id="location" aria-labelledby="location-title" className="relative bg-white">
      <div className="relative h-[560px] w-full md:h-[600px]">
        <div className="absolute inset-0" data-reveal="fade">
          <iframe
            title="Карта на Sofia Tech Park"
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
          />
        </div>

        {/* Floating glass info card */}
        <div className="pointer-events-none absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl items-end px-5 pb-8 sm:items-center sm:px-8 sm:pb-0 lg:justify-end lg:px-14">
            <article
              className="pointer-events-auto w-full max-w-md rounded-2xl border border-white/50 bg-white/30 p-7 backdrop-blur-xl sm:p-8"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 2px rgba(0,67,105,0.06), 0 18px 40px -16px rgba(0,67,105,0.2), 0 36px 64px -32px rgba(0,67,105,0.22)",
              }}
              data-reveal="up"
              data-reveal-delay="200"
            >
              <h2
                id="location-title"
                className="font-display text-2xl font-black sm:text-3xl"
                style={{
                  color: "var(--brand-deep)",
                  fontFamily: "'Sofia Sans', system-ui, sans-serif",
                }}
                data-reveal="up"
                data-reveal-delay="320"
              >
                Локация и информация
              </h2>

              <ul className="mt-6 space-y-4 text-sm leading-relaxed sm:text-base">
                {items.map(({ icon: Icon, text }, i) => (
                  <li
                    key={text}
                    className="flex items-start gap-3"
                    data-reveal="up-sm"
                    data-reveal-delay={`${440 + i * 100}`}
                  >
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-glow-coral"
                      style={{ backgroundImage: "var(--gradient-cta)" }}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      className="pt-1.5"
                      style={{ color: "var(--brand-deep)" }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-7 flex flex-col gap-3 sm:flex-row"
                data-reveal="up-sm"
                data-reveal-delay="780"
              >
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundImage: "var(--gradient-cta)" }}
                >
                  Виж на картата
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 bg-white/30 px-5 py-3 text-sm font-bold backdrop-blur-md transition-colors hover:bg-white/50"
                  style={{ color: "var(--brand-deep)" }}
                >
                  Добави в календара
                  <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

