import Skeleton from "./Skeleton";

export default function TableSkeleton() {
  return (
    <div className="rounded-xl border bg-white p-6">
      <Skeleton className="h-5 w-48 mb-4" />

      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="grid grid-cols-3 gap-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
