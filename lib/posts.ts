import type { ComponentType } from "react";
import BuildingWithIntention, {
  metadata as buildingWithIntentionMetadata,
} from "@/content/posts/building-with-intention.mdx";
import MarketingMeetsProduct, {
  metadata as marketingMeetsProductMetadata,
} from "@/content/posts/marketing-meets-product.mdx";

export type Post = {
  slug: string;
  metadata: {
    title: string;
    description: string;
    publishedAt: string;
    tags?: string[];
  };
  Content: ComponentType;
};

const posts: Post[] = [
  {
    slug: "marketing-meets-product",
    metadata: marketingMeetsProductMetadata,
    Content: MarketingMeetsProduct,
  },
  {
    slug: "building-with-intention",
    metadata: buildingWithIntentionMetadata,
    Content: BuildingWithIntention,
  },
].sort(
  (a, b) =>
    new Date(b.metadata.publishedAt).getTime() -
    new Date(a.metadata.publishedAt).getTime(),
);

export function getPosts() {
  return posts;
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
