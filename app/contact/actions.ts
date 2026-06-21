"use server";

import { Resend } from "resend";

type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

function getField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContactMessage(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = getField(formData, "name");
  const email = getField(formData, "email");
  const message = getField(formData, "message");
  const website = getField(formData, "website");

  if (website) {
    return {
      status: "success",
      message: "Thanks, I will get back to you soon.",
    };
  }

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please add your name, email, and message.",
    };
  }

  if (!email.includes("@")) {
    return {
      status: "error",
      message: "Please use a valid email address.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return {
      status: "error",
      message:
        "Contact is ready, but RESEND_API_KEY and CONTACT_EMAIL need to be set.",
    };
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return {
      status: "success",
      message: "Thanks, your message has been sent.",
    };
  } catch {
    return {
      status: "error",
      message: "The message could not be sent. Please try again in a moment.",
    };
  }
}
