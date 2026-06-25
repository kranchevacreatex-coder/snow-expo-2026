import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";
import speakersBg from "@/assets/speakers-bg.jpg.asset.json";






// TODO: Replace with real speaker data when provided by client.
// Each item: { name, role, topic, bio, image }
const speakers: {
  name: string;
  role: string;
  topic: string;
  bio: string;
  image: string;
}[] = [
  {
    name: "Николай Радев",
    role: "Старши треньор, Български ски отбор",
    topic: "Тема: Пътят от пистата до олимпиадата",
    bio: "Над 20 години в професионалния алпийски спорт. Извел е поколение състезатели до световни първенства и работи активно с младежките академии в Боровец и Банско.",
    image: speaker1,
  },
  {
    name: "Мария Петрова",
    role: "Професионален сноубордист",
    topic: "Тема: Жените, които променят сноуборда",
    bio: "Първата българка с подиум на FIS световна купа по фрийстайл сноуборд. Основател на школа за момичета, която развива новото поколение райдъри в Пампорово.",
    image: speaker2,
  },
  {
    name: "Стефан Колев",
    role: "Изпълнителен директор, Snow Industry BG",
    topic: "Тема: Бъдещето на зимния туризъм в България",
    bio: "30 години опит в зимната индустрия - от планинско оборудване до развитие на курорти. Консултира водещи европейски брандове за стратегия и устойчиво развитие.",
    image: speaker3,
  },
  {
    name: "Елена Димитрова",
    role: "Алпийска скиорка, национален отбор",
    topic: "Тема: Менталната подготовка на елитния спортист",
    bio: "Многократен национален шампион в слалом и гигантски слалом. Лектор по спортна психология и амбасадор на инициативи за достъп до зимни спортове за деца.",
    image: speaker4,
  },
];

export function Speakers() {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="relative isolate overflow-hidden bg-[color:var(--about-bg)] text-[color:var(--about-fg)]"
    >
      {/* Winter photo backdrop — responsive framing */}
      <img
        src={speakersBg.url}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover opacity-50 object-[70%_center] scale-110 sm:object-[center_35%] sm:scale-100 lg:object-center"
      />

      {/* Readability overlay — dark at edges, lighter in middle so photo shows through */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,30,55,0.65) 0%, rgba(0,30,55,0.45) 40%, rgba(0,30,55,0.65) 100%)",
        }}
      />



      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-14">
        {/* Header — heading left, description right (matches Audience rhythm) */}
        <div
          className="mb-12 grid grid-cols-1 items-end gap-8 md:mb-16 md:grid-cols-[1fr_auto] md:gap-12"
          data-reveal
        >
          <div>
            <h2
              id="speakers-title"
              className="font-display text-[1.75rem] font-black leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Лектори и <span className="text-gradient-cta">гости</span>
            </h2>
            <div className="mt-6 hidden h-1.5 w-24 rounded-full bg-gradient-cta md:block" />
          </div>
          <p
            className="ml-auto max-w-md self-center text-right text-sm leading-relaxed text-white/65"
            style={{ fontFamily: "'Sofia Sans', sans-serif" }}
          >
            Открийте вдъхновяващи истории от спортисти, треньори и експерти, които живеят и
            дишат зимата. Всеки лектор носи уникална гледна точка, реален опит и знания, които
            можете да приложите веднага - на пистата, в бизнеса или в живота.
          </p>
        </div>




        {/* Carousel */}
        <div className="relative mt-14" data-reveal data-reveal-delay="120">
          <Carousel opts={{ align: "start", loop: true }} plugins={[autoplay.current]} className="w-full">
            <CarouselContent className="-ml-4">
              {speakers.map((speaker, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <SpeakerCard speaker={speaker} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-10 flex items-center justify-center gap-4">
              <CarouselPrevious className="relative left-0 top-0 h-12 w-12 translate-y-0 border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-transparent hover:bg-[#e94b2e] hover:text-white" />
              <CarouselNext className="relative right-0 top-0 h-12 w-12 translate-y-0 border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-transparent hover:bg-[#e94b2e] hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function SpeakerCard({
  speaker,
}: {
  speaker: (typeof speakers)[number];
}) {
  return (
    <article
      className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/25 bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_30px_60px_-20px_rgba(0,0,0,0.5)]"
    >

      {/* Photo — grayscale by default, color on hover */}
      <img
        src={speaker.image}
        alt={speaker.name}
        loading="lazy"
        width={1024}
        height={1536}
        className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter,transform] duration-[400ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
      />

      {/* Blue brand gradient overlay — fades out on hover to reveal color photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,67,105,0) 0%, rgba(0,67,105,0.35) 45%, rgba(40,80,220,0.75) 100%)",
        }}
      />

      {/* Bottom readability gradient — always visible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: "#e94b2e" }}
        >
          {speaker.topic}
        </p>
        <h3
          className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl"
          style={{ fontFamily: "'Sofia Sans', sans-serif" }}
        >
          {speaker.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-white/80">{speaker.role}</p>

        {/* Bio — revealed on hover */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <p
            className="overflow-hidden text-sm leading-relaxed text-white/85"
            style={{ fontFamily: "'Sofia Sans', sans-serif" }}
          >
            {speaker.bio}
          </p>
        </div>
      </div>
    </article>
  );
}
