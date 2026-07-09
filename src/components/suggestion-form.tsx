"use client";

import { useState } from "react";
import { sendSubmission } from "@/lib/submissions";

export function SuggestionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await sendSubmission("suggestion", { name, email, message, honeypot });
      setName("");
      setEmail("");
      setMessage("");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 lg:grid-cols-2">
      {/* Honeypot: hidden from users, filled only by bots. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
      />
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
        disabled={status === "sending"}
        className="lg:col-span-2 w-fit rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit Suggestion"}
      </button>
      {status === "sent" && (
        <p className="lg:col-span-2 text-sm font-medium text-emerald-300">
          Thank you! Your suggestion has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="lg:col-span-2 text-sm font-medium text-red-300">{error}</p>
      )}
    </form>
  );
}
