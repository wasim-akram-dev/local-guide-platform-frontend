/* eslint-disable @typescript-eslint/no-explicit-any */
const Card = ({ title, value }: any) => (
  <div className="rounded-xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-muted-foreground">{title}</p>
    <h2 className="text-3xl font-bold mt-2">{value}</h2>
  </div>
);

export default function DashboardOverview({ stats }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card title="Total Users" value={stats.totalUsers} />
      <Card title="Guides" value={stats.totalGuides} />
      <Card title="Tourists" value={stats.totalTourists} />
      <Card title="Listings" value={stats.totalListings} />
      <Card title="Bookings" value={stats.totalBookings} />
      <Card title="Pending Bookings" value={stats.pendingBookings} />
    </div>
  );
}
