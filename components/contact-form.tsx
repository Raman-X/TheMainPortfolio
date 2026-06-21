"use client";

import { useActionState } from "react";
import { Send, AlertCircle, Loader2, Sparkles } from "lucide-react";
import { sendContactMessage } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";

type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialContactState: ContactState = {
  status: "idle",
  message: "Tell me a little about what you want to build.",
};

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
        <div
          className="group relative animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            disabled={isSuccess}
            className="input-focus-zoom h-12 w-full border border-border bg-transparent px-4 text-sm outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:bg-primary/[0.02] disabled:opacity-40"
          />
        </div>

        <div
          className="group relative animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            disabled={isSuccess}
            className="input-focus-zoom h-12 w-full border border-border bg-transparent px-4 text-sm outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:bg-primary/[0.02] disabled:opacity-40"
          />
        </div>
      </div>

      <div
        className="group relative animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about your project, timeline, and goals..."
          disabled={isSuccess}
          className="input-focus-zoom w-full resize-y border border-border bg-transparent px-4 py-3 text-sm leading-relaxed outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:bg-primary/[0.02] disabled:opacity-40"
        />
      </div>

      {isSuccess ? (
        <div
          className="flex items-center gap-3 border border-primary/30 bg-primary/[0.04] px-5 py-4 animate-scale-in"
          aria-live="polite"
        >
          <div className="inline-flex shrink-0 items-center justify-center rounded-full bg-primary/10 p-2">
            <Sparkles className="size-5 text-primary animate-pop" />
          </div>
          <div>
            <p className="text-sm font-medium text-primary">Message sent</p>
            <p className="text-sm text-primary/80">{state.message}</p>
          </div>
        </div>
      ) : (
        <>
          {isError && (
            <div
              className="flex items-center gap-3 border border-destructive/30 bg-destructive/[0.04] px-5 py-4 animate-shake"
              aria-live="polite"
            >
              <div className="inline-flex shrink-0 items-center justify-center rounded-full bg-destructive/10 p-2">
                <AlertCircle className="size-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium text-destructive">
                  Could not send
                </p>
                <p className="text-sm text-destructive/80">{state.message}</p>
              </div>
            </div>
          )}

          <div
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-sm text-muted-foreground">{state.message}</p>

            <div className="btn-hover">
              <Button
                className="w-full gap-2 sm:w-auto"
                type="submit"
                disabled={pending}
              >
                {pending ? (
                  <span className="inline-flex items-center gap-2 animate-fade-in">
                    <Loader2 className="size-4 animate-spin" />
                    Sending
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <Send className="size-4" />
                    Send message
                  </span>
                )}
              </Button>
            </div>
          </div>
        </>
      )}
    </form>
  );
}
