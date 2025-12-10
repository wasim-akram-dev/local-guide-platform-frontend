/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Reviews({ reviews }: { reviews: any[] }) {
  return (
    <section className="space-y-4">
      <h3 className="font-semibold text-xl">Traveler Reviews</h3>

      {reviews?.length ? (
        reviews.map((r) => (
          <div key={r?.id} className="border p-4 rounded-xl">
            <p className="font-semibold">{r?.user?.name}</p>
            <p className="text-gray-600">{r?.comment}</p>
            <p className="text-yellow-500">Rating: {r?.rating}⭐</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No reviews yet.</p>
      )}
    </section>
  );
}
