import ChartSkeleton from "./ChartSkeleton";
import OverviewCardSkeleton from "./OverviewCardSkeleton";
import TableSkeleton from "./TableSkeleton";

export default function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <OverviewCardSkeleton key={i} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartSkeleton />
        <ChartSkeleton />
      </div>

      {/* Table */}
      <TableSkeleton />
    </div>
  );
}
