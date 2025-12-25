/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

export async function getAdminDashboardStats() {
  try {
    const [usersRes, listingsRes, bookingsRes] = await Promise.all([
      serverFetch.get("/users", { cache: "no-store" }),
      serverFetch.get("/listings", { cache: "no-store" }),
      serverFetch.get("/bookings", { cache: "no-store" }),
    ]);

    const usersData = await usersRes.json();
    const listingsData = await listingsRes.json();
    const bookingsData = await bookingsRes.json();

    const users = usersData.data.users;
    const listings = listingsData.data;
    const bookings = bookingsData.data;
    // ------
    const bookingsByDate: Record<string, number> = {};

    bookings.forEach((booking: any) => {
      const date = new Date(booking.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      bookingsByDate[date] = (bookingsByDate[date] || 0) + 1;
    });

    const bookingsChartData = Object.entries(bookingsByDate).map(
      ([date, count]) => ({
        date,
        bookings: count,
      })
    );

    return {
      totalUsers: users.length,
      totalGuides: users.filter((u: any) => u.role === "GUIDE").length,
      totalTourists: users.filter((u: any) => u.role === "TOURIST").length,
      totalListings: listings.length,
      totalBookings: bookings.length,
      pendingBookings: bookings.filter((b: any) => b.status === "PENDING")
        .length,
      completedBookings: bookings.filter((b: any) => b.status === "COMPLETED")
        .length,
      recentBookings: bookings.slice(0, 5),
      bookingsChartData,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to load dashboard",
    };
  }
}
