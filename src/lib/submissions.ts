// Client-side form delivery for this static site.
//
// Submissions are sent to FormSubmit.co (https://formsubmit.co), a free
// form-to-email service that needs no backend or API key. Each submission is
// emailed to the address in the endpoint below.
//
// NOTE: FormSubmit requires a one-time activation. The FIRST submission after
// deploy triggers a confirmation email to the owner address — click the link
// in that email once, and all future submissions are delivered automatically.

export type SubmissionKind = "message" | "suggestion";

// The AJAX endpoint keeps the user on-page (no redirect). To hide the raw
// email from the page source, replace this with the hashed endpoint FormSubmit
// shows in your dashboard after activation (e.g. .../ajax/xxxxxxxx).
const FORM_ENDPOINT = "https://formsubmit.co/ajax/anzifmazeez@live.com";

export async function sendSubmission(
  kind: SubmissionKind,
  fields: { name: string; email: string; message: string },
): Promise<void> {
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `New SIMWA ${kind} from ${fields.name.trim() || "website visitor"}`,
      _template: "table",
      _captcha: "false",
      type: kind,
      name: fields.name.trim(),
      email: fields.email.trim(),
      message: fields.message.trim(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Submission failed (${response.status})`);
  }

  const data: { success?: string | boolean; message?: string } = await response.json();
  if (data.success !== true && data.success !== "true") {
    throw new Error(data.message || "Submission failed. Please try again.");
  }
}
