"use client";

import { useState } from "react";
import { saveSubmission } from "@/lib/submissions";

export function SuggestionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    saveSubmission("suggestion", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 lg:grid-cols-2">
      <input
        className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <input
        type="email"
        className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <textarea
        className="lg:col-span-2 min-h-32 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300"
        placeholder="Your suggestion"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />
      <button
        type="submit"
        className="lg:col-span-2 w-fit rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
      >
        Submit Suggestion
      </button>
      {sent && (
        <p className="lg:col-span-2 text-sm font-medium text-emerald-300">
          Thank you! Your suggestion has been saved and a copy downloaded.
        </p>
      )}
    </form>
  );
}
