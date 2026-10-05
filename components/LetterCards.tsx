"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { content } from "@/lib/content";

export default function LetterCards() {
  const [open, setOpen] = useState<boolean[]>(() =>
    content.letters.items.map(() => false),
  );

  const toggle = (index: number) =>
    setOpen((prev) => prev.map((value, i) => (i === index ? !value : value)));

  return (
    <section className="flex w-full flex-col items-center">
      <SectionHeading
        eyebrow="Pesan"
        title={content.letters.title}
        subtitle={content.letters.subtitle}
      />

      <div className="mt-10 grid w-full max-w-4xl gap-5 md:grid-cols-3">
        {content.letters.items.map((letter, i) => {
          const isOpen = open[i];
          return (
            <div key={letter.title} className="min-h-[240px]">
              <AnimatePresence mode="wait" initial={false}>
                {!isOpen ? (
                  <motion.button
                    key="closed"
                    type="button"
                    onClick={() => toggle(i)}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-full min-h-[240px] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-3xl border border-line bg-white/90 px-5 py-8 text-center shadow-sm backdrop-blur"
                  >
                    <span className="text-4xl" aria-hidden>
                      ✉️
                    </span>
                    <span className="font-heading text-lg text-foreground">
                      {letter.title}
                    </span>
                    <span className="text-xs tracking-[0.2em] text-rose uppercase">
                      Klik untuk membuka
                    </span>
                  </motion.button>
                ) : (
                  <motion.article
                    key="open"
                    initial={{ opacity: 0, y: 14, rotateX: -10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="flex h-full min-h-[240px] w-full flex-col rounded-3xl border border-line bg-linear-to-b from-white to-[#FFF0F5] px-6 py-7 shadow-md"
                  >
                    <h3 className="font-heading text-xl text-rose-deep">
                      {letter.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground md:text-[15px]">
                      {letter.body}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggle(i)}
                      className="mt-4 self-start text-muted-foreground"
                    >
                      Tutup kembali
                    </Button>
                  </motion.article>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
