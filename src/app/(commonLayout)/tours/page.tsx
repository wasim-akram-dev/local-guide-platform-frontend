/* eslint-disable @typescript-eslint/no-explicit-any */

import FilterSidebar from "@/components/modules/Tours/FilterSidebar";
import ListingGrid from "@/components/modules/Tours/ListingGrid";

async function getListings(searchParams: any) {
  const query = new URLSearchParams();

  for (const key in searchParams) {
    if (searchParams[key]) query.append(key, searchParams[key]);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/listings?${query}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function ExplorePage({ searchParams }: any) {
  const { data } = await getListings(searchParams);
  // console.log(data, "data");
  return (
    <div className="grid grid-cols-12 gap-6 p-6">
      <aside className="col-span-3">
        <FilterSidebar />
      </aside>

      <main className="col-span-9">
        <h1 className="text-2xl font-bold mb-4">
          Explore Tours ({data.length})
        </h1>
        <ListingGrid listings={data} />
      </main>
    </div>
  );
}
