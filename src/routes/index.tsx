import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Audience } from "@/components/sections/Audience";
import { Speakers } from "@/components/sections/Speakers";
import { Program } from "@/components/sections/Program";
import { Sponsors } from "@/components/sections/Sponsors";
import { Partners } from "@/components/sections/Partners";
import { Exhibitors } from "@/components/sections/Exhibitors";
import { Registration } from "@/components/sections/Registration";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SNOW EXPO Sofia 2026 - Домът на зимния спорт" },
      {
        name: "description",
        content:
          "Първото национално зимно събитие в България. 31.10 - 01.11.2026, Sofia Tech Park. Зимни спортове, активен начин на живот и цялата зимна индустрия - на едно място.",
      },
      { property: "og:title", content: "SNOW EXPO Sofia 2026 - Домът на зимния спорт" },
      {
        property: "og:description",
        content:
          "Първото национално зимно събитие в България. 31.10 - 01.11.2026, Sofia Tech Park. Свободен вход.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Audience />
        <Speakers />
        <Program />
        <Sponsors />
        <Partners />
        <Exhibitors />
        <Registration />
        <Location />
      </main>
      <Footer />

    </div>
  );
}
