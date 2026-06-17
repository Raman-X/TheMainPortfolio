import type { Metadata } from "next";
import { ProjectsWrapper } from "@/components/projects-wrapper";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected web development and marketing projects.",
};

export default function ProjectsPage() {
  return (
    <section className="container mx-auto max-w-3xl px-4 py-24">
      <ProjectsWrapper projects={projects} />
    </section>
  );
}
