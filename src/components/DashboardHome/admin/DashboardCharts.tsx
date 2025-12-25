/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function DashboardCharts({ stats }: any) {
  const bookingData = [
    { name: "Completed", value: stats.completedBookings },
    { name: "Pending", value: stats.pendingBookings },
  ];

  const userData = [
    { name: "Guides", value: stats.totalGuides },
    { name: "Tourists", value: stats.totalTourists },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bookings Chart */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="font-semibold mb-4">Booking Status</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={bookingData} dataKey="value" outerRadius={80}>
              {bookingData.map((_, i) => (
                <Cell key={i} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Users Chart */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="font-semibold mb-4">User Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={userData} dataKey="value" outerRadius={80}>
              {userData.map((_, i) => (
                <Cell key={i} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
