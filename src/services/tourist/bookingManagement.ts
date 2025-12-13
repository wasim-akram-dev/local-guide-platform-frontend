/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

// ---------------------- GET MY BOOKINGS ----------------------
export async function getMyBookings() {
  try {
    const response = await serverFetch.get(`/bookings`, {
      cache: "no-store",
    });
    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to fetch bookings",
    };
  }
}

// ---------------------- CREATE BOOKING ----------------------
export async function createBooking(
  tourId: string,
  date: string,
  group: number
) {
  try {
    const response = await serverFetch.post(`/bookings`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        listingId: tourId,
        date,
        numberOfPeople: group,
      }),
    });

    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to create listing",
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
      message: error.message ?? "Failed to cancel booking",
    };
  }
}
