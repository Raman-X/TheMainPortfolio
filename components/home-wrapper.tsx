"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, cardHover } from "@/lib/animations";
import type { Project } from "@/lib/projects";

type HomeWrapperProps = {
  latestPostHref: string;
  latestPostDate: string;
  latestPostTitle: string;
  latestPostDescription: string;
  featuredProjects: Project[];
};

export function HomeWrapper({
  latestPostHref,
  latestPostDate,
  latestPostTitle,
  latestPostDescription,
  featuredProjects,
}: HomeWrapperProps) {
  return (
    <>
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer()}
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 flex items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">
              Writing
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Latest post</h2>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/posts">
              All posts
              <ArrowRight />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          {...cardHover}
          className="backdrop-blur-[1px]"
        >
          <Link
            className="block border p-5 transition-colors hover:border-primary"
            href={latestPostHref}
          >
            <p className="text-sm text-muted-foreground">{latestPostDate}</p>
            <h3 className="mt-3 text-xl font-semibold">{latestPostTitle}</h3>
            <p className="mt-2 leading-7 text-muted-foreground">
              {latestPostDescription}
            </p>
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer()}
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 flex items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">
              Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Featured projects</h2>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/projects">
              All projects
              <ArrowRight />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-4">
          {featuredProjects.map((project, i) => (
            <motion.div
              className="backdrop-blur-[1px]"
              key={project.title}
              variants={fadeUp}
              {...cardHover}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                className="block border p-5 transition-colors hover:border-primary"
                href={project.href}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 leading-7 text-muted-foreground">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer()}
      >
        <motion.h2 variants={fadeUp} className="text-2xl font-semibold">
          Have a project in mind?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-3 leading-7 text-muted-foreground"
        >
          I can help shape the website, campaign, or content system around the
          thing you are trying to grow.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Button asChild className="mt-6">
            <Link href="/contact">
              Start a conversation
              <ArrowRight />
            </Link>
          </Button>
        </motion.div>
      </motion.section>
    </>
  );
}
