import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-6 text-4xl font-bold tracking-tight">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-3 mt-10 text-2xl font-semibold">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-2 mt-8 text-xl font-semibold">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="my-5 leading-7 text-muted-foreground">{children}</p>
  ),
  a: ({ children, href }) => (
    <a className="text-primary underline underline-offset-4" href={href}>
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="my-5 list-disc space-y-2 pl-6 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-primary pl-4 text-muted-foreground">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-muted px-1.5 py-0.5 text-sm text-foreground">
      {children}
    </code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
