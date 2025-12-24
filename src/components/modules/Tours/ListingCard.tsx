/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import Link from "next/link";

export default function ListingCard({ listing }: any) {
  const avgRating = listing.reviews.length
    ? (
        listing.reviews.reduce((a: any, b: any) => a + b.rating, 0) /
        listing.reviews.length
      ).toFixed(1)
    : null;

  return (
    <Link href={`/tours/${listing.id}`}>
      <div className="group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-lg transition">
        <div className="relative h-56">
          <Image
            src={listing?.images?.[0] || "/next.svg"}
            alt={listing?.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg line-clamp-1">
            {listing.title}
          </h3>

          <p className="text-sm text-muted-foreground">
            {listing.city} • {listing.category}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-primary font-bold">
              ৳{listing.tourFee}
              <span className="text-xs font-normal text-muted-foreground">
                {" "}
                / person
              </span>
            </p>

            {avgRating && <span className="text-sm">⭐ {avgRating}</span>}
          </div>

          <p className="text-xs text-muted-foreground">
            {listing.duration} days • Max {listing.maxGroupSize} people
          </p>

          <p className="text-xs text-muted-foreground">
            Guide: {listing.guide?.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
