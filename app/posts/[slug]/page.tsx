import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionContainer } from "@/components/motion-container";
import { FadeUp } from "@/components/fade-up";
import { getPost, getPosts } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const { Content } = post;

  return (
    <MotionContainer className="container mx-auto max-w-3xl px-4 py-24">
      <FadeUp>
        <Button asChild variant="ghost" size="sm" className="mb-8">
          <Link href="/posts">
            <ArrowLeft />
            Posts
          </Link>
        </Button>
      </FadeUp>

      <FadeUp className="mb-3 text-sm text-muted-foreground">
        {new Intl.DateTimeFormat("en", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }).format(new Date(post.metadata.publishedAt))}
      </FadeUp>

      <FadeUp>
        <Content />
      </FadeUp>
    </MotionContainer>
  );
}
