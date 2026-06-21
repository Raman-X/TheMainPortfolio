import { Mail, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const infoItems = [
  { icon: MapPin, label: "Location", value: "Lalitpur, Nepal" },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
  { icon: ArrowUpRight, label: "Availability", value: "Open for new projects" },
];

export function ContactWrapper() {
  return (
    <>
      <div className="mb-12 stagger-on-mount">
        <p
          className="text-xs uppercase tracking-[0.2em] text-primary"
          style={{ animationDelay: "0.05s" }}
        >
          Contact
        </p>
        <h1
          className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ animationDelay: "0.15s" }}
        >
          Let&apos;s build something useful.
        </h1>
        <p
          className="mt-4 max-w-xl leading-7 text-muted-foreground"
          style={{ animationDelay: "0.25s" }}
        >
          Send a note about your website, campaign, or product idea. I&apos;ll
          reply with the next practical step.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] stagger-on-mount">
        <div className="space-y-6">
          <div
            className="card-hover border p-6 backdrop-blur-[1px] transition-colors hover:border-primary/60"
            style={{ animationDelay: "0.15s" }}
          >
            <div
              className="mb-4 inline-flex items-center justify-center border p-2 animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Mail className="size-4 text-primary" />
            </div>
            <h2 className="text-lg font-semibold">Project inquiries</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Best for website builds, landing pages, content systems, and
              practical marketing experiments.
            </p>
            <a
              href="mailto:contact@ramanmaharjan.com"
              className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
            >
              contact@ramanmaharjan.com
            </a>
          </div>

          <div
            className="card-hover space-y-4 border p-6 backdrop-blur-[1px] transition-colors hover:border-primary/60"
            style={{ animationDelay: "0.25s" }}
          >
            {infoItems.map((item, i) => (
              <div
                key={item.label}
                className="flex items-start gap-3 animate-slide-in-left"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                <item.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="border p-6 backdrop-blur-[1px] sm:p-8"
          style={{ animationDelay: "0.35s" }}
        >
          <ContactForm />
        </div>
      </div>
    </>
  );
}
