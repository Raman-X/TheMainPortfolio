import Hero from "@/components/hero";
import { HomeWrapper } from "@/components/home-wrapper";
import { getPosts } from "@/lib/posts";
import { projects } from "@/lib/projects";

export default function Home() {
  const [latestPost] = getPosts();
  const featuredProjects = projects.slice(0, 2);

  const latestPostDate = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(latestPost.metadata.publishedAt));

  return (
    <div className="container mx-auto max-w-3xl px-4 py-24">
      <Hero />
      <HomeWrapper
        latestPostHref={`/posts/${latestPost.slug}`}
        latestPostDate={latestPostDate}
        latestPostTitle={latestPost.metadata.title}
        latestPostDescription={latestPost.metadata.description}
        featuredProjects={featuredProjects}
      />
    </div>
  );
}
