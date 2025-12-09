"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import HeroImage from "../../../assets/images/hero.jpg";

const Hero = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [search, setSearch] = useState(params.get("search") || "");

  const handleSearch = () => {
    if (!search.trim()) return;
    const query = new URLSearchParams({
      search,
    }).toString();

    router.push(`/tours?${query}`);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "90vh" }}>
      <Image
        src={HeroImage}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <div
        style={{ position: "relative", zIndex: 1 }}
        className="text-white px-4 flex flex-col justify-center items-center h-full w-full"
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Explore Bangladesh Like a Local
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-sm">
          Find authentic experiences guided by real locals
        </p>

        {/* Search Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="max-w-2xl mt-8 bg-white rounded-xl p-1 md:p-4 flex items-center gap-2 shadow-lg"
        >
          <input
            type="text"
            placeholder="Where are you going?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 outline-none text-black"
          />

          <Button type="submit" className="flex items-center gap-2">
            <Search size={18} /> Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
