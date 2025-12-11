import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "./auth-utils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
  const defaultDashboard = getDefaultDashboardRoute(role);

  return [
    {
      items: [
        {
          title: "Dashboard",
          href: defaultDashboard,
          icon: "LayoutDashboard",
          roles: ["TOURIST", "GUIDE", "ADMIN"],
        },
        {
          title: "My Profile",
          href: `/my-profile`,
          icon: "User",
          roles: ["TOURIST", "GUIDE", "ADMIN"],
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Change Password",
          href: "/change-password",
          icon: "Settings",
          roles: ["TOURIST"],
        },
      ],
    },
  ];
};

export const guideNavItems: NavSection[] = [
  {
    title: "Managements",
    items: [
      {
        title: "My Listings",
        href: "/guide/dashboard/my-listings",
        icon: "Calendar",
        badge: "3",
        roles: ["GUIDE"],
      },
      {
        title: "Pending Requests",
        href: "/guide/dashboard/pending-requests",
        icon: "Clock",
        roles: ["GUIDE"],
      },
      {
        title: "Upcoming Bookings",
        href: "/guide/dashboard/upcoming-bookings",
        icon: "FileText",
        roles: ["GUIDE"],
      },
    ],
  },
];

export const touristNavItems: NavSection[] = [
  {
    title: "Managements",
    items: [
      {
        title: "My Trips",
        href: "/tourist/dashboard/my-trips",
        icon: "Calendar",
        roles: ["TOURIST"],
      },
      {
        title: "Wishlist",
        href: "/tourist/dashboard/wishlist",
        icon: "ClipboardList",
        roles: ["TOURIST"],
      },
    ],
  },
];

export const adminNavItems: NavSection[] = [
  {
    title: "User Management",
    items: [
      {
        title: "All Users",
        href: "/admin/dashboard/user-management",
        icon: "Users",
        roles: ["ADMIN"],
      },
      {
        title: "Admins",
        href: "/admin/dashboard/user-management/admin-management",
        icon: "Shield",
        roles: ["ADMIN"],
      },
      {
        title: "Guides",
        href: "/admin/dashboard/user-management/guide-management",
        icon: "Stethoscope",
        roles: ["ADMIN"],
      },
      {
        title: "Tourists",
        href: "/admin/dashboard/user-management/tourist-management",
        icon: "Users",
        roles: ["ADMIN"],
      },
    ],
  },
  {
    title: "Listing Management",
    items: [
      {
        title: "Listings",
        href: "/admin/dashboard/listing-management",
        icon: "Calendar",
        roles: ["ADMIN"],
      },
    ],
  },
  {
    title: "Booking Management",
    items: [
      {
        title: "Bookings",
        href: "/admin/dashboard/booking-management",
        icon: "Calendar",
        roles: ["ADMIN"],
      },
    ],
  },
];

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
  const commonNavItems = getCommonNavItems(role);

  switch (role) {
    case "ADMIN":
      return [...commonNavItems, ...adminNavItems];
    case "GUIDE":
      return [...commonNavItems, ...guideNavItems];
    case "TOURIST":
      return [...commonNavItems, ...touristNavItems];
    default:
      return [];
  }
};
