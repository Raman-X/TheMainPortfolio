import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectsWrapperProps = {
  projects: Project[];
};

export function ProjectsWrapper({ projects }: ProjectsWrapperProps) {
  return (
    <>
      <div className="mb-10 stagger-on-mount">
        <p
          className="text-xs uppercase tracking-[0.2em] text-primary"
          style={{ animationDelay: "0.05s" }}
        >
          Projects
        </p>
        <h1
          className="mt-3 text-4xl font-bold tracking-tight"
          style={{ animationDelay: "0.15s" }}
        >
          Selected work
        </h1>
        <p
          className="mt-4 leading-7 text-muted-foreground"
          style={{ animationDelay: "0.25s" }}
        >
          A mix of web builds, marketing systems, and experiments focused on
          clarity, speed, and measurable next steps.
        </p>
      </div>

      <div className="grid gap-4 stagger-on-mount">
        {projects.map((project, i) => (
          <div
            className="card-hover backdrop-blur-[1px]"
            key={project.title}
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
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
          </div>
        ))}
      </div>
    </>
  );
}
