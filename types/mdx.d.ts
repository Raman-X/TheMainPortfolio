declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const metadata: {
    title: string;
    description: string;
    publishedAt: string;
    tags?: string[];
  };

  const MDXContent: ComponentType;
  export default MDXContent;
}
