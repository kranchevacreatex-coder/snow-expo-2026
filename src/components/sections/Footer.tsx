import { Instagram, Facebook, Linkedin } from "lucide-react";
import logoAsset from "@/assets/snow-expo-logo-white-v2.png.asset.json";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative text-white"
      style={{ background: "#004369" }}
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* LEFT */}
          <div data-reveal="up">
            <img
              src={logoAsset.url}
              alt="SNOW EXPO Sofia 2026"
              className="block h-[100px] w-auto"
            />
            <p
              className="mt-4 text-lg font-bold"
              style={{ fontFamily: "'Sofia Sans', system-ui, sans-serif" }}
            >
              Домът на зимния спорт
            </p>
            <p className="mt-3 text-sm text-white/70">
              <a
                href="mailto:info@snowexpo.bg"
                className="font-medium underline-offset-4 hover:underline"
                style={{ color: "#57c2e5" }}
              >
                info@snowexpo.bg
              </a>
            </p>
            <p className="mt-1 text-sm text-white/70">
              Тел:{" "}
              <a
                href="tel:+359888123456"
                className="font-medium underline-offset-4 hover:underline"
                style={{ color: "#57c2e5" }}
              >
                +359 888 123 456
              </a>
            </p>
          </div>

          {/* CENTER */}
          <div className="md:flex md:justify-center" data-reveal="up" data-reveal-delay="120">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">
                Навигация
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white">За събитието</a></li>
                <li><a href="#speakers" className="hover:text-white">Лектори</a></li>
                <li><a href="#program" className="hover:text-white">Програма</a></li>
                <li><a href="#partners" className="hover:text-white">Партньори</a></li>
                <li><a href="#registration" className="hover:text-white">Регистрация</a></li>
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:flex md:justify-end" data-reveal="up" data-reveal-delay="240">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/90">
                {"\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0"}ПОСЛЕДВАЙ НИ
              </h4>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.09Z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col items-start gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3"
          data-reveal="fade"
          data-reveal-delay="360"
        >
          <span>© 2026 SNOW EXPO Sofia</span>
          <span className="hidden sm:inline">·</span>
          <a href="#" className="hover:text-white">Политика за поверителност</a>
          <span className="hidden sm:inline">·</span>
          <span>Данните се съхраняват на Supabase сървъри във Frankfurt (ЕС)</span>
        </div>
      </div>
    </footer>
  );
}
