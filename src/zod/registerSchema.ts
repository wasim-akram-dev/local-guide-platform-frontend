import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must match"),

    role: z.enum(["TOURIST", "GUIDE"]).default("TOURIST"),

    // Optional user fields
    profilePic: z.string().optional(),
    bio: z.string().optional(),
    languages: z.array(z.string()).optional(),

    // Guide-specific fields
    expertise: z.array(z.string()).optional(),
    dailyRate: z.number().optional(),

    // Tourist-specific fields
    preferences: z.array(z.string()).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;
