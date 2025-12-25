"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = [
  "#0f172a", // dark
  "#22c55e", // green
  "#3b82f6", // blue
  "#ef4444", // red
];

interface Props {
  data: {
    name: string;
    value: number;
  }[];
}

export default function BookingStatusPie({ data }: Props) {
  if (!data?.length) {
    return (
      <div className="rounded-xl border bg-white p-6">
        <h3 className="font-semibold mb-4">Booking Status</h3>
        <p className="text-sm text-gray-500">No booking data available</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="font-semibold mb-4">Booking Status</h3>

      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={4}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span>{item.name}</span>
            <span className="ml-auto font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
