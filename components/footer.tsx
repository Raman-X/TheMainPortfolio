"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="container mx-auto max-w-3xl">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Raman Maharjan. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
