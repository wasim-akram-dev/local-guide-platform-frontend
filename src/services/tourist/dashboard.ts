/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { getMyBookings } from "./bookingManagement";

export async function getTouristDashboardData() {
  const { data: bookings } = await getMyBookings();

  const totalBookings = bookings.length;

  const upcomingTrips = bookings.filter(
    (b: any) =>
      new Date(b.date) >= new Date() &&
      ["PENDING", "ACCEPTED"].includes(b.status)
  );

  const completedTrips = bookings.filter((b: any) => b.status === "COMPLETED");

  const totalSpent = completedTrips.reduce(
    (sum: number, b: any) => sum + b.totalPrice,
    0
  );

  // -------- Booking Status Pie --------
  const statusCount: Record<string, number> = {};
  bookings.forEach((b: any) => {
    statusCount[b.status] = (statusCount[b.status] || 0) + 1;
  });

  const bookingStatusChart = Object.entries(statusCount).map(
    ([name, value]) => ({ name, value })
  );

  // -------- Trips Over Time (Line) --------
  const tripsByDate: Record<string, number> = {};

  bookings.forEach((b: any) => {
    const date = new Date(b.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    tripsByDate[date] = (tripsByDate[date] || 0) + 1;
  });

  const tripsChartData = Object.entries(tripsByDate).map(([date, trips]) => ({
    date,
    trips,
  }));

  return {
    totalBookings,
    upcomingTrips: upcomingTrips.length,
    completedTrips: completedTrips.length,
    totalSpent,
    bookingStatusChart,
    tripsChartData,
    upcomingTripsList: upcomingTrips.slice(0, 3),
  };
}
