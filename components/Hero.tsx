"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-noise opacity-[0.22]" />
        <div className="absolute left-1/2 top-8 h-130 w-130 -translate-x-1/2 rounded-full border hairline bg-white/40 blur-[0.5px]" />
        <div className="absolute left-1/2 top-8 h-130 w-130 -translate-x-1/2 rounded-full bg-neutral-200/40 blur-3xl mask-fade" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.2, 0.9, 0.2, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border hairline bg-white/80 px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Available for Work
            </div>

            <p className="mt-6 text-xs font-medium tracking-[0.45em] text-neutral-500">
              SURYA ADI
            </p>

            <h1 className="mt-5 text-balance text-5xl font-black leading-[0.9] tracking-[-0.055em] text-neutral-950 md:text-6xl lg:text-7xl">
              Full Stack
              <br />
              Developer
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 md:text-lg">
              Building modern web applications, scalable backend services, and
              business systems with a strong focus on performance,
              maintainability, and user experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/cv.pdf"
                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-900/15 transition hover:-translate-y-0.5 hover:bg-black"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border hairline bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-100"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/suryaaddii"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border hairline bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-100"
              >
                GitHub
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <p className="text-3xl font-bold tracking-tight">2+</p>
                <p className="mt-1 text-sm text-neutral-500">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold tracking-tight">5+</p>
                <p className="mt-1 text-sm text-neutral-500">
                  Featured Projects
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold tracking-tight">100%</p>
                <p className="mt-1 text-sm text-neutral-500">
                  Web Development Focus
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.08,
              duration: 0.55,
              ease: [0.2, 0.9, 0.2, 1],
            }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-5 -z-10 rounded-full card-premium" />

              <div className="relative h-80 w-80 overflow-hidden rounded-full border hairline bg-neutral-100 md:h-95 md:w-95">
                <Image
                  src="/saya.jpeg"
                  alt="Surya Adi"
                  fill
                  className="photo-bw object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-2xl border hairline bg-white/85 px-4 py-3 text-xs font-medium text-neutral-600 shadow-lg shadow-neutral-900/10 backdrop-blur">
                Building ideas into scalable software.
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 h-px w-full border-t hairline" />
      </div>
    </section>
  );
}
