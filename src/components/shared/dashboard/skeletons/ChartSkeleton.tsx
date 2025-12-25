import Skeleton from "./Skeleton";

export default function ChartSkeleton() {
  return (
    <div className="rounded-xl border bg-white p-6 space-y-4">
      <Skeleton className="h-5 w-40" />
      <Skeleton className="h-64 w-full rounded-lg" />
    </div>
  );
}
