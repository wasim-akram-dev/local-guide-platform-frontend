/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS: Record<string, string> = {
  PENDING: "#facc15", // yellow
  ACCEPTED: "#3b82f6", // blue
  COMPLETED: "#22c55e", // green
  CANCELLED: "#ef4444", // red
  REJECTED: "#f97316", // orange
};

export default function BookingStatusPie({ data }: any) {
  if (!data || data.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-6 text-center text-gray-500">
        No booking data available
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="font-semibold mb-4">Booking Status Overview</h3>

      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={4}
            // isAnimationActive
            // animationDuration={800}
          >
            {data.map((entry: any, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[entry.name] || "#94a3b8"}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
