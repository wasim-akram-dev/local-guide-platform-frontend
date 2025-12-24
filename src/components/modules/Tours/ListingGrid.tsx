/* eslint-disable @typescript-eslint/no-explicit-any */
import ListingCard from "./ListingCard";

export default function ListingGrid({ listings }: any) {
  if (!listings.length)
    return (
      <div className="text-center py-20 text-muted-foreground">
        <p className="text-lg font-medium">No tours found</p>
        <p className="text-sm">Try adjusting your filters</p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing: any) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
