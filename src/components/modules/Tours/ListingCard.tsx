/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

export default function ListingCard({ listing }: any) {
  const avgRating = listing.reviews.length
    ? (
        listing.reviews.reduce((a: any, b: any) => a + b.rating, 0) /
        listing.reviews.length
      ).toFixed(1)
    : "No Rating";

  return (
    <Link href={`/tours/${listing.id}`}>
      <div className="border rounded-md overflow-hidden shadow hover:scale-[1.02] transition cursor-pointer">
        <Image
          src={listing?.images?.[0] || "/next.svg"}
          className="w-full h-48 object-cover"
          alt={listing?.title}
          width={100}
          height={192}
        />

        <div className="p-4 space-y-1">
          <h2 className="font-bold text-lg">{listing?.title}</h2>
          <p className="text-sm text-gray-600">
            {listing?.city} • {listing?.category}
          </p>

          <p className="text-blue-600 font-semibold">
            ${listing?.tourFee} / person
          </p>

          <p className="text-sm text-gray-700">
            Duration: {listing?.duration} days • Group max{" "}
            {listing?.maxGroupSize}
          </p>

          <p className="text-xs text-gray-500">
            Guide: {listing?.guide?.name} | ⭐ {avgRating}
          </p>
        </div>
      </div>
    </Link>
  );
}
