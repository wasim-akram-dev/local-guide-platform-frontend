"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function FilterSidebar() {
  const router = useRouter();
  const params = useSearchParams();

  const [category, setCategory] = useState(params.get("category") || "");
  const [city, setCity] = useState(params.get("city") || "");
  const [priceMin, setPriceMin] = useState(params.get("priceMin") || "");
  const [priceMax, setPriceMax] = useState(params.get("priceMax") || "");
  const [duration, setDuration] = useState(params.get("duration") || "");
  const [search, setSearch] = useState(params.get("search") || "");

  const handleApply = () => {
    const query = new URLSearchParams({
      category,
      city,
      priceMin,
      priceMax,
      duration,
      search,
    }).toString();

    router.push(`/explore?${query}`);
  };

  return (
    <div className="border p-4 rounded space-y-4">
      <h2 className="text-lg font-bold">Filters</h2>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title"
        className="w-full border p-2 rounded"
      />

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        className="w-full border p-2 rounded"
      />

      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="w-full border p-2 rounded"
      />

      <div className="grid grid-cols-2 gap-2">
        <input
          type="number"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
          placeholder="Min Price"
          className="border p-2 rounded"
        />
        <input
          type="number"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
          placeholder="Max Price"
          className="border p-2 rounded"
        />
      </div>

      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration (days)"
        className="w-full border p-2 rounded"
      />

      <button
        onClick={handleApply}
        className="bg-blue-600 text-white w-full p-2 rounded font-semibold"
      >
        Apply Filters
      </button>
    </div>
  );
}
