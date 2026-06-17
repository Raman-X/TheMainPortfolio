import type { Metadata } from "next";
import { PostsWrapper } from "@/components/posts-wrapper";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Posts",
  description: "Writing about web development, marketing, and product work.",
};

export default function PostsPage() {
  const posts = getPosts().map((post) => ({
    slug: post.slug,
    title: post.metadata.title,
    description: post.metadata.description,
    date: new Intl.DateTimeFormat("en", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(post.metadata.publishedAt)),
    tags: post.metadata.tags,
  }));

  return (
    <section className="container mx-auto max-w-3xl px-4 py-24">
      <PostsWrapper posts={posts} />
    </section>
  );
}
