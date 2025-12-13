/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

// ---------------------- GET MY BOOKINGS ----------------------
export async function fetchBookings() {
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

// ---------------------- UPDATE STATUS -----------------------
export async function UpdateStatus(id: string, status: string) {
  try {
    const response = await serverFetch.patch(`/bookings/${id}/status`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to update listing",
    };
  }
}
