/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function PendingRequestsPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyBookings();
  }, []);

  const fetchMyBookings = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/bookings`,
        {
          credentials: "include",
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to load bookings");

      // Only PENDING items
      const pending = data.data.filter((b: any) => b.status === "PENDING");

      setBookings(pending);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/bookings/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ status }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to update status");

      toast.success(`Booking ${status.toLowerCase()} successfully`);

      // Refresh list after update
      setBookings((prev) => prev.filter((b) => b.id !== id));
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  if (loading)
    return <p className="p-6 text-center text-gray-600">Loading...</p>;

  if (bookings.length === 0)
    return (
      <div className="p-6 text-center">
        <p className="text-lg">No pending booking requests</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Pending Booking Requests</h1>

      <div className="grid grid-cols-1 gap-4">
        {bookings.map((b) => (
          <div key={b.id} className="border p-4 rounded-lg shadow-sm">
            <div className="flex justify-between">
              <p className="font-semibold">{b.listing?.title}</p>

              <span className="px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-700">
                PENDING
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-1">
              Date: {new Date(b.date).toLocaleDateString()}
            </p>

            <p className="text-sm text-gray-600">People: {b.numberOfPeople}</p>

            <p className="text-sm text-gray-600">
              Total Price: ৳{b.totalPrice}
            </p>

            <p className="text-sm mt-1">
              Tourist: <span className="font-medium">{b.tourist?.name}</span>
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-4 flex gap-3">
              <Button
                size="sm"
                onClick={() => updateStatus(b.id, "ACCEPTED")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Accept
              </Button>

              <Button
                size="sm"
                variant="destructive"
                onClick={() => updateStatus(b.id, "REJECTED")}
              >
                Reject
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
