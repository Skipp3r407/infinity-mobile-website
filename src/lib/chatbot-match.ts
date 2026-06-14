import type { ChatbotFaqItem } from "@/lib/chatbot-types";

function normalize(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[?!.,;:]+$/g, "");
}

function tokenize(s: string): string[] {
  return normalize(s)
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

export function findBestFaqMatch(
  userInput: string,
  items: ChatbotFaqItem[],
): ChatbotFaqItem | null {
  const raw = userInput.trim();
  if (!raw) return null;

  const n = normalize(raw);
  const tokens = new Set(tokenize(raw));

  let best: ChatbotFaqItem | null = null;
  let bestScore = 0;

  for (const item of items) {
    const qn = normalize(item.question);
    if (n === qn) return item;
  }

  for (const item of items) {
    const qn = normalize(item.question);
    if (n.includes(qn) || qn.includes(n)) return item;
  }

  for (const item of items) {
    let score = 0;
    for (const kw of item.keywords) {
      const kn = kw.toLowerCase();
      if (n.includes(kn)) score += 3;
      else if (tokens.has(kn)) score += 2;
      else {
        for (const t of tokens) {
          if (t.includes(kn) || kn.includes(t)) score += 1;
        }
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  if (bestScore >= 2) return best;
  return null;
}

const greetingPatterns = /^(hi|hello|hey|howdy|good morning|good afternoon|good evening|yo)\b/i;
const thanksPatterns = /^(thanks|thank you|thx|appreciate it)/i;
const byePatterns = /^(bye|goodbye|see you|later)\b/i;

export function getConversationalReply(
  input: string,
): { text: string; followUps?: string[] } | null {
  const n = normalize(input);

  if (greetingPatterns.test(n)) {
    return {
      text: "Hey there! I'm the Infinity Mobile assistant. Ask me about mobile auto repair, handyman work, pricing, or how to request a quote.",
      followUps: ["What services do you offer?", "Do you come to me?", "How do I get a quote?"],
    };
  }

  if (thanksPatterns.test(n)) {
    return {
      text: "You're welcome! If you need anything else, just ask — or call Michael directly for the fastest help.",
      followUps: ["Call now", "Request a quote"],
    };
  }

  if (byePatterns.test(n)) {
    return {
      text: "Take care! Infinity Mobile is here whenever you need mobile service in Citrus County.",
    };
  }

  return null;
}
