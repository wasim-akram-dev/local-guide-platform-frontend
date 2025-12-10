"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Jubayer_Ahmad from "../../../assets/images/jubayer_ahmad.avif";
import Kamal_Hossain from "../../../assets/images/kamal_hossain.webp";
import Mahbubur_Rahman from "../../../assets/images/mahbubur_rahman.avif";

const guides = [
  {
    id: 1,
    name: "Mahbubur Rahman",
    photo: Mahbubur_Rahman,
    rating: 4.9,
    toursCount: 12,
    location: "Dhaka, Bangladesh",
  },
  {
    id: 2,
    name: "Jubayer Ahmad",
    photo: Jubayer_Ahmad,
    rating: 4.8,
    toursCount: 15,
    location: "Chittagong, Bangladesh",
  },
  {
    id: 3,
    name: "Kamal Hossain",
    photo: Kamal_Hossain,
    rating: 4.7,
    toursCount: 8,
    location: "Sundarbans, Bangladesh",
  },
];

const TopGuides = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Top Local Guides</h2>
        <p className="text-gray-600 mt-2">Meet our best-rated local guides</p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={guide.photo}
                  alt={guide.name}
                  fill={true}
                  className="object-cover"
                />
              </div>

              <div className="p-5 text-left">
                <h3 className="font-bold text-lg">{guide.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{guide.location}</p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="text-yellow-400" />
                    <span className="text-sm font-medium">{guide.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {guide.toursCount} tours
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/guides"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            View All Guides
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopGuides;
