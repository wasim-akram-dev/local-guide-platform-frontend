"use client";

interface Booking {
  id: string;
  date: string;
  status: string;
  tourist?: {
    name: string;
  };
}

interface Props {
  bookings: Booking[];
}

export default function UpcomingBookings({ bookings }: Props) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="font-semibold mb-4">Upcoming Bookings</h3>

      {!bookings?.length ? (
        <p className="text-sm text-gray-500">No upcoming bookings</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b text-left text-gray-500">
              <tr>
                <th className="py-2">Tourist</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b last:border-0">
                  <td className="py-3 font-medium">
                    {booking?.tourist?.name || "N/A"}
                  </td>
                  <td>{new Date(booking.date).toLocaleDateString()}</td>
                  <td>
                    <StatusBadge status={booking.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    PENDING: "bg-yellow-100 text-yellow-800",
    ACCEPTED: "bg-green-100 text-green-800",
    COMPLETED: "bg-blue-100 text-blue-800",
    CANCELLED: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        colorMap[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}
