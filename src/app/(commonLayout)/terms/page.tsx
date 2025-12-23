import { FileText, Mail } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Locana",
  description: "Terms and conditions for using Locana",
};

export default function TermsOfServicePage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="bg-linear-to-br from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <FileText className="mx-auto mb-4" size={40} />
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="mt-6 text-white/90 max-w-3xl mx-auto">
            Please read these terms carefully before using the Locana platform.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        {/* Last updated */}
        <p className="text-sm text-muted-foreground mb-10">
          Last updated:{" "}
          <span className="font-medium">{new Date().toLocaleDateString()}</span>
        </p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {/* Intro */}
          <div>
            <p>
              Welcome to <strong className="text-foreground">Locana</strong>. By
              accessing or using our platform, you agree to comply with and be
              bound by these Terms of Service. If you do not agree, please do
              not use the platform.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Platform Overview
            </h2>
            <p>
              Locana is a local guide marketplace that connects travelers with
              local guides for personalized travel experiences. Locana acts
              solely as a facilitator and does not directly provide tours or
              travel services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. User Accounts
            </h2>
            <p>
              You must provide accurate and complete information during
              registration. You are responsible for maintaining the
              confidentiality of your account credentials and all activities
              performed under your account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. User Roles
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong className="text-foreground">Tourists:</strong> Search,
                book, and review tours.
              </li>
              <li>
                <strong className="text-foreground">Guides:</strong> Create tour
                listings and manage bookings.
              </li>
              <li>
                <strong className="text-foreground">Admins:</strong> Oversee
                users, listings, and platform operations.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. Bookings & Payments
            </h2>
            <p>
              All bookings are subject to guide approval. Payments are processed
              securely through third-party payment providers. Locana is not
              responsible for disputes, refunds, or issues arising between
              users.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Reviews & Content
            </h2>
            <p>
              Users may submit reviews only after completing a tour. Reviews
              must be honest, respectful, and relevant. Locana reserves the
              right to remove content that violates community guidelines.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Prohibited Activities
            </h2>
            <p>
              Users may not misuse the platform, submit false or misleading
              information, violate applicable laws, or engage in activities that
              harm other users or Locana.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              7. Termination
            </h2>
            <p>
              Locana reserves the right to suspend or terminate accounts that
              violate these terms or engage in harmful behavior, with or without
              prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              8. Changes to Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. Continued
              use of the platform after changes are posted constitutes
              acceptance of the revised terms.
            </p>
          </div>

          {/* Contact */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              9. Contact Us
            </h2>
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-primary" />
              <span>
                For any questions, contact us at{" "}
                <a
                  href="mailto:support@locana.com"
                  className="font-medium text-primary hover:underline"
                >
                  support@locana.com
                </a>
                .
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
