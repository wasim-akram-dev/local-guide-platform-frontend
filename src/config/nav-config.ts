export type UserRole = "ADMIN" | "TOURIST" | "GUIDE" | "GUEST";

import { getUserInfo } from "@/services/auth/getUserInfo";

export async function getNavConfig() {
  const user = await getUserInfo();
  const role = user?.role || "GUEST";

  const configs = {
    GUEST: [
      { href: "/tours", label: "Explore Tours" },
      { href: "/register?role=guide", label: "Become a Guide" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],

    TOURIST: [
      { href: "/tours", label: "Explore Tours" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
      { href: "/tourist/dashboard/my-trips", label: "My Bookings" },
      { href: "/tourist/dashboard", label: "Dashboard" },
      { href: "/my-profile", label: "Profile" },
    ],

    GUIDE: [
      { href: "/tours", label: "Explore Tours" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
      { href: "/guide/dashboard", label: "Dashboard" },
      { href: "/guide/dashboard/my-listings", label: "My Listings" },
      { href: "/my-profile", label: "Profile" },
    ],

    ADMIN: [
      { href: "/admin/dashboard", label: "Admin Dashboard" },
      { href: "/admin/dashboard/user-management", label: "Manage Users" },
      { href: "/admin/dashboard/listing-management", label: "Manage Listings" },
      { href: "/admin/dashboard/booking-management", label: "Manage Bookings" },
      { href: "/my-profile", label: "Profile" },
    ],
  };

  return configs[role];
}
