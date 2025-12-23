import {
  CalendarCheck,
  Clock,
  CreditCard,
  LifeBuoy,
  Mail,
  Rocket,
  Star,
} from "lucide-react";

export const metadata = {
  title: "Help & Support | Locana",
  description: "Get help, support, and answers to common questions on Locana",
};

export default function HelpSupportPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="bg-linear-to-br from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <LifeBuoy className="mx-auto mb-4" size={40} />
          <h1 className="text-4xl md:text-5xl font-bold">Help & Support</h1>
          <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
            We’re here to help you get the best experience on Locana — whether
            you’re a traveler or a local guide.
          </p>
        </div>
      </section>

      {/* SUPPORT CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Getting Started */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="text-primary" />
              <h2 className="text-xl font-semibold">Getting Started</h2>
            </div>
            <ul className="list-disc ml-5 text-muted-foreground space-y-2">
              <li>Create an account as a Tourist or Guide</li>
              <li>Complete your profile for better visibility</li>
              <li>Explore tours or create your own listings</li>
            </ul>
          </div>

          {/* Booking & Trips */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <CalendarCheck className="text-primary" />
              <h2 className="text-xl font-semibold">Booking & Trips</h2>
            </div>
            <ul className="list-disc ml-5 text-muted-foreground space-y-2">
              <li>How to request a booking</li>
              <li>Understanding booking statuses</li>
              <li>Cancel or manage your trips</li>
            </ul>
          </div>

          {/* Payments */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="text-primary" />
              <h2 className="text-xl font-semibold">Payments</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Payments are processed securely through trusted providers. If you
              experience payment issues, please double-check your details or
              contact our support team.
            </p>
          </div>

          {/* Reviews */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <Star className="text-primary" />
              <h2 className="text-xl font-semibold">Reviews & Ratings</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Reviews can be submitted only after completing a tour. Honest
              feedback helps maintain trust and improves the Locana community.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SUPPORT */}
      <section className="bg-muted/40">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold mb-6">Still Need Help?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            If you can’t find what you’re looking for, our support team is
            always ready to assist you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm">
            <div className="flex items-center gap-3 justify-center">
              <Mail className="text-primary" />
              <a
                href="mailto:support@locana.com"
                className="font-medium hover:underline"
              >
                support@locana.com
              </a>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <Clock className="text-primary" />
              <span className="font-medium">9:00 AM – 9:00 PM (GMT+6)</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
