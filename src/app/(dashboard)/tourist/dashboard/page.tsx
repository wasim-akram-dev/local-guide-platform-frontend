/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-dynamic";

import BookingStatusPie from "@/components/DashboardHome/tourist/BookingStatusPie";
import TripsLineChart from "@/components/DashboardHome/tourist/TripsLineChart";
import DashboardSkeleton from "@/components/shared/dashboard/skeletons/DashboardSkeleton";
import { getTouristDashboardData } from "@/services/tourist/dashboard";
import Link from "next/link";
import { Suspense } from "react";

export default async function TouristDashboardPage() {
  const data = await getTouristDashboardData();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">My Dashboard</h1>
      <Suspense fallback={<DashboardSkeleton />}>
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard title="Total Bookings" value={data.totalBookings} />
          <StatCard title="Upcoming Trips" value={data.upcomingTrips} />
          <StatCard title="Completed Trips" value={data.completedTrips} />
          <StatCard title="Total Spent" value={`৳${data.totalSpent}`} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TripsLineChart data={data.tripsChartData} />
          <BookingStatusPie data={data.bookingStatusChart} />
        </div>

        {/* Upcoming Trips */}
        <div className="rounded-xl border p-6 bg-white">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold">Upcoming Trips</h3>
            <Link
              href="/tourist/dashboard/my-trips"
              className="text-sm text-blue-600"
            >
              View All
            </Link>
          </div>

          {data.upcomingTripsList.length === 0 ? (
            <p className="text-sm text-gray-500">No upcoming trips</p>
          ) : (
            <ul className="space-y-3">
              {data.upcomingTripsList.map((b: any) => (
                <li key={b.id} className="flex justify-between text-sm">
                  <span>{b.listing.title}</span>
                  <span>{new Date(b.date).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Suspense>
    </div>
  );
}

function StatCard({ title, value }: any) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
