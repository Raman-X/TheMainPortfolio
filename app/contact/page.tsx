import type { Metadata } from "next";
import { ContactWrapper } from "@/components/contact-wrapper";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Raman Maharjan for web development and marketing work.",
};

export default function ContactPage() {
  return (
    <section className="container mx-auto max-w-3xl px-4 py-24">
      <ContactWrapper />
    </section>
  );
}
