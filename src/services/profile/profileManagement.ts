/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

export async function getProfile(userId: string) {
  try {
    const res = await serverFetch.get(`/users/${userId}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data?.data;
  } catch (error: any) {
    // console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
}

export async function getMe() {
  try {
    const res = await serverFetch.get("/auth/me", {
      cache: "no-store",
    });
    return res.json();
  } catch (error: any) {
    // console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
}

// ---------------------- UPDATE PROFILE -----------------------
export async function updateProfile(id: string, editData: any) {
  try {
    const response = await serverFetch.patch(`/users/${id}`, {
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
