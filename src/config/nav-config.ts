export type UserRole = "ADMIN" | "TOURIST" | "GUIDE" | "GUEST";

import { getUserInfo } from "@/services/auth/getUserInfo";

export async function getNavConfig() {
  const user = await getUserInfo();
  const role = user?.role || "GUEST";
  const userId = user?.id;

  const configs = {
    GUEST: [
      { href: "/tours", label: "Explore Tours" },
      { href: "/become-guide", label: "Become a Guide" },
    ],

    TOURIST: [
      { href: "/tours", label: "Explore Tours" },
      { href: "/tourist/dashboard/my-trips", label: "My Bookings" },
      { href: "/tourist/dashboard", label: "Dashboard" },
      { href: `/profile/${userId}`, label: "Profile" },
    ],

    GUIDE: [
      { href: "/tours", label: "Explore Tours" },
      { href: "/guide/dashboard", label: "Dashboard" },
      { href: `/profile/${userId}`, label: "Profile" },
    ],

    ADMIN: [
      { href: "/admin/dashboard", label: "Admin Dashboard" },
      { href: "/admin/dashboard/user-management", label: "Manage Users" },
      { href: "/admin/dashboard/listing-management", label: "Manage Listings" },
      { href: `/profile/${userId}`, label: "Profile" },
    ],
  };

  return configs[role];
}
