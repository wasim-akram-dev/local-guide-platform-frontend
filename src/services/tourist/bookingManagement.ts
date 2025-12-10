/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

// ---------------------- GET MY BOOKINGS ----------------------
export async function getMyBookings() {
  try {
    const response = await serverFetch.get(`/bookings`);
    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to fetch bookings",
    };
  }
}
