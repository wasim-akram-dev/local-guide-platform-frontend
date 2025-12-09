/* eslint-disable @typescript-eslint/no-explicit-any */
import z from "zod";

const CATEGORIES = [
  "Adventure",
  "City Tour",
  "Culture",
  "Historical",
  "Nature",
  "Others",
] as const;

export const createListingZodSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(10, "Description must be minimum 10 characters"),
  itinerary: z.string().min(5, "Itinerary must be minimum 5 characters"),

  tourFee: z
    .string()
    .refine(
      (v) => !isNaN(Number(v)) && Number(v) > 0,
      "Tour fee must be a valid number"
    ),

  duration: z
    .string()
    .refine(
      (v) => !isNaN(Number(v)) && Number(v) >= 1,
      "Duration must be at least 1"
    ),

  meetingPoint: z
    .string()
    .min(3, "Meeting point must be at least 3 characters"),

  maxGroupSize: z
    .string()
    .refine(
      (v) => !isNaN(Number(v)) && Number(v) >= 1,
      "Group size must be at least 1"
    ),

  images: z.array(z.string().url("Image must be valid URL")).default([]),

  city: z.string().min(2, "City must be at least 2 characters"),

  // category: z.enum(CATEGORIES, {
  //   errorMap: () => ({ message: "Invalid category selected" }),
  // }),

  category: z
    .string({ error: "Category is required" })
    .refine((val) => CATEGORIES.includes(val as any), {
      message: `Category must be one of: ${CATEGORIES.join(", ")}`,
    }),
});

// For UPDATE → all fields optional but validate types properly
export const updateListingZodSchema = createListingZodSchema.partial();
