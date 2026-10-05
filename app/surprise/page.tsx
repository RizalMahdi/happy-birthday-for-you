import type { Metadata } from "next";
import CakeSection from "@/components/CakeSection";
import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import LetterCards from "@/components/LetterCards";
import MusicButton from "@/components/MusicButton";
import Petals from "@/components/Petals";
import SectionHeading from "@/components/SectionHeading";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: `Happy Birthday, ${content.name} 🎂`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function SurprisePage() {
  return (
    <div className="relative">
      <Petals />

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-24 px-5 py-24 md:gap-32 md:px-8 md:py-32">
        <header className="text-center">
          <p className="text-xs font-medium tracking-[0.4em] text-rose uppercase">
            Happy Birthday
          </p>
          <h1 className="mt-4 font-heading text-5xl text-foreground md:text-7xl">
            {content.name}
          </h1>
          <p className="mt-5 inline-block rounded-full border border-line bg-white/80 px-5 py-2 text-sm text-secondary-foreground shadow-sm backdrop-blur">
            📅 {content.birthdayLabel}
          </p>
        </header>

        <section className="w-full">
          <SectionHeading
            eyebrow="Hitung mundur"
            title={content.countdown.title}
          />
          <div className="mt-8">
            <Countdown
              target={content.birthdayDate}
              labels={content.countdown.labels}
              passedMessage={content.countdown.passed}
            />
          </div>
        </section>

        <CakeSection />

        <Gallery />

        <LetterCards />

        <section className="w-full max-w-xl">
          <div className="rounded-3xl border border-line bg-white/85 px-6 py-10 text-center shadow-sm backdrop-blur md:px-10">
            <p className="text-3xl" aria-hidden>
              🎈
            </p>
            <p className="mt-4 font-heading text-xl leading-relaxed text-foreground md:text-2xl">
              {content.closing.message}
            </p>
            <p className="mt-6 text-sm tracking-[0.2em] text-rose uppercase">
              {content.closing.signature}
            </p>
          </div>
        </section>
      </main>

      <MusicButton />
    </div>
  );
}
