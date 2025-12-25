/* eslint-disable @typescript-eslint/no-explicit-any */
export default function RecentBookingsTable({ bookings }: any) {
  console.log(bookings, "bookings");
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="font-semibold mb-4">Recent Bookings</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr className="text-left text-muted-foreground">
              <th className="py-2">Tour</th>
              <th>User</th>
              <th>Guide</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b: any) => (
              <tr key={b.id} className="border-b last:border-none">
                <td className="py-2">{b.listing?.title}</td>
                <td>{b?.tourist?.name}</td>
                <td>{b?.guide?.name}</td>
                <td className="font-medium">{b.status}</td>
                <td>{new Date(b.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
