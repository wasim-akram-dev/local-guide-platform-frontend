"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { FAQ, FAQCategory } from "./faq-data";

const categories: (FAQCategory | "All")[] = [
  "All",
  "Tourist",
  "Guide",
  "Payment",
  "Account",
  "Security",
];

type Props = {
  faqs: FAQ[];
};

export default function FAQClient({ faqs }: Props) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;

      const matchesSearch =
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory, faqs]);

  return (
    <>
      {/* SEARCH + FILTER */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition
                  ${
                    activeCategory === category
                      ? "bg-primary text-white border-primary"
                      : "bg-white hover:bg-muted"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        {filteredFaqs.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No questions found. Try another keyword or category.
          </p>
        ) : (
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border rounded-2xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </section>
    </>
  );
}
