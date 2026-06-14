"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionGlow } from "@/components/effects";
import { Toast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { Upload } from "lucide-react";
import { useState } from "react";

const contactMethods = [
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
  { value: "text", label: "Text Message" },
];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();

    if (!name || !phone || !email) {
      setStatus("error");
      setError("Please fill in all required fields.");
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setStatus("error");
      setError("Please enter a valid phone number.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error ?? "Something went wrong. Please call us directly.");
        return;
      }
      setStatus("success");
      setToastVisible(true);
      form.reset();
      setFileName(null);
      setTimeout(() => setToastVisible(false), 6000);
    } catch {
      setStatus("error");
      setError("Network error. Please call us at " + site.phone);
    }
  }

  const fieldClass =
    "focus-ring w-full rounded-lg border border-white/10 bg-bg px-4 py-3 text-sm text-fg placeholder:text-zinc-600 transition focus:border-orange/40";
  const labelClass = "text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500";

  return (
    <section id="quote" className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow position="top-right" color="purple" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-purple">Get Started</p>
          <h2 className="font-display mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
            Request a <span className="text-gradient-accent">Quote</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
            Tell us what you need and we will get back to you promptly. For urgent matters, call{" "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-orange hover:underline">
              {site.phone}
            </a>
            .
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <form
            onSubmit={onSubmit}
            className="metallic-border hover-lift rounded-2xl bg-bg-elevated p-6 sm:p-10"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 sm:col-span-1">
                <span className={labelClass}>
                  Name <span className="text-orange">*</span>
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className={fieldClass}
                />
              </label>
              <label className="grid gap-2 sm:col-span-1">
                <span className={labelClass}>
                  Phone <span className="text-orange">*</span>
                </span>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(352) 476-6586"
                  className={fieldClass}
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2">
              <span className={labelClass}>
                Email <span className="text-orange">*</span>
              </span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@email.com"
                className={fieldClass}
              />
            </label>

            <label className="mt-5 grid gap-2">
              <span className={labelClass}>Service Needed</span>
              <select name="service" className={cn(fieldClass, "appearance-none")} defaultValue="">
                <option value="">Select a service…</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Other / Not Sure</option>
              </select>
            </label>

            <label className="mt-5 grid gap-2">
              <span className={labelClass}>Vehicle Year / Make / Model</span>
              <input
                name="vehicle"
                type="text"
                placeholder="e.g. 2018 Ford F-150 (optional for non-auto services)"
                className={fieldClass}
              />
            </label>

            <label className="mt-5 grid gap-2">
              <span className={labelClass}>Address or City</span>
              <input
                name="location"
                type="text"
                placeholder="Your address or city in Citrus County"
                className={fieldClass}
              />
            </label>

            <label className="mt-5 grid gap-2">
              <span className={labelClass}>Message</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Describe the issue or project…"
                className={cn(fieldClass, "resize-y")}
              />
            </label>

            <label className="mt-5 grid gap-2">
              <span className={labelClass}>Upload Photo (Optional)</span>
              <div className="relative">
                <input
                  name="photo"
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 cursor-pointer opacity-0"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                />
                <div
                  className={cn(
                    fieldClass,
                    "flex cursor-pointer items-center gap-3 border-dashed",
                  )}
                >
                  <Upload className="h-5 w-5 shrink-0 text-zinc-500" aria-hidden />
                  <span className="text-sm text-zinc-500">
                    {fileName ?? "Click to upload a photo of the issue"}
                  </span>
                </div>
              </div>
            </label>

            <fieldset className="mt-5">
              <legend className={labelClass}>Preferred Contact Method</legend>
              <div className="mt-3 flex flex-wrap gap-4">
                {contactMethods.map((m) => (
                  <label key={m.value} className="flex cursor-pointer items-center gap-2 text-sm text-zinc-300">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={m.value}
                      defaultChecked={m.value === "phone"}
                      className="accent-orange"
                    />
                    {m.label}
                  </label>
                ))}
              </div>
            </fieldset>

            {error ? (
              <p className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert">
                {error}
              </p>
            ) : null}

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Submit Request"}
            </Button>
          </form>
        </ScrollReveal>
      </div>

      <Toast
        message="Your quote request has been received! We will contact you shortly."
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
        variant="success"
      />
    </section>
  );
}
