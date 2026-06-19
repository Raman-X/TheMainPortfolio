import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
      <div className="mb-10 stagger-on-mount">
        <p
          className="text-xs uppercase tracking-[0.2em] text-primary"
          style={{ animationDelay: "0.05s" }}
        >
          Posts
        </p>
        <h1
          className="mt-3 text-4xl font-bold tracking-tight"
          style={{ animationDelay: "0.15s" }}
        >
          Writing
        </h1>
        <p
          className="mt-4 leading-7 text-muted-foreground"
          style={{ animationDelay: "0.25s" }}
        >
          Notes on building useful websites, clearer marketing systems, and
          better product experiences.
        </p>
      </div>

      <div className="grid gap-4 stagger-on-mount">
        {posts.map((post, i) => (
          <div
            className="card-hover backdrop-blur-[1px]"
            key={post.slug}
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
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
          </div>
        ))}
      </div>
    </>
  );
}
