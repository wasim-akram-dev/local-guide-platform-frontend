/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { UserRole } from "@/lib/auth-utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function BookingWidget({
  tourId,
  tourFee,
  userRole,
}: {
  tourId: string;
  tourFee: number;
  userRole: UserRole;
}) {
  const [date, setDate] = useState("");
  const [group, setGroup] = useState(1);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleBooking = async () => {
    if (userRole !== "TOURIST") {
      toast.error("Only Tourists can make bookings");
      return router.push("/login");
    }

    if (!date) return toast.error("Please select a date");
    if (group < 1) return toast.error("Minimum 1 guest");

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            listingId: tourId,
            date,
            numberOfPeople: group,
          }),
        }
      );

      const data = await res.json();
      console.log(data);
      if (!res.ok) throw new Error(data?.message || "Booking failed");

      toast.success("Booking request sent to guide!");
      setDate("");
      setGroup(1);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border p-6 rounded-xl space-y-4 sticky top-24 shadow-lg">
      {/* Show login notice if not authenticated */}
      {userRole !== "TOURIST" ? (
        <p className="text-sm bg-red-50 text-red-600 p-2 rounded">
          You must login as a Tourist to book.
        </p>
      ) : (
        ""
      )}

      <p className="text-2xl font-bold">
        ৳{tourFee} <span className="text-gray-600">/ per person</span>
      </p>

      <div className="space-y-2">
        <label>Date</label>
        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          disabled={userRole !== "TOURIST"}
        />
      </div>
      <div className="space-y-2">
        <label>Guests</label>
        <input
          type="number"
          min={1}
          className="w-full border p-2 rounded"
          value={group}
          onChange={(e) => setGroup(+e.target.value)}
          disabled={userRole !== "TOURIST"}
        />
      </div>
      <Button
        onClick={handleBooking}
        disabled={loading || userRole !== "TOURIST"}
        className="w-full"
      >
        {loading ? "Processing..." : "Request Booking"}
      </Button>
    </div>
  );
}
