"use client";

import { useState } from "react";

type Submission = {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
};

const STORAGE_KEY = "simwa-messages";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const submission: Submission = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    // Persist to the browser so nothing is lost on a static site.
    const existing = localStorage.getItem(STORAGE_KEY);
    const messages: Submission[] = existing ? JSON.parse(existing) : [];
    messages.push(submission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));

    // Also offer the message as a downloadable text file.
    const contents = `Name: ${submission.name}\nEmail: ${submission.email}\nDate: ${submission.submittedAt}\n\n${submission.message}\n`;
    const blob = new Blob([contents], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `simwa-message-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

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
