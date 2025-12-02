// import { cookies } from "next/headers";
// import jwt from "jsonwebtoken";
// import { navConfig, UserRole } from "@/config/nav-items";

// const getUserRole = (): UserRole => {
//   const cookieStore = cookies();
//   const token = cookieStore.get("accessToken")?.value;

//   if (!token) return "guest";

//   try {
//     const decoded = jwt.decode(token) as any;
//     return decoded.role as UserRole;
//   } catch {
//     return "guest";
//   }
// };
