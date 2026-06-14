import type { ChatbotFaqItem } from "@/lib/chatbot-types";
import { site } from "@/lib/site";

export const chatbotFaqItems: ChatbotFaqItem[] = [
  {
    id: "q1",
    category: "services",
    question: "What services do you offer?",
    answer:
      "Infinity Mobile offers mobile auto repair (diagnostics, brakes, tune-ups, A/C, engine/transmission, swaps, custom aftermarket), handyman services (general repairs, VCT flooring, screens), and exterior pressure washing. We come to your location across Citrus County.",
    keywords: ["services", "offer", "what do you do", "repairs", "handyman"],
    ctaType: "services",
    followUps: ["Do you come to me?", "How do I get a quote?", "Are you insured?"],
  },
  {
    id: "q2",
    category: "mobile",
    question: "Do you come to me?",
    answer:
      "Yes — that's what we do. Infinity Mobile is a fully mobile service. Michael brings the tools and expertise to your home, workplace, or job site in Citrus County. No shop visit required.",
    keywords: ["come to me", "mobile", "on site", "on-site", "my house", "driveway", "we come"],
    ctaType: "quote",
    followUps: ["What areas do you serve?", "How do I schedule?"],
  },
  {
    id: "q3",
    category: "location",
    question: "What areas do you serve?",
    answer:
      "We serve Citrus County, Florida — including Inverness, Crystal River, Beverly Hills, Homosassa, Lecanto, and surrounding communities. Call (352) 476-6586 to confirm we cover your address.",
    keywords: ["areas", "serve", "citrus county", "location", "where", "near me", "inverness", "crystal river"],
    ctaType: "call",
  },
  {
    id: "q4",
    category: "contact",
    question: "What is your phone number?",
    answer: `Call Infinity Mobile at ${site.phone}. Michael is happy to discuss your vehicle or project and schedule on-site service.`,
    keywords: ["phone", "number", "call", "reach", "telephone", "contact number"],
    ctaType: "call",
  },
  {
    id: "q5",
    category: "contact",
    question: "How can I contact you?",
    answer: `Phone: ${site.phone}. Email: ${site.email}. You can also fill out the quote form on this site — include your vehicle or project details and preferred contact method.`,
    keywords: ["contact", "email", "reach", "message", "get in touch"],
    ctaType: "quote",
  },
  {
    id: "q6",
    category: "contact",
    question: "How do I get a quote?",
    answer:
      "Scroll to the quote form on this page or tap Get a Quote anywhere on the site. Include your name, phone, service needed, vehicle info (if applicable), and location. You can also upload a photo. Michael will follow up promptly.",
    keywords: ["quote", "estimate", "request quote", "get quote", "pricing request"],
    ctaType: "quote",
  },
  {
    id: "q7",
    category: "pricing",
    question: "Do you provide estimates?",
    answer:
      "Yes. Michael provides honest, upfront estimates before work begins. For auto issues, describe symptoms or send a photo through the quote form for a faster ballpark.",
    keywords: ["estimates", "pricing", "how much", "cost", "price"],
    ctaType: "quote",
  },
  {
    id: "q8",
    category: "pricing",
    question: "Are estimates free?",
    answer:
      "Many quotes can be discussed over the phone at no charge. Diagnostics and on-site inspections may involve a fee depending on complexity — Michael will always explain costs before starting work.",
    keywords: ["free estimate", "free quote", "charge for estimate"],
    ctaType: "call",
  },
  {
    id: "q9",
    category: "general",
    question: "Are you LLC and insured?",
    answer:
      "Yes. Infinity Mobile is LLC registered and fully insured. You get professional, accountable service with the protection you deserve.",
    keywords: ["llc", "insured", "insurance", "licensed", "bonded"],
    ctaType: "call",
  },
  {
    id: "q10",
    category: "general",
    question: "Who owns Infinity Mobile?",
    answer: `${site.owner} owns and operates Infinity Mobile — a mobile mechanic and handyman serving Citrus County. Professional, reliable, and committed to honest service.`,
    keywords: ["owner", "michael", "caputo", "who runs", "who owns"],
  },
  {
    id: "q11",
    category: "appointments",
    question: "How do I schedule service?",
    answer: `Call ${site.phone} or submit the online quote form. Tell us your location, vehicle or project details, and urgency — we'll find the soonest available mobile appointment.`,
    keywords: ["schedule", "book", "appointment", "set up", "arrange"],
    ctaType: "quote",
  },
  {
    id: "q12",
    category: "appointments",
    question: "How fast can you respond?",
    answer:
      "Infinity Mobile prides itself on fast response across Citrus County. For urgent issues like brake problems or no-start situations, call directly for the quickest scheduling.",
    keywords: ["fast", "response", "how soon", "quick", "urgent", "emergency"],
    ctaType: "call",
  },
  {
    id: "q13",
    category: "diagnostics",
    question: "Do you offer diagnostics?",
    answer:
      "Yes. We perform computer diagnostics, OBD-II scanning, electrical troubleshooting, and honest assessments. You'll get a clear explanation before any repair is recommended.",
    keywords: ["diagnostics", "diagnose", "scan", "check engine", "obd"],
    ctaType: "quote",
  },
  {
    id: "q14",
    category: "diagnostics",
    question: "My check engine light is on. Can you help?",
    answer:
      "Absolutely. A solid check engine light needs diagnosis soon; a flashing light can mean a serious misfire — reduce driving and call (352) 476-6586. We'll scan, test, and explain what's needed.",
    keywords: ["check engine", "cel", "engine light", "warning light"],
    ctaType: "call",
  },
  {
    id: "q15",
    category: "brakes",
    question: "Do you repair brakes?",
    answer:
      "Yes — pads, rotors, calipers, fluid service, and brake noise diagnosis. All done mobile at your location so you don't need a tow.",
    keywords: ["brakes", "brake repair", "pads", "rotors", "stopping"],
    ctaType: "quote",
  },
  {
    id: "q16",
    category: "brakes",
    question: "My brakes are squeaking. What should I do?",
    answer:
      "Squeaking can mean worn pads or glazed rotors. Don't wait too long — metal-on-metal grinding is dangerous. Call (352) 476-6586 to schedule a mobile brake inspection.",
    keywords: ["squeak", "squealing", "brake noise", "grinding brakes"],
    ctaType: "call",
  },
  {
    id: "q17",
    category: "ac",
    question: "Do you service car A/C?",
    answer:
      "Yes. Mobile A/C diagnosis and repair — recharge, leak detection, compressor issues, and blower problems. Essential for Florida heat.",
    keywords: ["ac", "air conditioning", "cooling", "a/c", "not cold"],
    ctaType: "quote",
  },
  {
    id: "q18",
    category: "ac",
    question: "My A/C is blowing warm air.",
    answer:
      "Warm A/C can be low refrigerant, a leak, compressor failure, or a blend door issue. We'll diagnose at your location before recommending a fix — call (352) 476-6586.",
    keywords: ["warm air", "ac not cold", "blowing hot", "no cold air"],
    ctaType: "call",
  },
  {
    id: "q19",
    category: "services",
    question: "Do you do tune-ups?",
    answer:
      "Yes — spark plugs, filters, fluid checks, ignition and fuel system inspection, and preventive maintenance to keep your engine running smooth.",
    keywords: ["tune up", "tune-up", "maintenance", "oil change"],
    ctaType: "quote",
  },
  {
    id: "q20",
    category: "engine",
    question: "Do you repair engines and transmissions?",
    answer:
      "Yes. Engine diagnostics, transmission service, timing components, gaskets, and major drivetrain work — handled with precision at your location.",
    keywords: ["engine", "transmission", "drivetrain", "motor"],
    ctaType: "quote",
  },
  {
    id: "q21",
    category: "engine",
    question: "Do you do engine swaps?",
    answer:
      "Yes. Engine and drivetrain swaps for performance builds and restorations — planning, installation, and project support. Discuss your build through the quote form or by phone.",
    keywords: ["engine swap", "swap", "ls swap", "motor swap"],
    ctaType: "quote",
  },
  {
    id: "q22",
    category: "services",
    question: "Do you install aftermarket parts?",
    answer:
      "Yes — suspension, exhaust, intake, wheels, custom lighting, and performance upgrades. Built to your vision with quality workmanship.",
    keywords: ["aftermarket", "custom", "upgrade", "performance parts", "mods"],
    ctaType: "quote",
  },
  {
    id: "q23",
    category: "handyman",
    question: "What handyman services do you offer?",
    answer:
      "General handyman repairs, fixture installation, door and hardware work, small carpentry, VCT flooring installation, and screen repair/replacement for windows, doors, and enclosures.",
    keywords: ["handyman", "home repair", "fix", "install", "house"],
    ctaType: "services",
  },
  {
    id: "q24",
    category: "handyman",
    question: "Do you install VCT flooring?",
    answer:
      "Yes. Professional VCT tile flooring for commercial and residential spaces — surface prep, precision layout, and durable finishes.",
    keywords: ["vct", "flooring", "tile floor", "commercial floor"],
    ctaType: "quote",
  },
  {
    id: "q25",
    category: "handyman",
    question: "Do you repair screens?",
    answer:
      "Yes — window and door screens, pool and patio enclosures, custom sizing and installation. Keep bugs out and airflow in.",
    keywords: ["screens", "screen repair", "screen door", "pool enclosure"],
    ctaType: "quote",
  },
  {
    id: "q26",
    category: "exterior",
    question: "Do you offer pressure washing?",
    answer:
      "Yes. Driveways, sidewalks, siding, decks, fences, and outdoor structures — professional results without the hassle.",
    keywords: ["pressure washing", "power wash", "driveway cleaning", "exterior clean"],
    ctaType: "quote",
  },
  {
    id: "q27",
    category: "mobile",
    question: "Why choose a mobile mechanic?",
    answer:
      "You save time — no tow truck, no waiting room, no dropping off your car. Michael comes to you with professional tools and honest diagnostics. One call for auto and handyman needs.",
    keywords: ["why mobile", "mobile mechanic", "advantage", "why choose"],
    followUps: ["Are you insured?", "What areas do you serve?"],
  },
  {
    id: "q28",
    category: "general",
    question: "My car won't start. Can you help?",
    answer:
      "Yes. No-start can be battery, starter, fuel, or ignition — we'll test systematically at your location. If it's unsafe where you are, mention that when you call (352) 476-6586.",
    keywords: ["won't start", "no start", "dead", "crank", "not starting"],
    ctaType: "call",
  },
  {
    id: "q29",
    category: "general",
    question: "What should I include in a quote request?",
    answer:
      "Your name, phone, service needed, vehicle year/make/model (for auto work), address or city, a description of the issue, and a photo if helpful. Select your preferred contact method.",
    keywords: ["what to include", "quote form", "information needed"],
    ctaType: "quote",
  },
  {
    id: "q30",
    category: "general",
    question: "Can you help with auto and home projects?",
    answer:
      "Yes — that's the Infinity Mobile advantage. One insured provider for your vehicle and your property. Brakes in the morning, handyman work in the afternoon — one call.",
    keywords: ["auto and home", "both", "vehicle and house", "convenience"],
    ctaType: "quote",
  },
  {
    id: "q31",
    category: "pricing",
    question: "Do you offer honest pricing?",
    answer:
      "Absolutely. No scare tactics or unnecessary upsells. Michael explains what you need, what can wait, and what it costs — then you decide.",
    keywords: ["honest", "fair", "trustworthy", "no upsell", "ripoff"],
  },
  {
    id: "q32",
    category: "general",
    question: "What makes Infinity Mobile different?",
    answer:
      "We come to you, we're LLC & insured, we cover auto repair AND handyman work, and we're a local Citrus County business with fast response and honest diagnostics.",
    keywords: ["different", "why infinity", "why choose us", "unique"],
    followUps: ["Do you come to me?", "Are you insured?"],
  },
  {
    id: "q33",
    category: "vehicleTypes",
    question: "What vehicles do you work on?",
    answer:
      "Cars, trucks, and SUVs — domestic and import. For engine swaps and custom work, describe your project and Michael will confirm fit for mobile service.",
    keywords: ["vehicles", "cars", "trucks", "suv", "makes", "models"],
  },
  {
    id: "q34",
    category: "general",
    question: "Can I upload a photo with my quote?",
    answer:
      "Yes. The quote form has an optional photo upload — great for showing leaks, damage, flooring areas, or screen issues. It helps Michael respond faster with accurate guidance.",
    keywords: ["photo", "picture", "upload", "image"],
    ctaType: "quote",
  },
  {
    id: "q35",
    category: "appointments",
    question: "What are your hours?",
    answer:
      "As a mobile service, hours are flexible by appointment. Call (352) 476-6586 for the soonest availability — including urgent same-day requests when possible.",
    keywords: ["hours", "open", "when open", "availability", "schedule hours"],
    ctaType: "call",
  },
  {
    id: "q36",
    category: "general",
    question: "Is my vehicle safe to drive?",
    answer:
      "If brakes, steering, or overheating feel wrong — stop driving and call us. For warning lights or new noises, schedule diagnostics soon. When in doubt, call (352) 476-6586 for guidance.",
    keywords: ["safe to drive", "unsafe", "dangerous", "should i drive"],
    ctaType: "call",
  },
  {
    id: "q37",
    category: "diagnostics",
    question: "Do you explain repairs before starting?",
    answer:
      "Always. You'll get a clear explanation of findings, repair options, and costs before any work begins. No surprises.",
    keywords: ["explain", "before starting", "communication", "approve"],
  },
  {
    id: "q38",
    category: "location",
    question: "Are you a local Citrus County business?",
    answer:
      "Yes. Infinity Mobile is proudly local — serving neighbors across Citrus County with personal service and fast response times.",
    keywords: ["local", "citrus county business", "community"],
  },
  {
    id: "q39",
    category: "contact",
    question: "Can I text you?",
    answer:
      "Select text message as your preferred contact method on the quote form, or call (352) 476-6586. We'll reach out using your preferred method.",
    keywords: ["text", "sms", "message"],
    ctaType: "quote",
  },
  {
    id: "q40",
    category: "general",
    question: "How do I get started?",
    answer:
      `Call ${site.phone} or submit a quote on this page. Tell us your location, what you need, and any urgency — Michael will take it from there.`,
    keywords: ["get started", "begin", "first time", "new customer"],
    ctaType: "quote",
  },
];
