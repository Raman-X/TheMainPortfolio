"use client";

import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <AnimatedThemeToggler
      variant="rectangle"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onThemeChange={(t) => setTheme(t)}
      className="cursor-pointer rounded-md p-2 text-primary hover:bg-accent transition-colors"
    />
  );
}
