export type UserRole = "tourist" | "guide" | "admin" | "guest";

export const navConfig = {
  guest: [
    { href: "/tours", label: "Explore Tours" },
    { href: "/become-guide", label: "Become a Guide" },
  ],

  tourist: [
    { href: "/tours", label: "Explore Tours" },
    { href: "/my-bookings", label: "My Bookings" },
    { href: "/profile", label: "Profile" },
  ],

  guide: [
    { href: "/tours", label: "Explore Tours" },
    { href: "/guide/dashboard", label: "Dashboard" },
    { href: "/profile", label: "Profile" },
  ],

  admin: [
    { href: "/admin", label: "Admin Dashboard" },
    { href: "/admin/users", label: "Manage Users" },
    { href: "/admin/listings", label: "Manage Listings" },
    { href: "/profile", label: "Profile" },
  ],
};
