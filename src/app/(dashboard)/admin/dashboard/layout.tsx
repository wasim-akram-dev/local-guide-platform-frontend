export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import React from "react";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default AdminDashboardLayout;
