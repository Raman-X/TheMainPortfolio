"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

export function MotionContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={staggerContainer()}
    >
      {children}
    </motion.div>
  );
}
