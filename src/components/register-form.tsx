/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { registerUser } from "@/services/auth/registerUser";
import { motion } from "framer-motion";
import { CheckCircle, Compass, Eye, EyeOff, User } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

const getPasswordStrength = (password: string) => {
  if (password.length < 6) return { label: "Weak", color: "bg-red-500" };
  if (password.length < 10) return { label: "Medium", color: "bg-yellow-500" };
  if (/\d/.test(password)) return { label: "Strong", color: "bg-emerald-500" };

  return { label: "Medium", color: "bg-yellow-500" };
};

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerUser, null);

  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const strength = getPasswordStrength(password);

  const getFieldError = (fieldName: string) => {
    if (state?.errors) {
      return state.errors.find((err: any) => err.field === fieldName)?.message;
    }
    return null;
  };

  //   const getFieldError = (fieldName: string) => {
  //     if (state && state.errors) {
  //       const error = state.errors.find((err: any) => err.field === fieldName);
  //       return error?.message;
  //     } else {
  //       return null;
  //     }
  //   };

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <motion.form
      action={formAction}
      className="space-y-6"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <FieldGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input id="name" name="name" type="text" placeholder="John Doe" />
            <FieldDescription className="text-red-600">
              {getFieldError("name")}
            </FieldDescription>
          </Field>

          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@locana.com"
            />
            <FieldDescription className="text-red-600">
              {getFieldError("email")}
            </FieldDescription>
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>

            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Strength bar */}
            <div className="mt-2">
              <motion.div
                className={`h-2 rounded ${strength.color}`}
                initial={{ width: "0%" }}
                animate={{
                  width:
                    strength.label === "Weak"
                      ? "33%"
                      : strength.label === "Medium"
                      ? "66%"
                      : "100%",
                }}
                transition={{ duration: 0.3 }}
              />
              <p className="mt-1 text-xs text-muted-foreground">
                Password strength:{" "}
                <span className="font-medium">{strength.label}</span>
              </p>
            </div>

            <FieldDescription className="text-red-600">
              {getFieldError("password")}
            </FieldDescription>
          </Field>

          {/* Confirm Password*/}
          <Field>
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="pr-10"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <FieldDescription className="text-red-600">
              {getFieldError("confirmPassword")}
            </FieldDescription>
          </Field>

          {/* Role */}
          <Field className="md:col-span-2">
            <FieldLabel>Choose Role</FieldLabel>
            <Select name="role">
              <SelectTrigger>
                <SelectValue placeholder="Select account type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TOURIST">
                  <div className="flex gap-2 items-center">
                    <Compass size={16} /> Tourist
                  </div>
                </SelectItem>
                <SelectItem value="GUIDE">
                  <div className="flex gap-2 items-center">
                    <User size={16} /> Guide
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>

            <FieldDescription className="text-red-600">
              {getFieldError("role")}
            </FieldDescription>
          </Field>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3 pt-4">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="mt-1"
          />
          <p className="text-sm text-muted-foreground">
            I agree to the{" "}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full mt-4"
          disabled={isPending || !acceptedTerms}
        >
          {isPending ? "Creating Account..." : "Create Account"}
        </Button>

        {acceptedTerms && (
          <motion.p
            className="flex items-center gap-2 text-xs text-emerald-600 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <CheckCircle size={14} />
            Terms accepted
          </motion.p>
        )}

        <FieldDescription className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </FieldDescription>
      </FieldGroup>
    </motion.form>
  );
};

export default RegisterForm;
