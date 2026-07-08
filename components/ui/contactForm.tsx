"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      form.reset();
      setState("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setState("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-8" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div>
        <label htmlFor="name" className="text-mono-meta mb-2 block text-muted-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={state === "submitting"}
          className="w-full border-b border-outline-variant bg-transparent py-2 text-body-lg outline-none transition-colors focus:border-primary disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-mono-meta mb-2 block text-muted-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={state === "submitting"}
          className="w-full border-b border-outline-variant bg-transparent py-2 text-body-lg outline-none transition-colors focus:border-primary disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-mono-meta mb-2 block text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={state === "submitting"}
          className="w-full resize-y border-b border-outline-variant bg-transparent py-2 text-body-lg outline-none transition-colors focus:border-primary disabled:opacity-50"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={state === "submitting" || state === "success"}
          className="group relative inline-flex overflow-hidden border border-outline px-6 py-3 text-mono-meta text-foreground transition-colors disabled:opacity-50"
        >
          <span
            className="absolute inset-y-0 left-0 z-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"
            aria-hidden
          />
          <span className="relative z-10 transition-colors group-hover:text-on-primary">
            {state === "submitting" ? "SENDING..." : "SEND MESSAGE"}
          </span>
        </button>

        <a
          href="mailto:mattsmithwebdev@gmail.com"
          className="text-mono-meta text-muted-foreground underline decoration-outline-variant underline-offset-4 transition-colors hover:text-secondary"
        >
          mattsmithwebdev@gmail.com
        </a>
      </div>

      {state === "success" && (
        <p
          className="border border-outline-variant bg-surface-container p-4 text-body-lg text-muted-foreground"
          role="status"
        >
          Thanks for your message — I&apos;ll get back to you soon.
        </p>
      )}

      {state === "error" && (
        <p className="text-body-lg text-error" role="alert">
          {errorMessage}{" "}
          <a href="mailto:mattsmithwebdev@gmail.com" className="underline">
            Email me directly
          </a>{" "}
          if the issue persists.
        </p>
      )}
    </form>
  );
}
