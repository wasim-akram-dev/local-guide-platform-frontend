export const dynamic = "force-dynamic";
import BecomeGuideCTA from "@/components/modules/Home/BecomeGuideCTA";
import Categories from "@/components/modules/Home/Categories";
import FeaturedTours from "@/components/modules/Home/FeaturedTours";
import Hero from "@/components/modules/Home/Hero";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import Testimonials from "@/components/modules/Home/Testimonials";
import TopGuides from "@/components/modules/Home/TopGuides";
import { getListings } from "@/services/guide/listingManagement";

export const metadata = {
  title: "Locana | A Local Guide Platform - Find Your Perfect Buddy!",
  description:
    "Find your soulmate guides tailored to your needs with our local guide platform. Get personalized recommendations and book tours effortlessly.",
};

export default async function Home() {
  const response = await getListings();
  const tours = Array.isArray(response?.data) ? response.data : [];
  console.log("from home", tours);

  return (
    <main className="space-y-20">
      <Hero />
      <HowItWorks />
      <Categories />
      <FeaturedTours tours={tours} />
      <TopGuides />
      <Testimonials />
      <BecomeGuideCTA />
    </main>
  );
}
