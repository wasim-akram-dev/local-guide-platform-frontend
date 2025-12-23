import ContactForm from "@/components/contact-form";
import { Clock, Mail, MapPin, Users } from "lucide-react";

export const metadata = {
  title: "Contact Us | Locana",
  description: "Get in touch with the Locana team",
};

export default function ContactPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="bg-linear-to-br from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Locana</h1>
          <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
            Have questions, feedback, or partnership ideas? We&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      {/* INFO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {[
          { icon: Mail, title: "Email", value: "support@locana.com" },
          { icon: MapPin, title: "Location", value: "Dhaka, Bangladesh" },
          {
            icon: Clock,
            title: "Support Hours",
            value: "Sun – Fri, 10:00 AM – 8:00 PM",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-8 text-center shadow-sm"
          >
            <item.icon className="mx-auto text-primary mb-4" size={32} />
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-muted-foreground">{item.value}</p>
          </div>
        ))}
      </section>

      {/* FORM */}
      <ContactForm />

      {/* GUIDE CTA */}
      <section className="bg-linear-to-r from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Users className="mx-auto mb-4" size={36} />
          <h2 className="text-3xl font-semibold">
            Want to Become a Local Guide?
          </h2>
          <p className="mt-4 text-white/90">
            Share your city with travelers and earn by guiding.
          </p>

          <a
            href="/register"
            className="inline-block mt-8 bg-white text-primary px-8 py-4 rounded-lg font-medium"
          >
            Become a Guide
          </a>
        </div>
      </section>
    </main>
  );
}
