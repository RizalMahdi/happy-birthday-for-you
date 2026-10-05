"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { content } from "@/lib/content";

export default function Gallery() {
  const { photos } = content.gallery;

  return (
    <section className="flex w-full flex-col items-center">
      <SectionHeading
        eyebrow="Galeri"
        title={content.gallery.title}
        subtitle={content.gallery.subtitle}
      />

      <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
        {photos.map((photo, i) => (
          <motion.figure
            key={photo.caption}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
          >
            {photo.src ? (
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#FDE8EF_0%,#F8B4C8_100%)] transition-transform duration-500 group-hover:scale-105">
                <span className="text-5xl opacity-80 md:text-6xl">
                  {photo.emoji}
                </span>
              </div>
            )}
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-white/95 via-white/70 to-transparent px-3 pt-8 pb-3 text-center text-xs text-[#7A3B52] md:text-[13px]">
              {photo.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
