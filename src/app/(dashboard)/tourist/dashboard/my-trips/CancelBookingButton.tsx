/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { CancelBooking } from "@/services/tourist/bookingManagement";
import { toast } from "sonner";

const CancelBookingButton = ({
  status,
  id,
}: {
  status: string;
  id: string;
}) => {
  const cancelBooking = async (bookingId: string) => {
    try {
      const res = await CancelBooking(bookingId);
      if (res) {
        toast.success("Booking Cancelled Successfully");
      }
    } catch (error: any) {
      console.error("Failed to cancel booking:", error);
    }
  };
  return (
    <div>
      {status === "PENDING" && (
        <Button onClick={() => cancelBooking(id)} size="sm">
          Cancel
        </Button>
      )}
    </div>
  );
};

export default CancelBookingButton;
