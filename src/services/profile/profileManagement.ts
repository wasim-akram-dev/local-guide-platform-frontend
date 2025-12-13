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
