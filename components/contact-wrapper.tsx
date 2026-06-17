"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { fadeUp, staggerContainer, cardHover } from "@/lib/animations";
import { ContactForm } from "@/components/contact-form";

const infoItems = [
  { icon: MapPin, label: "Location", value: "Lalitpur, Nepal" },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
  { icon: ArrowUpRight, label: "Availability", value: "Open for new projects" },
];

export function ContactWrapper() {
  return (
    <>
      <motion.div
        className="mb-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer()}
      >
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.2em] text-primary"
        >
          Contact
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Let&apos;s build something useful.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-xl leading-7 text-muted-foreground"
        >
          Send a note about your website, campaign, or product idea. I&apos;ll
          reply with the next practical step.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-8 lg:grid-cols-[1fr_1.6fr]"
        initial="hidden"
        animate="visible"
        variants={staggerContainer()}
      >
        <div className="space-y-6">
          <motion.div
            variants={fadeUp}
            {...cardHover}
            className="border p-6 backdrop-blur-[1px] transition-colors hover:border-primary/60"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mb-4 inline-flex items-center justify-center border p-2"
            >
              <Mail className="size-4 text-primary" />
            </motion.div>
            <h2 className="text-lg font-semibold">Project inquiries</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Best for website builds, landing pages, content systems, and
              practical marketing experiments.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            {...cardHover}
            className="space-y-4 border p-6 backdrop-blur-[1px] transition-colors hover:border-primary/60"
          >
            {infoItems.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5 + i * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <item.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="border p-6 backdrop-blur-[1px] sm:p-8"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </>
  );
}
