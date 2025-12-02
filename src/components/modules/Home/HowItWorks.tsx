import { CalendarCheck, Compass, Search } from "lucide-react";

const steps = [
  {
    icon: <Search size={32} />,
    title: "Find a Tour",
    desc: "Search unique tours and local experiences.",
  },
  {
    icon: <CalendarCheck size={32} />,
    title: "Book a Guide",
    desc: "Choose your preferred date and guide.",
  },
  {
    icon: <Compass size={32} />,
    title: "Enjoy the Trip",
    desc: "Explore the destination like a true local.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">How Locana Works</h2>
        <p className="mt-2 text-gray-600">
          Simple steps to find your perfect local tour
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-primary mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
