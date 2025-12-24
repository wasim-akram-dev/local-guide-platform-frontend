export default function ListingSkeleton() {
  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden animate-pulse">
      <div className="h-56 bg-muted" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-3/4 bg-muted rounded" />
        <div className="h-3 w-1/2 bg-muted rounded" />
        <div className="h-4 w-1/3 bg-muted rounded" />
        <div className="h-3 w-2/3 bg-muted rounded" />
      </div>
    </div>
  );
}
