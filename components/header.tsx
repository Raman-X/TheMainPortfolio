"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { fadeUp } from "@/lib/animations";

const navItems = [
  { href: "/posts", label: "Posts" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <nav className="container mx-auto flex max-w-3xl items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="font-serif text-2xl font-bold">
            RM
          </Link>
        </motion.div>

        <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10">
          {navItems.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + i * 0.06,
                duration: 0.35,
                ease: "easeOut",
              }}
              className="transition-colors hover:text-foreground"
            >
              <Link href={item.href}>{item.label}</Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <ThemeToggle />
        </motion.div>
      </nav>
    </motion.header>
  );
}
