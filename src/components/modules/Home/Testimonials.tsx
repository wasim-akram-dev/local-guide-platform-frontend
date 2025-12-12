"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import DemoReviewerPhoto from "../../../assets/images/avatar.jpeg";
import DemoReviewerPhoto3 from "../../../assets/images/kamal_hossain.webp";
import DemoReviewerPhoto2 from "../../../assets/images/man-smiling.webp";

const testimonials = [
  {
    id: 1,
    name: "Amin Rahman",
    photo: DemoReviewerPhoto,
    feedback:
      "I had an amazing experience with my local guide. The tour was authentic and full of surprises!",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 2,
    name: "Rafiq Hossain",
    photo: DemoReviewerPhoto2,
    feedback:
      "Locana helped me find a guide who showed me hidden gems around the city. Highly recommended!",
    location: "Chittagong, Bangladesh",
  },
  {
    id: 3,
    name: "Sabbir Khan",
    photo: DemoReviewerPhoto3,
    feedback:
      "The tour was perfectly organized. My guide was knowledgeable, friendly, and very accommodating.",
    location: "Sylhet, Bangladesh",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Tourists Say
        </h2>
        <p className="text-gray-600 mt-2">
          Hear from people who explored with Locana
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    fill={false}
                  />
                </div>
                <Quote className="text-primary mb-2" />
                <p className="text-gray-700 italic mb-4">
                  &quot;{t.feedback}&quot;
                </p>
                <h4 className="font-semibold text-lg">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
