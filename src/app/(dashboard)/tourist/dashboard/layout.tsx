export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import React from "react";

const TouristDashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div>{children}</div>;
};

export default TouristDashboardLayout;
