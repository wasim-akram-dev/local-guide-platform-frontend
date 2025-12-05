/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ProfileReviews({
  reviewsGiven,
  reviewsReceived,
}: {
  reviewsGiven: any[];
  reviewsReceived: any[];
}) {
  return (
    <section className="p-6 rounded-xl border shadow-sm space-y-6">
      <h2 className="text-xl font-semibold">Reviews</h2>

      {/* Reviews user gave */}
      <div>
        <h3 className="font-medium mb-2">Given</h3>
        {reviewsGiven?.length ? (
          reviewsGiven.map((r) => (
            <p key={r.id} className="border-b py-2">
              ⭐ {r.rating} - {r.comment}
            </p>
          ))
        ) : (
          <small>No reviews given yet.</small>
        )}
      </div>

      {/* Reviews user received */}
      <div>
        <h3 className="font-medium mb-2">Received</h3>
        {reviewsReceived?.length ? (
          reviewsReceived.map((r) => (
            <p key={r.id} className="border-b py-2">
              ⭐ {r.rating} - {r.comment}
            </p>
          ))
        ) : (
          <small>No reviews received yet.</small>
        )}
      </div>
    </section>
  );
}
