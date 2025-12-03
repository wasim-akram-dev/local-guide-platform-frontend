export type UserRole = "ADMIN" | "TOURIST" | "GUIDE" | "GUEST";

export const navConfig = {
  GUEST: [
    { href: "/tours", label: "Explore Tours" },
    { href: "/become-guide", label: "Become a Guide" },
  ],

  TOURIST: [
    { href: "/tours", label: "Explore Tours" },
    { href: "/my-bookings", label: "My Bookings" },
    { href: "/profile", label: "Profile" },
  ],

  GUIDE: [
    { href: "/tours", label: "Explore Tours" },
    { href: "/guide/dashboard", label: "Dashboard" },
    { href: "/profile", label: "Profile" },
  ],

  ADMIN: [
    { href: "/admin", label: "Admin Dashboard" },
    { href: "/admin/users", label: "Manage Users" },
    { href: "/admin/listings", label: "Manage Listings" },
    { href: "/profile", label: "Profile" },
  ],
};
