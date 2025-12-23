import { Compass, Globe, ShieldCheck, Sparkles, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Locana",
  description: "Learn more about Locana — your local guide platform",
};

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Discover Travel Through Local Eyes
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Locana connects travelers with passionate local guides to create
            authentic, unforgettable travel experiences beyond guidebooks.
          </p>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Compass className="text-primary" />
            Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to transform travel into meaningful human
            connections. We empower local experts to share their culture,
            stories, and hidden gems while helping travelers experience places
            in the most authentic way possible.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="text-primary" />
            Our Vision
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We envision a world where travel goes beyond sightseeing — where
            every journey is personal, immersive, and unforgettable. Locana
            exists to bring people closer through local experiences.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-muted/40">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Who We Are
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Locana is built by travelers, developers, and storytellers who
            believe the heart of every destination lies with its people. We
            bridge the gap between curiosity and discovery by enabling travelers
            to explore destinations through trusted local guides.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-14">
          How Locana Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Search Tours",
              desc: "Find locally curated tours by entering your destination.",
            },
            {
              title: "Choose a Guide",
              desc: "View verified profiles, reviews, and ratings.",
            },
            {
              title: "Book & Explore",
              desc: "Request a booking and enjoy a personalized experience.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border shadow-sm text-center hover:shadow-md transition"
            >
              <div className="text-primary text-4xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE LOCANA */}
      <section className="bg-muted/40">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold text-center mb-14">
            Why Choose Locana?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Authentic Experiences",
                desc: "Tours designed by locals who know the city best.",
              },
              {
                icon: Users,
                title: "Trusted Guides",
                desc: "Verified profiles with real reviews and ratings.",
              },
              {
                icon: ShieldCheck,
                title: "Safe & Secure",
                desc: "Secure bookings and smooth communication.",
              },
              {
                icon: Sparkles,
                title: "Flexible Options",
                desc: "Food walks, culture, photography & more.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border shadow-sm text-center hover:shadow-md transition"
              >
                <item.icon className="mx-auto text-primary mb-4" size={32} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-linear-to-r from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to Explore Locana?
          </h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Start your journey today and experience destinations the local way.
          </p>

          <Link
            href="/tours"
            className="inline-block mt-8 bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition"
          >
            Explore Tours
          </Link>
        </div>
      </section>
    </main>
  );
}
