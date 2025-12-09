// import { CalendarCheck, Compass, Search } from "lucide-react";

// const steps = [
//   {
//     icon: <Search size={32} />,
//     title: "Find a Tour",
//     desc: "Search unique tours and local experiences.",
//   },
//   {
//     icon: <CalendarCheck size={32} />,
//     title: "Book a Guide",
//     desc: "Choose your preferred date and guide.",
//   },
//   {
//     icon: <Compass size={32} />,
//     title: "Enjoy the Trip",
//     desc: "Explore the destination like a true local.",
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold">How Locana Works</h2>
//         <p className="mt-2 text-gray-600">
//           Simple steps to find your perfect local tour
//         </p>

//         <div className="grid md:grid-cols-3 gap-8 mt-12">
//           {steps.map((step, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1 duration-300"
//             >
//               <div className="text-primary mb-4 flex justify-center">
//                 {step.icon}
//               </div>
//               <h3 className="text-xl font-semibold">{step.title}</h3>
//               <p className="text-gray-600 mt-2">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CalendarCheck, Compass, Search } from "lucide-react";
import { useRouter } from "next/navigation";

const steps = [
  {
    icon: <Search size={32} />,
    title: "Find a Tour",
    desc: "Search unique tours and local experiences that match your interest.",
  },
  {
    icon: <CalendarCheck size={32} />,
    title: "Book a Guide",
    desc: "Choose a local guide, schedule your trip & confirm booking easily.",
  },
  {
    icon: <Compass size={32} />,
    title: "Enjoy the Trip",
    desc: "Experience the destination like a true Bangladeshi local.",
  },
];

const HowItWorks = () => {
  const router = useRouter();

  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Light Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold">How Locana Works</h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Discover & book local guides in just a few simple steps
        </p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold mx-auto mb-4">
                {i + 1}
              </div>

              {/* Icon */}
              <div className="text-primary mb-3 flex justify-center">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12"
        >
          <Button size="lg" onClick={() => router.push("/tours")}>
            Explore Tours
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
