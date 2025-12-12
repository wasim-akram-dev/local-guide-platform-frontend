/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { registerSchema } from "@/zod/registerSchema";
import { loginUser } from "./loginUser";

export const registerUser = async (_currentState: any, formData: FormData) => {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      role: formData.get("role") || "TOURIST",

      // optional fields (empty by default)
      languages: [],
      expertise: [],
      preferences: [],
    };

    if (rawData.password !== rawData.confirmPassword) {
      return { success: false, message: "Passwords do not match" };
    }

    // Validate using Zod
    // const parsed = registerSchema.safeParse(rawData);
    // if (!parsed.success) {
    //   const issue = parsed.error.issues[0];
    //   return {
    //     success: false,
    //     message: issue.message,
    //     field: issue.path[0],
    //   };
    // }

    const parsed = registerSchema.safeParse(rawData);

    if (!parsed.success) {
      return {
        success: false,
        errors: parsed.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/register`,
      {
        method: "POST",
        body: JSON.stringify(parsed.data),
        headers: { "Content-Type": "application/json" },
      }
    );

    const result = await response.json();
    console.log(result, "result");

    if (!response.ok) {
      return { success: false, message: result.error || "Registration failed" };
    }

    // Automatic login after registration successful
    if (result.success) {
      await loginUser(_currentState, formData);
    }

    return {
      success: true,
      message: "Registration successful!",
      data: result,
    };
  } catch (error: any) {
    // return { success: false, message: "Something went wrong" };
    // Re-throw NEXT_REDIRECT errors so Next.js can handle them
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Registration failed. Please try again."
      }`,
    };
  }
};
