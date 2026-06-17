"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, cardHover } from "@/lib/animations";

type PostItem = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
};

type PostsWrapperProps = {
  posts: PostItem[];
};

export function PostsWrapper({ posts }: PostsWrapperProps) {
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
          Posts
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-3 text-4xl font-bold tracking-tight"
        >
          Writing
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 leading-7 text-muted-foreground"
        >
          Notes on building useful websites, clearer marketing systems, and
          better product experiences.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.1, 0.08)}
      >
        {posts.map((post) => (
          <motion.div
            className="backdrop-blur-[1px]"
            key={post.slug}
            variants={fadeUp}
            {...cardHover}
          >
            <Link
              className="group block border p-5 transition-colors hover:border-primary"
              href={`/posts/${post.slug}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
                </div>
                <ArrowUpRight className="mt-1 size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-3 leading-7 text-muted-foreground">
                {post.description}
              </p>
              {post.tags ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span className="border px-2 py-1 text-xs" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
