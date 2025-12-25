/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

export async function getGuideDashboardData() {
  const bookingsRes = await serverFetch.get("/bookings", {
    cache: "no-store",
  });
  const listingsRes = await serverFetch.get("/listings", {
    cache: "no-store",
  });

  const bookingsData = await bookingsRes.json();
  const listingsData = await listingsRes.json();

  const bookings = bookingsData.data || [];
  const listings = listingsData.data || [];

  // ---- Stats ----
  const statusCount: Record<string, number> = {};
  let earnings = 0;

  // ---- Line Chart Map ----
  const bookingsByDate: Record<string, number> = {};

  bookings.forEach((b: any) => {
    statusCount[b.status] = (statusCount[b.status] || 0) + 1;

    if (b.status === "ACCEPTED" || b.status === "COMPLETED") {
      earnings += b.totalPrice;
    }

    const dateKey = new Date(b.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    bookingsByDate[dateKey] = (bookingsByDate[dateKey] || 0) + 1;
  });

  const bookingStatusPie = Object.entries(statusCount).map(([name, value]) => ({
    name,
    value,
  }));

  const bookingsTrend = Object.entries(bookingsByDate).map(([date, count]) => ({
    date,
    count,
  }));

  const upcomingBookings = bookings
    .filter((b: any) => b.status === "ACCEPTED")
    .slice(0, 5);

  return {
    stats: {
      totalListings: listings.length,
      totalBookings: bookings.length,
      pendingBookings: statusCount["PENDING"] || 0,
      earnings,
    },
    bookingStatusPie,
    bookingsTrend,
    upcomingBookings,
  };
}
