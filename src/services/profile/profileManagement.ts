/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export async function getProfile(userId: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/${userId}`,
      {
        cache: "no-store",
      }
    );
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
