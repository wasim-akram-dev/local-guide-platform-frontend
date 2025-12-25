/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function TripsLineChart({ data }: any) {
  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="font-semibold mb-4">Trips Over Time</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="trips"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
