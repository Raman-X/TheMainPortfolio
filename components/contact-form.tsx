"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { initialContactState, sendContactMessage } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialContactState,
  );

  const isSuccess = state.status === "success";
  const isError = state.status === "error";

  return (
    <form action={formAction} className="space-y-6">
      <input
        className="hidden"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div
          className="group relative"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        >
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            Name
          </label>
          <motion.input
            whileFocus={{ scale: 1.005 }}
            transition={{ duration: 0.15 }}
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className="h-12 w-full border border-border bg-transparent px-4 text-sm outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:bg-primary/[0.02]"
          />
        </motion.div>

        <motion.div
          className="group relative"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        >
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.005 }}
            transition={{ duration: 0.15 }}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="h-12 w-full border border-border bg-transparent px-4 text-sm outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:bg-primary/[0.02]"
          />
        </motion.div>
      </div>

      <motion.div
        className="group relative"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
      >
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          Message
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.005 }}
          transition={{ duration: 0.15 }}
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about your project, timeline, and goals..."
          className="w-full resize-y border border-border bg-transparent px-4 py-3 text-sm leading-relaxed outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:bg-primary/[0.02]"
        />
      </motion.div>

      <motion.div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={state.status + state.message}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.25 }}
            className={`flex items-center gap-2 text-sm ${
              isSuccess
                ? "text-primary"
                : isError
                  ? "text-destructive"
                  : "text-muted-foreground"
            }`}
            aria-live="polite"
          >
            {isSuccess && <CheckCircle2 className="size-4 shrink-0" />}
            {isError && <AlertCircle className="size-4 shrink-0" />}
            <span>{state.message}</span>
          </motion.div>
        </AnimatePresence>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            className="w-full gap-2 sm:w-auto"
            type="submit"
            disabled={pending}
          >
            {pending ? (
              <motion.span
                className="inline-flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Loader2 className="size-4 animate-spin" />
                Sending
              </motion.span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Send className="size-4" />
                Send message
              </span>
            )}
          </Button>
        </motion.div>
      </motion.div>
    </form>
  );
}
