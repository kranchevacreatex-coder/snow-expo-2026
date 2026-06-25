import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

export function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!gdpr) return;
    setStatus("submitting");
    setErrorMsg("");

    const { error } = await supabase.from("contact_submissions").insert({
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      email: email.trim(),
      phone: phone.trim() || null,
      gdpr_consent: gdpr,
    });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
      return;
    }

    setStatus("success");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setGdpr(false);
  };

  return (
    <section
      id="registration"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24"
      style={{ background: "#004369" }}
    >
      {/* ambient washes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "#57c2e5" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "#f59a2d" }}
      />

      <div className="container relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* LEFT */}
        <div className="text-white">
          <h2
            className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Sofia Sans', system-ui, sans-serif" }}
            data-reveal="up"
            data-reveal-delay="80"
          >
            Запази мястото си безплатно
          </h2>
          <p
            className="mt-8 text-base leading-relaxed text-white/60"
            data-reveal="up"
            data-reveal-delay="220"
          >
            Ако искаш да бъдеш партньор на събитието, изпрати ни имейл до:{" "}
            <a
              href="mailto:info@snowexpo.bg"
              className="font-medium underline-offset-4 hover:underline"
              style={{ color: "#e94b2e" }}
            >
              info@snowexpo.bg
            </a>
          </p>
        </div>

        {/* RIGHT — form card */}
        <div data-reveal="up" data-reveal-delay="120">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 p-6 backdrop-blur-sm md:p-8"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="mb-2 block text-sm font-medium text-white/80">
                  Име
                </label>
                <input
                  id="first_name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  maxLength={100}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#57c2e5] focus:outline-none focus:ring-2 focus:ring-[#57c2e5]/30"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="mb-2 block text-sm font-medium text-white/80">
                  Фамилия
                </label>
                <input
                  id="last_name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  maxLength={100}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#57c2e5] focus:outline-none focus:ring-2 focus:ring-[#57c2e5]/30"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                Имейл <span style={{ color: "#e94b2e" }}>*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#57c2e5] focus:outline-none focus:ring-2 focus:ring-[#57c2e5]/30"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
                Телефон
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={30}
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[#57c2e5] focus:outline-none focus:ring-2 focus:ring-[#57c2e5]/30"
              />
            </div>

            <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-white/70">
              <input
                type="checkbox"
                checked={gdpr}
                onChange={(e) => setGdpr(e.target.checked)}
                required
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-white/30 bg-white/10 accent-[#e94b2e]"
              />
              <span>
                Съгласен/а съм с обработката на личните ми данни съгласно GDPR.
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "submitting" || !gdpr}
              className="mt-6 w-full rounded-lg px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-glow-coral transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              style={{ background: "var(--gradient-cta)" }}
            >
              {status === "submitting" ? "Изпращане..." : "Запази мястото си →"}
            </button>

            {status === "success" && (
              <p className="mt-4 rounded-lg border border-white/15 bg-white/5 p-4 text-center text-white">
                Благодарим! Ще се видим на снега. ❄️
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 rounded-lg border border-red-400/30 bg-red-500/10 p-4 text-center text-sm text-red-200">
                Възникна грешка: {errorMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
