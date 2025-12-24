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

    router.push(`/tours?${query}`);
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm space-y-5">
      <h3 className="text-lg font-semibold">Filter Tours</h3>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tours"
        className="w-full rounded-md border px-3 py-2 text-sm"
      />

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        className="w-full rounded-md border px-3 py-2 text-sm"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full rounded-md border px-3 py-2 text-sm"
      >
        <option value="">All Categories</option>
        <option value="Adventure">Adventure</option>
        <option value="City Tour">City Tour</option>
        <option value="Culture">Culture</option>
        <option value="Historical">Historical</option>
        <option value="Nature">Nature</option>
        <option value="Others">Others</option>
      </select>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
          placeholder="Min ৳"
          className="rounded-md border px-3 py-2 text-sm"
        />
        <input
          type="number"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
          placeholder="Max ৳"
          className="rounded-md border px-3 py-2 text-sm"
        />
      </div>

      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration (days)"
        className="w-full rounded-md border px-3 py-2 text-sm"
      />

      <button
        onClick={handleApply}
        className="w-full rounded-md bg-primary py-2 text-white font-medium hover:bg-primary/90 transition"
      >
        Apply Filters
      </button>
    </div>
  );
}
