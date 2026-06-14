export type ChatbotCtaType = "call" | "quote" | "services";

export type ChatbotFaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
  keywords: string[];
  ctaType?: ChatbotCtaType;
  followUps?: string[];
};

export type ChatbotCategory = {
  id: string;
  label: string;
};
