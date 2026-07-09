"use client";

import { useState } from "react";
import { saveSubmission } from "@/lib/submissions";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    saveSubmission("message", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-emerald-900/10 bg-white p-8 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-2xl border border-slate-200 px-4 py-3"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="email"
          className="rounded-2xl border border-slate-200 px-4 py-3"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <textarea
        className="mt-4 min-h-32 w-full rounded-2xl border border-slate-200 px-4 py-3"
        placeholder="Your message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />
      <button
        type="submit"
        className="mt-4 rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
      >
        Send Message
      </button>
      {sent && (
        <p className="mt-4 text-sm font-medium text-emerald-700">
          Thank you! Your message has been saved and a copy downloaded.
        </p>
      )}
    </form>
  );
}
