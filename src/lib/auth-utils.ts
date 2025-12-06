export type UserRole = "ADMIN" | "TOURIST" | "GUIDE";

// exact : ["/my-profile", "settings"]
//   patterns: [/^\/dashboard/, /^\/patient/], // Routes starting with /dashboard/* /patient/*
export type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

export const authRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];

export const commonProtectedRoutes: RouteConfig = {
  exact: ["/my-profile", "/settings", "/change-password"],
  patterns: [],
};

export const guideProtectedRoutes: RouteConfig = {
  patterns: [/^\/guide/],
  exact: [],
};

export const adminProtectedRoutes: RouteConfig = {
  patterns: [/^\/admin/],
  exact: [],
};

export const touristProtectedRoutes: RouteConfig = {
  patterns: [/^\/tourist/],
  exact: [],
};

export const isAuthRoute = (pathname: string) => {
  return authRoutes.some((route: string) => route === pathname);
};

export const isRouteMatches = (
  pathname: string,
  routes: RouteConfig
): boolean => {
  if (routes.exact.includes(pathname)) {
    return true;
  }
  return routes.patterns.some((pattern: RegExp) => pattern.test(pathname));
  // if pathname === /dashboard/my-appointments => matches /^\/dashboard/ => true
};

export const getRouteOwner = (
  pathname: string
): "ADMIN" | "GUIDE" | "TOURIST" | "GUEST" | null => {
  if (isRouteMatches(pathname, adminProtectedRoutes)) {
    return "ADMIN";
  }
  if (isRouteMatches(pathname, guideProtectedRoutes)) {
    return "GUIDE";
  }
  if (isRouteMatches(pathname, touristProtectedRoutes)) {
    return "TOURIST";
  }
  if (isRouteMatches(pathname, commonProtectedRoutes)) {
    return "GUEST";
  }
  return null;
};

export const getDefaultDashboardRoute = (role: UserRole): string => {
  if (role === "ADMIN") {
    return "/admin/dashboard";
  }
  if (role === "GUIDE") {
    return "/guide/dashboard";
  }
  if (role === "TOURIST") {
    return "/tourist/dashboard";
  }
  return "/";
};

export const isValidRedirectForRole = (
  redirectPath: string,
  role: UserRole
): boolean => {
  const routeOwner = getRouteOwner(redirectPath);

  if (routeOwner === null || routeOwner === "GUEST") {
    return true;
  }

  if (routeOwner === role) {
    return true;
  }

  return false;
};
