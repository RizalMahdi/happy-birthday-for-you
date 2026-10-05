"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";

const CONFETTI_COLORS = ["#EC4899", "#F8B4C8", "#FFD9E3", "#FFFFFF", "#D4AF37"];

function blowCandles() {
  const shared = {
    particleCount: 130,
    spread: 75,
    startVelocity: 30,
    scalar: 0.95,
    colors: CONFETTI_COLORS,
    zIndex: 200,
  } as const;

  confetti({ ...shared, origin: { x: 0.5, y: 0.55 } });
  window.setTimeout(() => {
    confetti({ ...shared, particleCount: 60, origin: { x: 0.15, y: 0.7 } });
    confetti({ ...shared, particleCount: 60, origin: { x: 0.85, y: 0.7 } });
  }, 250);
}

export default function CakeSection() {
  const [blown, setBlown] = useState(false);
  const [celebrated, setCelebrated] = useState(false);
  const isToggling = useRef(false);

  const handleBlow = () => {
    if (isToggling.current) return;
    isToggling.current = true;
    window.setTimeout(() => {
      isToggling.current = false;
    }, 400);

    if (blown) {
      setBlown(false);
      setCelebrated(false);
      return;
    }
    setBlown(true);
    setCelebrated(true);
    blowCandles();
  };

  return (
    <section className="flex w-full flex-col items-center">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-heading text-3xl text-foreground md:text-4xl">
          {content.cake.title}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          {content.cake.instruction}
        </p>
      </div>

      <div className="relative mt-8 w-full max-w-sm">
        <svg
          viewBox="0 0 260 220"
          role="img"
          aria-label="Kue ulang tahun dengan lilin"
          className="mx-auto w-full drop-shadow-sm"
        >
          <ellipse cx="130" cy="198" rx="112" ry="13" fill="#FADCE4" />
          <rect x="52" y="142" width="156" height="52" rx="12" fill="#F8B4C8" />
          <path
            d="M52 156 q13 14 26 0 t26 0 t26 0 t26 0 t26 0 t26 0 v-8 H52z"
            fill="#FBD5E1"
          />
          <rect x="66" y="102" width="128" height="44" rx="12" fill="#FBD0DD" />
          <path
            d="M66 116 q13 13 26 0 t26 0 t26 0 t26 0 t26 0 v-8 H66z"
            fill="#FFE3EC"
          />
          <rect x="82" y="70" width="96" height="36" rx="12" fill="#FFE9F1" />
          <circle cx="96" cy="130" r="3" fill="#EC4899" opacity="0.55" />
          <circle cx="130" cy="122" r="3" fill="#D4AF37" opacity="0.7" />
          <circle cx="166" cy="132" r="3" fill="#EC4899" opacity="0.55" />
          <circle cx="112" cy="168" r="3.5" fill="#FFFFFF" opacity="0.8" />
          <circle cx="152" cy="172" r="3.5" fill="#FFFFFF" opacity="0.8" />
          <rect x="126" y="40" width="8" height="32" rx="4" fill="#EC4899" />
          <rect x="126" y="48" width="8" height="6" fill="#FFD9E3" />
          <rect x="126" y="60" width="8" height="6" fill="#FFD9E3" />
          <AnimatePresence>
            {!blown ? (
              <motion.g
                key="flame"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.1, y: -6 }}
                transition={{ duration: 0.35 }}
                style={{ transformOrigin: "130px 34px" }}
              >
                <path
                  className="animate-flame"
                  d="M130 12 c9 9 13 16 13 22 a13 13 0 0 1 -26 0 c0-6 4-13 13-22z"
                  fill="#F4719A"
                />
                <path
                  className="animate-flame"
                  d="M130 22 c5 5 7 9 7 12 a7 7 0 0 1 -14 0 c0-3 2-7 7-12z"
                  fill="#FFE9A3"
                />
              </motion.g>
            ) : null}
          </AnimatePresence>
        </svg>

        <AnimatePresence>
          {blown && celebrated ? (
            <motion.p
              key="smoke"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: -14 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-muted-foreground"
            >
              ~ asap ~
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>

      <Button
        onClick={handleBlow}
        size="lg"
        className="mt-6 h-12 rounded-full px-8 text-base shadow-md"
      >
        {blown ? content.cake.blownLabel : "Tiup lilinnya 💨"}
      </Button>

      <AnimatePresence>
        {blown ? (
          <motion.div
            key="message"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 w-full max-w-xl rounded-3xl border border-line bg-white/85 px-6 py-7 text-center shadow-sm backdrop-blur md:px-10"
          >
            <p className="font-heading text-2xl text-rose-deep md:text-3xl">
              🎂
            </p>
            <p className="mt-3 font-heading text-lg leading-relaxed text-foreground md:text-xl">
              {content.cake.message(content.name)}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
