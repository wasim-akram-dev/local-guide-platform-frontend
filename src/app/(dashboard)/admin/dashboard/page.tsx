// export const dynamic = "force-dynamic";
// export const fetchCache = "force-no-store";

export const dynamic = "force-dynamic";

import BookingsLineChart from "@/components/DashboardHome/admin/BookingsLineChart";
import DashboardCharts from "@/components/DashboardHome/admin/DashboardCharts";
import DashboardOverview from "@/components/DashboardHome/admin/DashboardOverview";
import RecentBookingsTable from "@/components/DashboardHome/admin/RecentBookingsTable";
import DashboardSkeleton from "@/components/shared/dashboard/skeletons/DashboardSkeleton";
import { getAdminDashboardStats } from "@/services/admin/dashboard";
import { Suspense } from "react";

const AdminDashboardPage = async () => {
  const stats = await getAdminDashboardStats();

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardOverview stats={stats} />

        <BookingsLineChart data={stats.bookingsChartData} />

        <DashboardCharts stats={stats} />

        <RecentBookingsTable bookings={stats.recentBookings} />
      </Suspense>
    </div>
  );
};

export default AdminDashboardPage;
