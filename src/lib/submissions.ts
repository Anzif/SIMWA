// Client-side form delivery for this static site.
//
// Submissions are sent to Web3Forms (https://web3forms.com), a free
// form-to-email service that needs no backend. Each submission is emailed to
// the address the access key is registered to.
//
// SETUP: create a free access key at https://web3forms.com (enter the
// destination email; the key is shown instantly). Paste it below. No
// activation step is required — submissions are delivered immediately.

export type SubmissionKind = "message" | "suggestion";

// Web3Forms access key, tied to the destination email (anzifmazeez@live.com).
const ACCESS_KEY = "4078e7f9-2a3f-4078-9e06-54d55c3154e6";
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

export async function sendSubmission(
  kind: SubmissionKind,
  fields: { name: string; email: string; message: string; honeypot?: string },
): Promise<void> {
  // Honeypot: humans leave this empty; bots tend to fill it. Silently accept
  // (pretend success) without sending so bots get no signal.
  if (fields.honeypot && fields.honeypot.trim() !== "") {
    return;
  }

  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `New SIMWA ${kind} from ${fields.name.trim() || "website visitor"}`,
      from_name: "SIMWA Website",
      type: kind,
      name: fields.name.trim(),
      email: fields.email.trim(),
      message: fields.message.trim(),
      // Web3Forms native honeypot; empty for real users.
      botcheck: "",
    }),
  });

  const data: { success?: boolean; message?: string } = await response
    .json()
    .catch(() => ({}));

  if (!response.ok || !data.success) {
    throw new Error(data.message || `Submission failed (${response.status}).`);
  }
}
