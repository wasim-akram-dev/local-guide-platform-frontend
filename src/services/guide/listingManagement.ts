/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { IListing } from "@/types/listing.interface";
import {
  createListingZodSchema,
  updateListingZodSchema,
} from "@/zod/listing.validation";

// ---------------------- CREATE LISTING ----------------------
export async function createListing(_prevState: any, formData: FormData) {
  try {
    const payload: IListing = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      itinerary: formData.get("itinerary") as string,
      tourFee: Number(formData.get("tourFee")),
      duration: Number(formData.get("duration")),
      meetingPoint: (formData.get("meetingPoint") as string) || "",
      maxGroupSize: Number(formData.get("maxGroupSize")),
      city: formData.get("city") as string,
      category: formData.get("category") as IListing["category"],
      images: JSON.parse((formData.get("images") as string) || "[]"),
    };

    const validate = zodValidator(payload, createListingZodSchema);
    if (!validate.success) return validate;

    const response = await serverFetch.post(`/listings`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validate.data),
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

// ---------------------- GET MY LISTINGS ----------------------
export async function getMyListings(query?: string) {
  try {
    const response = await serverFetch.get(
      `/listings${query ? `?${query}` : ""}`,
      {
        cache: "no-store",
      }
    );
    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to fetch listings",
    };
  }
}

// ---------------------- GET LISTING BY ID -------------------
export async function getListingById(id: string) {
  try {
    const res = await serverFetch.get(`/listings/${id}`);
    return await res.json();
  } catch (error: any) {
    return { success: false, message: error.message ?? "Listing not found" };
  }
}

// ---------------------- UPDATE LISTING -----------------------
export async function updateListing(
  id: string,
  _prev: any,
  formData: FormData
) {
  try {
    const payload: Partial<IListing> = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      itinerary: formData.get("itinerary") as string,
      tourFee: formData.get("tourFee")
        ? Number(formData.get("tourFee"))
        : undefined,
      duration: formData.get("duration")
        ? Number(formData.get("duration"))
        : undefined,
      meetingPoint: formData.get("meetingPoint") as string,
      maxGroupSize: formData.get("maxGroupSize")
        ? Number(formData.get("maxGroupSize"))
        : undefined,
      city: formData.get("city") as string,
      category: formData.get("category") as IListing["category"],
      images: formData.get("images")
        ? JSON.parse(formData.get("images") as string)
        : undefined,
    };

    const validate = zodValidator(payload, updateListingZodSchema);
    if (!validate.success) return validate;

    const response = await serverFetch.patch(`/listings/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validate.data),
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

// ---------------------- GET LISTINGS ----------------------
// export async function getListings() {
//   try {
//     const response = await serverFetch.get(`/listings`, {
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return await response.json();
//   } catch (error: any) {
//     return {
//       success: false,
//       message: error.message ?? "Failed to fetch listings",
//     };
//   }
// }

export const getListings = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

    if (!apiUrl) {
      console.error("BACKEND_API_URL not defined!");
      return { data: [] };
    }

    const res = await fetch(`${apiUrl}/listings`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch listings:", res.statusText);
      return { data: [] };
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error in getListings:", err);
    return { data: [] };
  }
};
