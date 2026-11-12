"use server";

import { headers } from "next/headers";
import { company } from "@/content/site";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
  /** Echo of submitted values so the form keeps them after a failed submit. */
  values?: Record<string, string>;
};

const MIN_FILL_MS = 3_000; // humans take longer than this to fill the form
const MAX_LINKS = 3;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60_000 };

// Best-effort, per-instance rate limit. On serverless hosts each instance has its own map;
// put a shared limiter (or Cloudflare Turnstile) in front if spam gets through.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  // Prune stale entries so the map can't grow without bound on a long-running server.
  if (hits.size > 1000) {
    for (const [key, times] of hits) if (now - times[times.length - 1] >= RATE_LIMIT.windowMs) hits.delete(key);
  }
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT.max;
}

const field = (fd: FormData, key: string, max: number) => String(fd.get(key) ?? "").trim().slice(0, max);

export async function sendEnquiry(_prev: EnquiryState, fd: FormData): Promise<EnquiryState> {
  const values = {
    name: field(fd, "name", 120),
    company: field(fd, "company", 160),
    email: field(fd, "email", 200),
    phone: field(fd, "phone", 40),
    service: field(fd, "service", 120),
    message: field(fd, "message", 5000),
  };

  // Spam checks. Bots get a normal-looking success so they don't adapt.
  const honeypot = field(fd, "website", 200);
  const startedAt = Number(fd.get("startedAt"));
  const tooFast = !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS;
  const linkCount = (values.message.match(/https?:\/\/|www\./gi) ?? []).length;
  if (honeypot || tooFast || linkCount > MAX_LINKS) {
    return { status: "success" };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return {
      status: "error",
      message: `Too many enquiries from this connection. Please try again later or email ${company.email}.`,
      values,
    };
  }

  const fieldErrors: EnquiryState["fieldErrors"] = {};
  if (!values.name) fieldErrors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) fieldErrors.email = "Please enter a valid email address.";
  if (values.message.length < 10) fieldErrors.message = "Please tell us a little about your scope.";
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors, values };
  }

  const subject = `Website enquiry: ${values.service || "General"} – ${values.name}${values.company ? `, ${values.company}` : ""}`;
  const text = [
    `Name: ${values.name}`,
    `Company: ${values.company || "-"}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "-"}`,
    `Service: ${values.service || "-"}`,
    "",
    values.message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || company.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== "production") {
      // Local development without email configured: log instead of sending.
      console.info(`[contact form] Email not configured; would send to ${to}:\n${subject}\n\n${text}`);
      return { status: "success" };
    }
    console.error("[contact form] RESEND_API_KEY / CONTACT_FROM_EMAIL not set; enquiry not sent.");
    return {
      status: "error",
      message: `Sorry, the form isn’t available right now. Please email ${company.email} or call ${company.phone}.`,
      values,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: values.email, subject, text }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  } catch (err) {
    console.error("[contact form] send failed", err);
    return {
      status: "error",
      message: `Sorry, something went wrong sending your enquiry. Please email ${company.email} or call ${company.phone}.`,
      values,
    };
  }

  return { status: "success" };
}
