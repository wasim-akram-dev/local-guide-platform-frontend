/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

// ---------------------- GET LISTINGS ----------------------
export async function getListings() {
  try {
    const response = await serverFetch.get(`/listings`, {
      cache: "no-store",
    });
    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to fetch listings",
    };
  }
}

// ---------------------- UPDATE LISTING -----------------------
export async function updateListing(id: string, editData: any) {
  try {
    const response = await serverFetch.patch(`/listings/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    });

    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to update listing",
    };
  }
}

// ---------------------- DELETE LISTING -----------------------
export async function deleteListing(id: string) {
  try {
    const response = await serverFetch.delete(`/listings/${id}`);
    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to delete listing",
    };
  }
}
