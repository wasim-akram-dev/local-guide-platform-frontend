"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Footprints,
  Landmark,
  Map,
  Trees,
  Utensils,
} from "lucide-react";
import { useRouter } from "next/navigation";

const categories = [
  { icon: <Utensils size={26} />, name: "Food & Street Food", value: "Others" },
  {
    icon: <Landmark size={26} />,
    name: "Culture & Heritage",
    value: "Culture",
  },
  { icon: <Trees size={26} />, name: "Nature & Wildlife", value: "Nature" },
  { icon: <Camera size={26} />, name: "Photography Tours", value: "Others" },
  { icon: <Map size={26} />, name: "Adventure Trips", value: "Adventure" },
  { icon: <Footprints size={26} />, name: "City Walks", value: "City Tour" },
];

const Categories = () => {
  const router = useRouter();

  const handleClick = (category: string) => {
    router.push(`/tours?category=${category}`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Popular Categories</h2>
        <p className="text-gray-600 mt-2">Choose a tour experience you love</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => handleClick(cat.value)}
              className="bg-white border p-4 rounded-xl shadow-sm hover:shadow-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer flex flex-col items-center"
            >
              <div className="mb-2">{cat.icon}</div>
              <p className="font-semibold text-sm">{cat.name}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
