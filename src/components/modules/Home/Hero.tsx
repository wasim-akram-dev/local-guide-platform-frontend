"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca')",
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Explore Bangladesh Like a Local
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-sm">
          Find authentic experiences guided by real locals
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mt-8 bg-white rounded-xl p-4 flex items-center gap-2 shadow-lg">
          <input
            type="text"
            placeholder="Where are you going?"
            className="flex-1 p-2 outline-none text-black"
          />
          <Button className="flex items-center gap-2">
            <Search size={18} /> Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
