/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-dynamic";
import FilterSidebar from "@/components/modules/Tours/FilterSidebar";
import ListingGrid from "@/components/modules/Tours/ListingGrid";

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
  // console.log(data, "data");
  return (
    <div className="flex flex-col gap-6 p-6 md:flex-row md:my-12 md:gap-10">
      <aside className="w-full md:w-2/6 lg:w-1/4 md:sticky md:top-24 h-fit">
        <FilterSidebar />
      </aside>

      <main className="w-full md:w-4/6 lg:w-3/4">
        <h1 className="text-2xl font-bold mb-4">
          Explore Tours ({data.length})
        </h1>
        <ListingGrid listings={data} />
      </main>
    </div>
  );
}
