import { site } from "@/lib/site";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    if (!name || !phone || !email) {
      return NextResponse.json({ ok: false, error: "Name, phone, and email are required." }, { status: 400 });
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      return NextResponse.json({ ok: false, error: "Invalid phone number." }, { status: 400 });
    }

    const payload = {
      name,
      phone,
      email,
      service: String(formData.get("service") ?? ""),
      vehicle: String(formData.get("vehicle") ?? ""),
      location: String(formData.get("location") ?? ""),
      message: String(formData.get("message") ?? ""),
      contactMethod: String(formData.get("contactMethod") ?? "phone"),
      hasPhoto: formData.get("photo") instanceof File && (formData.get("photo") as File).size > 0,
      submittedAt: new Date().toISOString(),
      business: site.name,
    };

    console.info("[Infinity Mobile] Quote request received:", payload);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process your request. Please call us directly." },
      { status: 500 },
    );
  }
}
