"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/components/use-in-view";
import type { Project } from "@/lib/projects";

type HomeWrapperProps = {
  latestPostHref: string;
  latestPostDate: string;
  latestPostTitle: string;
  latestPostDescription: string;
  featuredProjects: Project[];
};

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView({ rootMargin: "-60px" });
  return (
    <section
      ref={ref}
      className={`${className ?? ""} stagger-in-view ${inView ? "is-visible" : ""}`}
    >
      {children}
    </section>
  );
}

export function HomeWrapper({
  latestPostHref,
  latestPostDate,
  latestPostTitle,
  latestPostDescription,
  featuredProjects,
}: HomeWrapperProps) {
  return (
    <>
      <AnimatedSection className="py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
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
        </div>

        <div className="card-hover backdrop-blur-[1px]">
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
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
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
        </div>

        <div className="grid gap-4">
          {featuredProjects.map((project, i) => (
            <div
              className="card-hover backdrop-blur-[1px] animate-fade-up"
              key={project.title}
              style={{ animationDelay: `${0.05 + i * 0.1}s` }}
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
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12">
        <h2 className="text-2xl font-semibold">Have a project in mind?</h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          I can help shape the website, campaign, or content system around the
          thing you are trying to grow.
        </p>
        <div>
          <Button asChild className="mt-6">
            <Link href="/contact">
              Start a conversation
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </>
  );
}
