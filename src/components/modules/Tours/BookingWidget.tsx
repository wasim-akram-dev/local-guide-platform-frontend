"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BookingWidget({
  tourId,
  tourFee,
}: {
  tourId: string;
  tourFee: number;
}) {
  const [date, setDate] = useState("");
  const [group, setGroup] = useState(1);

  const handleBooking = async () => {
    const res = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify({ tourId, date, groupSize: group }),
      headers: { "Content-Type": "application/json" },
    });

    alert(res.ok ? "Booking Request Submitted!" : "Failed");
  };

  return (
    <div className="border p-6 rounded-xl space-y-4 sticky top-24">
      <p className="text-2xl font-bold">
        ${tourFee} <span className="text-gray-600">/ per person</span>
      </p>

      <div className="space-y-2">
        <label>Date</label>
        <input
          type="date"
          className="input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label>Guests</label>
        <input
          type="number"
          min={1}
          max={10}
          className="input"
          value={group}
          onChange={(e) => setGroup(+e.target.value)}
        />
      </div>

      <Button onClick={handleBooking} className="w-full">
        Request Booking
      </Button>
    </div>
  );
}
