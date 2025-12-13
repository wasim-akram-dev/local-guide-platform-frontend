/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

// ---------------------- GET BOOKINGS ----------------------
export async function getBookings(query: any) {
  try {
    const response = await serverFetch.get(
      `/bookings${query ? `?${query}` : ""}`,
      {
        cache: "no-store",
      }
    );
    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to fetch bookings",
    };
  }
}

// ---------------------- UPDATE BOOKING STATUS -----------------------
export async function updateBookingStatus(
  bookingId: string,
  newStatus: string
) {
  try {
    const response = await serverFetch.patch(`/bookings/${bookingId}/status`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to update booking status",
    };
  }
}

// ---------------------- CANCEL BOOKING -----------------------
export async function CancelBooking(bookingId: string) {
  try {
    const response = await serverFetch.patch(`/bookings/${bookingId}/cancel`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to update listing",
    };
  }
}
