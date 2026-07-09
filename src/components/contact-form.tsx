"use client";

import { useState } from "react";
import { sendSubmission } from "@/lib/submissions";

export function ContactForm() {
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
      await sendSubmission("message", { name, email, message, honeypot });
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
    <form onSubmit={handleSubmit} className="rounded-3xl border border-emerald-900/10 bg-white p-8 shadow-sm">
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
        disabled={status === "sending"}
        className="mt-4 rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "sent" && (
        <p className="mt-4 text-sm font-medium text-emerald-700">
          Thank you! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-red-600">{error}</p>
      )}
    </form>
  );
}
