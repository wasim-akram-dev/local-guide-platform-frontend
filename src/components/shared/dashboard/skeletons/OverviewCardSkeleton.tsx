import Skeleton from "./Skeleton";

export default function OverviewCardSkeleton() {
  return (
    <div className="rounded-xl border bg-white p-5 space-y-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-8 w-20" />
      <Skeleton className="h-3 w-full" />
    </div>
  );
}
