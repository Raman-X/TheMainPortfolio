"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 gap-y-8 pb-20 pt-8 md:flex-row md:items-center">
      <motion.div
        className="mt-2 flex-1 md:mt-0"
        initial="hidden"
        animate="visible"
        variants={staggerContainer()}
      >
        <motion.p
          variants={fadeUp}
          className="mb-3 text-xs uppercase tracking-[0.2em] text-primary"
        >
          Web developer and marketer
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Hey, I&apos;m Raman Maharjan.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl font-light leading-7 text-muted-foreground"
        >
          I&apos;m a web developer and marketer based in Lalitpur, Nepal.
          I&apos;m passionate about building fast, useful web experiences and
          sharing what I learn along the way.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex size-32 shrink-0 items-center justify-center border bg-muted text-4xl font-bold text-primary sm:size-40"
        initial="hidden"
        animate="visible"
        variants={scaleIn}
      >
        RM
      </motion.div>
    </section>
  );
}
