"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const MotionSun = motion.create(Sun);
const MotionMoon = motion.create(Moon);

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      className="cursor-pointer"
      size="sm"
      variant="ghost"
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <MotionSun
            key="sun"
            initial={{ y: -10, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2 }}
            className="size-4.5 text-primary"
          />
        ) : (
          <MotionMoon
            key="moon"
            initial={{ y: -10, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2 }}
            className="size-4.5 text-sky-950"
          />
        )}
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
