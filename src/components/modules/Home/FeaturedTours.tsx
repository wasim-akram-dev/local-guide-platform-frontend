"use client";

import { IListing } from "@/types/listing.interface";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DemoFeaturedDestinationsImage from "../../../assets/images/hills.jpg";

const FeaturedTours = ({ tours }: { tours: IListing[] }) => {
  console.log("featured", tours);
  if (!Array.isArray(tours)) return null;
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Featured Destinations
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Explore top rated and trending tours
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {(tours ?? []).map((tour, index) => (
            <motion.div
              key={tour?.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <Image
                // src={tour.images[0]}
                src={tour?.images[0] || DemoFeaturedDestinationsImage}
                alt={tour?.title}
                width={500}
                height={350}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg">{tour?.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{tour?.city}</p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1">
                    <Star size={18} className="text-yellow-400" />
                    <span className="text-sm font-medium">{4.8}</span>
                  </div>
                  <span className="font-semibold">৳{tour?.tourFee}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/tours"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
