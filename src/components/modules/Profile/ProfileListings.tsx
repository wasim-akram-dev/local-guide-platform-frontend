/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ProfileListings({ listings }: { listings: any[] }) {
  if (!listings?.length)
    return (
      <section className="p-6 rounded-xl border shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Listings</h2>
        <p>No listings yet.</p>
      </section>
    );

  return (
    <section className="p-6 rounded-xl border shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Listings</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {listings?.map((l) => (
          <div key={l.id} className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">{l.title}</h3>
            <p className="text-sm text-gray-600">{l.location}</p>
            <p className="mt-2">{l.description}</p>
            <p className="font-bold mt-2">${l.price}/day</p>
          </div>
        ))}
      </div>
    </section>
  );
}
