"use client";

import { useSearchParams } from "next/navigation";
import { type RefObject, Suspense, startTransition, useActionState, useEffect, useRef, useState } from "react";
import { type EnquiryState, sendEnquiry } from "@/app/contact/actions";
import { fleet } from "@/content/fleet";
import { services } from "@/content/services";

const initialState: EnquiryState = { status: "idle" };
const OTHER = "Other / not sure";

/**
 * Reads ?service=<slug> or ?vessel=<slug> (set by "Discuss your scope" / "Request availability")
 * and pre-fills the form. Kept in its own Suspense boundary so the rest of the page prerenders.
 */
function QueryPrefill({
  onService,
  messageRef,
}: {
  onService: (title: string) => void;
  messageRef: RefObject<HTMLTextAreaElement | null>;
}) {
  const params = useSearchParams();
  useEffect(() => {
    const service = services.find((s) => s.slug === params.get("service"));
    const vessel = fleet.find((v) => v.slug === params.get("vessel"));
    if (service || vessel) onService(service ? service.title : "Vessel charter");
    if (vessel && messageRef.current && !messageRef.current.value) {
      messageRef.current.value = `I'd like to check the availability of ${vessel.name}.\n\nScope:\nLocation:\nDates:`;
    }
  }, [params, onService, messageRef]);
  return null;
}

const inputClass =
  "mt-2 block w-full min-h-12 rounded-[2px] border border-[#B9CCDA] bg-white px-4 py-3 text-ink placeholder:text-slate/70 focus:border-blue focus:outline-2 focus:outline-offset-0 focus:outline-blue aria-[invalid=true]:border-[#B42318]";

export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState);
  const startedAt = useRef<HTMLInputElement>(null);
  // Controlled: React resets uncontrolled fields after an action, which would drop a pre-filled choice.
  const [service, setService] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Time-trap: record when the form first became interactive (checked on the server).
  // Re-applied after every submit because React resets uncontrolled fields when an action finishes.
  const mountedAt = useRef(0);
  useEffect(() => {
    if (!mountedAt.current) mountedAt.current = Date.now();
    if (startedAt.current) startedAt.current.value = String(mountedAt.current);
  }, [state]);

  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="border-l-4 border-orange bg-mist p-8 outline-none">
        <h2 className="font-display text-2xl text-ink">Thank you, we’ve received your enquiry.</h2>
        <p className="mt-3 text-slate">Our team will reply within one working day.</p>
      </div>
    );
  }

  const v = state.values ?? {};
  const err = state.fieldErrors ?? {};

  return (
    <form
      action={formAction}
      // Submit without React's automatic form reset, so a failed submit keeps every field
      // (including the pre-filled service) as the visitor left it. `action` still covers no-JS.
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        startTransition(() => formAction(data));
      }}
      noValidate
      className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
      <Suspense fallback={null}>
        <QueryPrefill onService={setService} messageRef={messageRef} />
      </Suspense>

      {state.status === "error" && state.message && (
        <p role="alert" className="border-l-4 border-[#B42318] bg-[#FEF3F2] px-4 py-3 text-[#7A271A] sm:col-span-2">
          {state.message}
        </p>
      )}

      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Name <span className="text-slate">(required)</span>
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          defaultValue={v.name}
          aria-invalid={!!err.name}
          aria-describedby={err.name ? "name-error" : undefined}
          className={inputClass}
        />
        {err.name && (
          <p id="name-error" className="mt-1.5 text-sm text-[#B42318]">
            {err.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="text-sm font-medium text-ink">
          Company
        </label>
        <input id="company" name="company" autoComplete="organization" defaultValue={v.company} className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email <span className="text-slate">(required)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={v.email}
          aria-invalid={!!err.email}
          aria-describedby={err.email ? "email-error" : undefined}
          className={inputClass}
        />
        {err.email && (
          <p id="email-error" className="mt-1.5 text-sm text-[#B42318]">
            {err.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-ink">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" defaultValue={v.phone} className={inputClass} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="service" className="text-sm font-medium text-ink">
          Service
        </label>
        <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)} className={inputClass}>
          <option value="">Choose a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value={OTHER}>{OTHER}</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Your scope <span className="text-slate">(required)</span>
        </label>
        <p id="message-hint" className="mt-1 text-sm text-slate">
          Tell us the scope, location and dates.
        </p>
        <textarea
          id="message"
          name="message"
          ref={messageRef}
          required
          rows={6}
          defaultValue={v.message}
          aria-invalid={!!err.message}
          aria-describedby={err.message ? "message-hint message-error" : "message-hint"}
          className={`${inputClass} resize-y`}
        />
        {err.message && (
          <p id="message-error" className="mt-1.5 text-sm text-[#B42318]">
            {err.message}
          </p>
        )}
      </div>

      {/* Spam traps: hidden from people and assistive tech, filled in by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedAt} type="hidden" name="startedAt" defaultValue="" />

      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-12 cursor-pointer items-center rounded-[2px] bg-orange px-7 font-display text-[15px] font-medium tracking-[0.06em] text-ink uppercase transition-colors hover:bg-orange-bright disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Sending…" : "Send enquiry"}
        </button>
        <p className="text-sm text-slate">We reply within one working day.</p>
      </div>
      <p className="text-sm text-slate sm:col-span-2">
        We use your details only to respond to your enquiry. See our{" "}
        <a href="/terms-of-service#privacy" className="text-blue underline hover:text-indigo">
          privacy notice
        </a>
        .
      </p>
    </form>
  );
}
