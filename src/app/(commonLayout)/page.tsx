import BecomeGuideCTA from "@/components/modules/Home/BecomeGuideCTA";
import Categories from "@/components/modules/Home/Categories";
import Destinations from "@/components/modules/Home/Destinations";
import GuideCards from "@/components/modules/Home/GuideCards";
import Hero from "@/components/modules/Home/Hero";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import Testimonials from "@/components/modules/Home/Testimonials";

export const metadata = {
  title: "Locana | A Local Guide Platform - Find Your Perfect Buddy!",
  description:
    "Find your soulmate guides tailored to your needs with our local guide platform. Get personalized recommendations and book tours effortlessly.",
};

export default function Home() {
  return (
    <main className="space-y-20">
      <Hero />
      <HowItWorks />
      <Categories />
      <Destinations />
      <GuideCards />
      <Testimonials />
      <BecomeGuideCTA />
    </main>
  );
}
