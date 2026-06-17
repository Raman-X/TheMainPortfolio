export type Project = {
  title: string;
  description: string;
  href: string;
  year: string;
  stack: string[];
  status: "Live" | "Case study" | "In progress";
};

export const projects: Project[] = [
  {
    title: "Growth Landing System",
    description:
      "A reusable landing-page system for campaigns with fast iteration, structured content, and clear conversion paths.",
    href: "https://ramanmaharjan.com",
    year: "2026",
    stack: ["Next.js", "Tailwind", "Analytics"],
    status: "Case study",
  },
  {
    title: "Local Business Web Refresh",
    description:
      "A clean website refresh focused on service clarity, search visibility, and a simpler lead capture flow.",
    href: "https://ramanmaharjan.com",
    year: "2025",
    stack: ["SEO", "Content", "Web Design"],
    status: "Live",
  },
  {
    title: "Portfolio OS",
    description:
      "This portfolio, built as a lightweight publishing and project hub with MDX posts and a direct contact workflow.",
    href: "/",
    year: "2026",
    stack: ["Next.js", "MDX", "Resend"],
    status: "In progress",
  },
];
