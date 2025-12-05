import Spinner from "@/components/shared/Spinner";

export default function Loading() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  );
}
