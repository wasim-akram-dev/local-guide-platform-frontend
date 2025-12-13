/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { fetchUpcomingBookings } from "@/services/guide/upcomingBookingManagement";
import { useEffect, useState } from "react";

const UpcomingBookingsPage = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const json = await fetchUpcomingBookings();

        console.log("from fetchUpcomingBookings", json);

        // Only keep ACCEPTED + future bookings
        const filtered = json?.data?.filter((b: any) => {
          const date = new Date(b.date);
          return b.status === "ACCEPTED" && date >= new Date();
        });

        setBookings(filtered || []);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading)
    return <p className="text-center py-10 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Upcoming Accepted Bookings ({bookings.length})
      </h1>

      {bookings.length === 0 && (
        <p className="text-gray-500 text-center py-10">
          No upcoming accepted bookings.
        </p>
      )}

      <div className="space-y-5">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="border border-gray-200 rounded-xl bg-white shadow-sm p-5"
          >
            {/* Listing title */}
            <h2 className="text-xl font-semibold mb-1">
              {booking.listing?.title}
            </h2>

            {/* Date */}
            <p className="text-gray-600">
              <strong>Date:</strong>{" "}
              {new Date(booking.date).toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            {/* Tourist name */}
            <p className="text-gray-600">
              <strong>Tourist:</strong> {booking.tourist?.name}
            </p>

            {/* Number of people */}
            <p className="text-gray-600">
              <strong>Group Size:</strong> {booking.numberOfPeople}
            </p>

            {/* Status Badge */}
            <span className="inline-block mt-3 px-4 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">
              Accepted
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBookingsPage;
