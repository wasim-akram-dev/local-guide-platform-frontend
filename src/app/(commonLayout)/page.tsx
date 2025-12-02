import BecomeGuideCTA from "@/components/modules/Home/BecomeGuideCTA";
import Categories from "@/components/modules/Home/Categories";
import Destinations from "@/components/modules/Home/Destinations";
import GuideCards from "@/components/modules/Home/GuideCards";
import Hero from "@/components/modules/Home/Hero";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import Testimonials from "@/components/modules/Home/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Locana | A Local Guide Platform - Find Your Perfect Buddy!
        </title>
        <meta
          name="description"
          content="Find your soulmate guides tailored to your needs with our local guide platform. Get personalized recommendations and book tours and travels effortlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <HowItWorks />
        <Categories />
        <Destinations />
        <GuideCards />
        <Testimonials />
        <BecomeGuideCTA />
      </main>
    </>
  );
}
