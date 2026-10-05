"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { content } from "@/lib/content";

const HEARTS = Array.from({ length: 7 }, (_, i) => ({
  left: 8 + ((i * 13) % 84),
  top: 12 + ((i * 29) % 70),
  glyph: i % 3 === 0 ? "💌" : i % 3 === 1 ? "💗" : "🌸",
  delay: i * 0.5,
  duration: 3.2 + (i % 4) * 0.6,
}));

export default function Cover() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_50%_0%,#3A2430_0%,#2B1B22_55%,#1F1218_100%)] px-6 text-center">
      {HEARTS.map((heart, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute text-2xl select-none"
          style={{ left: `${heart.left}%`, top: `${heart.top}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.35, 0.9, 0.35] }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut",
          }}
        >
          {heart.glyph}
        </motion.span>
      ))}

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-xs font-medium tracking-[0.4em] text-[#FFD9E3] uppercase"
      >
        {content.cover.eyebrow}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mt-4 bg-linear-to-r from-[#FFD9E3] via-[#F8B4C8] to-[#F4719A] bg-clip-text font-heading text-6xl text-transparent md:text-8xl"
      >
        {content.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75 }}
        className="mt-5 max-w-md text-base leading-relaxed text-[#E8C9D3] md:text-lg"
      >
        {content.cover.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.05 }}
        className="mt-9 flex flex-col items-center gap-4"
      >
        <Link
          href="/surprise"
          className={`${buttonVariants({ size: "lg" })} h-13 rounded-full bg-[#EC4899] px-10 text-base text-white shadow-[0_10px_40px_-10px_#EC4899] hover:bg-[#F4719A]`}
        >
          {content.cover.buttonLabel} 🎁
        </Link>
        <p className="text-xs tracking-widest text-[#B98DA0]">
          {content.cover.hint}
        </p>
      </motion.div>
    </main>
  );
}
