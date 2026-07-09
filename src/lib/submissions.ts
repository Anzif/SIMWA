// Shared client-side handling for form submissions on this static site.
// There's no backend, so submissions are persisted in the browser's
// localStorage and a copy is offered as a downloadable text file.

export type SubmissionKind = "message" | "suggestion";

export type Submission = {
  kind: SubmissionKind;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
};

const STORAGE_KEY = "simwa-submissions";

export function saveSubmission(
  kind: SubmissionKind,
  fields: { name: string; email: string; message: string },
): void {
  const submission: Submission = {
    kind,
    name: fields.name.trim(),
    email: fields.email.trim(),
    message: fields.message.trim(),
    submittedAt: new Date().toISOString(),
  };

  // Persist to the browser so nothing is lost on a static site.
  const existing = localStorage.getItem(STORAGE_KEY);
  const all: Submission[] = existing ? JSON.parse(existing) : [];
  all.push(submission);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));

  // Offer the submission as a downloadable text file.
  const contents = `Type: ${submission.kind}\nName: ${submission.name}\nEmail: ${submission.email}\nDate: ${submission.submittedAt}\n\n${submission.message}\n`;
  const blob = new Blob([contents], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `simwa-${submission.kind}-${Date.now()}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
