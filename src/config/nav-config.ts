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
      { href: "/my-bookings", label: "My Bookings" },
      { href: `/profile/${userId}`, label: "Profile" },
    ],

    GUIDE: [
      { href: "/tours", label: "Explore Tours" },
      { href: "/guide/dashboard", label: "Dashboard" },
      { href: `/profile/${userId}`, label: "Profile" },
    ],

    ADMIN: [
      { href: "/admin", label: "Admin Dashboard" },
      { href: "/admin/users", label: "Manage Users" },
      { href: "/admin/listings", label: "Manage Listings" },
      { href: `/profile/${userId}`, label: "Profile" },
    ],
  };

  return configs[role];
}
