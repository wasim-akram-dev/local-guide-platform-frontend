import { HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import FAQClient from "./faq-client";
import { faqs } from "./faq-data";

export const metadata = {
  title: "FAQ | Locana",
  description: "Frequently Asked Questions about Locana",
};

export default function FAQPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="bg-linear-to-br from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <HelpCircle className="mx-auto mb-4" size={40} />
          <h1 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
            Find quick answers by searching or browsing categories.
          </p>
        </div>
      </section>

      {/* CLIENT INTERACTIVE PART */}
      <FAQClient faqs={faqs} />

      {/* CTA */}
      <section className="bg-muted/40">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <MessageCircle className="mx-auto mb-4 text-primary" size={36} />
          <h2 className="text-3xl font-semibold">Still have questions?</h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            If you didn’t find the answer you were looking for, our support team
            is always here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}
