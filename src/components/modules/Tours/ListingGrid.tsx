/* eslint-disable @typescript-eslint/no-explicit-any */
import ListingCard from "./ListingCard";

export default function ListingGrid({ listings }: any) {
  if (!listings.length) return <p>No listings found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {listings.map((listing: any) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
