/* eslint-disable @typescript-eslint/no-explicit-any */
import { getMyBookings } from "@/services/tourist/bookingManagement";
import Link from "next/link";
import CancelBookingButton from "./CancelBookingButton";

export default async function MyBookingsPage() {
  const { data: bookings } = await getMyBookings();
  // console.log(bookings);
  if (bookings.length === 0)
    return (
      <div className="p-6 text-center">
        <p className="text-lg">No bookings found</p>
        {/* <Button onClick={() => router.push("/tours")} className="mt-3">
          Browse Tours
        </Button> */}
        <Link href="/tours" className="mt-3">
          Browse Tours
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl p-6 space-y-6">
      <h1 className="text-2xl font-bold">My Bookings</h1>

      <div className="grid grid-cols-1 gap-4">
        {bookings.map((b: any) => (
          <div key={b.id} className="border p-4 rounded-lg shadow-sm">
            <div className="flex justify-between">
              <p className="font-semibold">{b.listing?.title}</p>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  b.status === "PENDING"
                    ? "bg-yellow-100 text-yellow-700"
                    : b.status === "ACCEPTED"
                    ? "bg-blue-100 text-blue-800"
                    : b.status === "REJECTED"
                    ? "bg-red-100 text-red-700"
                    : b.status === "COMPLETED"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200"
                }`}
              >
                {b.status}
              </span>
            </div>

            <p className="text-sm text-gray-600">
              Date: {new Date(b.date).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">People: {b.numberOfPeople}</p>
            <p className="text-sm text-gray-600">
              Total Price: ৳{b.totalPrice}
            </p>

            {/* Tourist sees guide / Guide sees Tourist */}
            {b.guide && (
              <p className="text-sm mt-1">
                Guide: <span className="font-medium">{b.guide.name}</span>
              </p>
            )}
            {b.tourist && (
              <p className="text-sm mt-1">
                Tourist: <span className="font-medium">{b.tourist.name}</span>
              </p>
            )}

            <div className="mt-3 flex gap-2">
              {/* {b.status === "PENDING" && <Button size="sm">Cancel</Button>}
              {b.status === "ACCEPTED" && <Button size="sm">Pay</Button>}
              {b.status === "COMPLETED" && <Button size="sm">Review</Button>} */}
              {b.status && <CancelBookingButton status={b.status} id={b.id} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
