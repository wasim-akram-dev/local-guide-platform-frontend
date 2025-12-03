/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserRole } from "@/config/nav-items";
import { getCookie } from "@/services/auth/tokenHandlers";
import jwt from "jsonwebtoken";

const getUserRole = async (): Promise<UserRole> => {
  const token = await getCookie("accessToken");

  if (!token) return "GUEST";

  try {
    const decoded = jwt.decode(token) as any;
    return decoded.role as UserRole;
  } catch {
    return "GUEST";
  }
};

export default getUserRole;
