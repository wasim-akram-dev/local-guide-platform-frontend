export type FAQCategory =
  | "Tourist"
  | "Guide"
  | "Payment"
  | "Account"
  | "Security";

export type FAQ = {
  question: string;
  answer: string;
  category: FAQCategory;
};

export const faqs: FAQ[] = [
  {
    question: "What is Locana?",
    answer:
      "Locana is a local guide platform that connects travelers with passionate local experts who offer authentic and personalized travel experiences.",
    category: "Account",
  },
  {
    question: "How do I create an account?",
    answer: "You can register by selecting your role as a Tourist or Guide.",
    category: "Account",
  },
  {
    question: "Who can become a guide?",
    answer:
      "Anyone with strong local knowledge and a passion for sharing their city can become a guide.",
    category: "Guide",
  },
  {
    question: "How does the booking process work?",
    answer:
      "Tourists request a booking, guides accept or reject it, and once approved the booking is confirmed.",
    category: "Tourist",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "Locana supports secure online payments through Stripe or SSLCommerz.",
    category: "Payment",
  },
  {
    question: "Can I cancel a booking?",
    answer:
      "Yes. Tourists can cancel bookings based on the cancellation policy.",
    category: "Tourist",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Yes. Locana uses JWT authentication, password hashing, and secure APIs.",
    category: "Security",
  },
  {
    question: "Can guides manage their tour listings?",
    answer:
      "Guides can create, update, and deactivate tour listings from their dashboard.",
    category: "Guide",
  },
];
