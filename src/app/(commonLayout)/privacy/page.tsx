import { Mail, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Locana",
  description: "How Locana collects, uses, and protects your data",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="bg-linear-to-br from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <ShieldCheck className="mx-auto mb-4" size={40} />
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-6 text-white/90 max-w-3xl mx-auto">
            Learn how Locana collects, uses, and protects your personal data.
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
          <p>
            At <strong className="text-foreground">Locana</strong>, your privacy
            matters to us. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use our platform.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              1. Information We Collect
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Personal details such as name and email address</li>
              <li>Account credentials (securely encrypted)</li>
              <li>Profile information (bio, languages, expertise)</li>
              <li>Booking, payment, and transaction data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use collected data to operate and improve the platform,
              facilitate bookings, communicate with users, ensure security, and
              provide customer support.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              3. Authentication & Security
            </h2>
            <p>
              Locana uses JWT-based authentication and industry-standard
              password hashing to protect user accounts. Sensitive information
              is never stored in plain text.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              4. Data Sharing
            </h2>
            <p>
              We do not sell your personal data. Information may be shared only
              with trusted third-party services when required, such as payment
              providers and infrastructure services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              5. Cookies & Tracking
            </h2>
            <p>
              Locana may use cookies and similar technologies for
              authentication, session management, and improving platform
              functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information. You may also request account deletion by contacting
              support.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              7. Data Retention
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill
              the purposes outlined in this policy or to comply with legal
              requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              8. Policy Updates
            </h2>
            <p>
              This Privacy Policy may be updated periodically. Continued use of
              the platform after changes are published indicates acceptance of
              the updated policy.
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
                For privacy-related questions, contact us at{" "}
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
