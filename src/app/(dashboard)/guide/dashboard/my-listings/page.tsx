import ListingsManagementHeader from "@/components/modules/Guide/ListingsManagement/ListingsManagementHeader";
import ListingsTable from "@/components/modules/Guide/ListingsManagement/ListingsTable";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { Suspense } from "react";

async function getMyListings(guideId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/listings?guideId=${guideId}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function GuideListingsPage() {
  const user = await getUserInfo();
  if (!user || user.role !== "GUIDE")
    return <p className="text-red-500 font-medium text-center">Unauthorized</p>;

  const { data: listings } = await getMyListings(user.id);

  return (
    <div className="space-y-6">
      <ListingsManagementHeader />

      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <ListingsTable listings={listings} />
      </Suspense>
    </div>
  );
}
