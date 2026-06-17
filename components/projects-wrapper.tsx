"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, cardHover } from "@/lib/animations";
import type { Project } from "@/lib/projects";

type ProjectsWrapperProps = {
  projects: Project[];
};

export function ProjectsWrapper({ projects }: ProjectsWrapperProps) {
  return (
    <>
      <motion.div
        className="mb-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer()}
      >
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.2em] text-primary"
        >
          Projects
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-3 text-4xl font-bold tracking-tight"
        >
          Selected work
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 leading-7 text-muted-foreground"
        >
          A mix of web builds, marketing systems, and experiments focused on
          clarity, speed, and measurable next steps.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.1, 0.08)}
      >
        {projects.map((project) => (
          <motion.div
            className="backdrop-blur-[1px]"
            key={project.title}
            variants={fadeUp}
            {...cardHover}
          >
            <Link
              className="group block border p-5 transition-colors hover:border-primary"
              href={project.href}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    <span className="border px-2 py-1 text-xs text-muted-foreground">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.year}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-4 leading-7 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span className="border px-2 py-1 text-xs" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
