/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-dynamic";
import FilterSidebar from "@/components/modules/Tours/FilterSidebar";
import ListingGrid from "@/components/modules/Tours/ListingGrid";
import { ListingSkeletonGrid } from "@/components/modules/Tours/ListingSkeletonGrid";
import { Suspense } from "react";

async function getListings(searchParams: any) {
  const query = new URLSearchParams();

  for (const key in searchParams) {
    if (searchParams[key]) query.append(key, searchParams[key]);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/listings?${query}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsObj = await searchParams;
  const { data } = await getListings(searchParamsObj);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Hero */}
      <section className="bg-linear-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-12 py-12">
          <h1 className="text-4xl font-bold mb-2">Explore Tours</h1>
          <p className="text-white/90">
            Discover unique experiences guided by trusted locals
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row">
          <aside className="w-full md:w-2/6 lg:w-1/4 md:sticky md:top-24 h-fit">
            <FilterSidebar />
          </aside>

          <main className="w-full md:w-4/6 lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {data.length} tours available
              </h2>
            </div>
            <Suspense fallback={<ListingSkeletonGrid />}>
              <ListingGrid listings={data} />
            </Suspense>
          </main>
        </div>
      </section>
    </div>
  );
}
