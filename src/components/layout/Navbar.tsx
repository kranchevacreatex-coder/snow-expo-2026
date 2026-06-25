import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/snow-expo-logo.png.asset.json";

const navLinks = [
  { href: "#about", label: "За събитието" },
  { href: "#audience", label: "За кого е" },
  { href: "#speakers", label: "Лектори" },
  { href: "#program", label: "Програма" },
  { href: "#sponsors", label: "Партньори" },
  { href: "#registration", label: "Регистрация" },
  { href: "#contact", label: "Контакти" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/30 bg-white/40 backdrop-blur-xl shadow-soft"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24">
        <a href="#hero" className="flex items-center" aria-label="SNOW EXPO Sofia 2026 - начало">
          <img
            src={logoAsset.url}
            alt="SNOW EXPO Sofia 2026"
            className="h-16 w-auto md:h-20"
          />
        </a>


        <nav aria-label="Главна навигация" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative px-3 py-2 text-sm font-medium uppercase tracking-wide text-[color:var(--brand-deep)]/80 transition-colors hover:text-[color:var(--brand-coral)]"
                >
                  {link.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-gradient-cta transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#registration"
            className="hidden rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-white shadow-glow-coral transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Запази мястото си
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--brand-deep)]/15 bg-white/60 text-[color:var(--brand-deep)] backdrop-blur-md md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Затвори меню" : "Отвори меню"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-white/30 bg-white/70 backdrop-blur-xl md:hidden">
          <nav aria-label="Мобилна навигация" className="mx-auto max-w-7xl px-6 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium uppercase tracking-wide text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-sky)]/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#registration"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-gradient-cta px-5 py-3 text-center text-sm font-semibold text-white shadow-glow-coral"
                >
                  Запази мястото си
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
