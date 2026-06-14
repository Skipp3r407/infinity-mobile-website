import type { ChatbotCategory } from "@/lib/chatbot-types";
import { chatbotFaqItems } from "@/lib/chatbot-faq-data";
import { site } from "@/lib/site";

export { chatbotFaqItems };

export const faqCategories: ChatbotCategory[] = [
  { id: "general", label: "General" },
  { id: "services", label: "Auto services" },
  { id: "mobile", label: "Mobile service" },
  { id: "handyman", label: "Handyman" },
  { id: "exterior", label: "Exterior" },
  { id: "diagnostics", label: "Diagnostics" },
  { id: "brakes", label: "Brakes" },
  { id: "ac", label: "A/C" },
  { id: "engine", label: "Engine & trans" },
  { id: "pricing", label: "Pricing" },
  { id: "location", label: "Service area" },
  { id: "appointments", label: "Scheduling" },
  { id: "contact", label: "Contact" },
  { id: "vehicleTypes", label: "Vehicles" },
];

export const welcomeQuickActions = [
  { id: "w1", label: "Services", faqId: "q1" as const },
  { id: "w2", label: "We come to you", faqId: "q2" as const },
  { id: "w3", label: "Get a quote", faqId: "q6" as const },
  { id: "w4", label: "Call now", staticKey: "call" as const },
  { id: "w5", label: "Handyman", faqId: "q23" as const },
  { id: "w6", label: "Service area", faqId: "q3" as const },
] as const;

export const staticQuickReplies: Record<string, string> = {
  call: `Call Infinity Mobile at ${site.phone}. Michael answers service questions and schedules mobile appointments across Citrus County.`,
  hours: `Infinity Mobile operates by appointment with flexible mobile scheduling. Call ${site.phone} for the soonest availability — urgent requests welcome.`,
};

export const WELCOME_MESSAGE = `Hi! I'm the Infinity Mobile assistant. Ask about mobile auto repair, handyman services, quotes, or service areas in Citrus County.`;
