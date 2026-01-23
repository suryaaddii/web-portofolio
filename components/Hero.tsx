"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden md:pt-19">
      {/* BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-noise opacity-[0.25]" />
        <div className="absolute left-1/2 top-10 h-130 w-130 -translate-x-1/2 rounded-full border hairline bg-white/40 blur-[0.5px]" />
        <div className="absolute left-1/2 top-10 h-130 w-130 -translate-x-1/2 rounded-full bg-neutral-200/30 blur-3xl mask-fade" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 pt-35">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.2, 0.9, 0.2, 1] }}
          >
            <p className="text-xs tracking-[0.45em] text-neutral-500">
              SURYA ADI
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Full Stack
              <br />
              Developer
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-600 md:text-base">
              Hi! I&apos;m Surya Adi, a Junior Fullstack Developer specializing in modern
              Web Development with a growing focus on Artificial Intelligence, scalable
              web apps, and clean UI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/cv.pdf"
                className="inline-flex items-center justify-center rounded-full border hairline bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border hairline bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-500">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900/50" />
                Surakarta, Indonesia
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900/50" />
                Express JS • Laravel • React • MySQL • Tailwind
              </span>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55, ease: [0.2, 0.9, 0.2, 1] }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[999px] border hairline bg-white/60 shadow-sm" />
              <div className="relative h-80 w-[320px] overflow-hidden rounded-[999px] border hairline bg-neutral-100 md:h-95 md:w-95">
                <Image
                  src="/me.jpg"
                  alt="Surya Adi"
                  fill
                  className="photo-bw object-cover"
                  priority
                />
              </div>

              {/* SMALL STAMP */}
              <div className="absolute -bottom-4 items-center justify-center translate-x-10 md:translate-x-18 rounded-2xl border hairline bg-white/85 px-4 py-3 text-xs text-neutral-600 shadow-sm backdrop-blur">
                Perbanyak healing, kurangi coding!
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 h-px w-full hairline border-t" />
      </div>
    </section>
  );
}
