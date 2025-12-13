/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

export async function getUsers() {
  try {
    const response = await serverFetch.get(`/users`, {
      cache: "no-store",
    });
    const data = await response.json();
    console.log(data.data.users);
    return data?.data?.users;
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to fetch listings",
    };
  }
}

// ---------------------- UPDATE USER ROLE -----------------------
export async function updateUserRole(id: string, newRole: string) {
  try {
    const response = await serverFetch.patch(`/users/${id}/role`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: newRole }),
    });

    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to update listing",
    };
  }
}

// ---------------------- DELETE USERS -----------------------
export async function deleteUser(id: string) {
  try {
    const response = await serverFetch.delete(`/users/${id}`);
    return await response.json();
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to delete listing",
    };
  }
}
