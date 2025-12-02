import { Button } from "@/components/ui/button";

const BecomeGuideCTA = () => {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        Earn by Sharing Your Local Knowledge
      </h2>
      <p className="mt-3 text-lg">
        Become a guide and help travelers experience your city.
      </p>

      <div className="mt-6">
        <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
          Become a Guide
        </Button>
      </div>
    </section>
  );
};

export default BecomeGuideCTA;
