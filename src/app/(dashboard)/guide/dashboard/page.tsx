/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-dynamic";

import BookingStatusPie from "@/components/DashboardHome/guide/BookingStatusPie";
import GuideBookingsTrend from "@/components/DashboardHome/guide/GuideBookingsTrend";
import UpcomingBookings from "@/components/DashboardHome/guide/UpcomingBookings";
import DashboardSkeleton from "@/components/shared/dashboard/skeletons/DashboardSkeleton";
import { getGuideDashboardData } from "@/services/guide/dashboard";
import { Suspense } from "react";

export default async function GuideDashboardPage() {
  const data = await getGuideDashboardData();
  // console.log(data.upcomingBookings, "u;a;a;a;a");

  return (
    <div className="space-y-6 p-6">
      <Suspense fallback={<DashboardSkeleton />}>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Stat title="Listings" value={data.stats.totalListings} />
          <Stat title="Bookings" value={data.stats.totalBookings} />
          <Stat title="Pending" value={data.stats.pendingBookings} />
          <Stat title="Earnings" value={`৳${data.stats.earnings}`} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BookingStatusPie data={data.bookingStatusPie} />
          <GuideBookingsTrend data={data.bookingsTrend} />
        </div>

        {/* Table */}
        <UpcomingBookings bookings={data.upcomingBookings} />
      </Suspense>
    </div>
  );
}

function Stat({ title, value }: any) {
  return (
    <div className="rounded-xl border bg-white p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
