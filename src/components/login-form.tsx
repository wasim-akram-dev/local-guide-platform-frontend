"use client";

import { loginUser } from "@/services/auth/loginUser";
import { Compass, Shield, User } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import InputFieldError from "./shared/InputFieldError";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

const DEMO_USERS = {
  tourist: {
    email: "tourist@gmail.com",
    password: "123456",
  },
  guide: {
    email: "guide@gmail.com",
    password: "123456",
  },
  admin: {
    email: "admin@gmail.com",
    password: "123456",
  },
};

const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<
    "tourist" | "guide" | "admin" | null
  >(null);

  //   console.log("state: from login-form", state);

  // const getFieldError = (fieldName: string) => {
  //   if (state && state.errors) {
  //     const error = state.errors.find((err: any) => err.field === fieldName);
  //     return error?.message;
  //   } else {
  //     return null;
  //   }
  // };

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const fillDemoUser = (role: keyof typeof DEMO_USERS) => {
    setEmail(DEMO_USERS[role].email);
    setPassword(DEMO_USERS[role].password);
    setSelectedRole(role);

    toast.success(
      `Demo ${role.charAt(0).toUpperCase() + role.slice(1)} selected`
    );
  };

  return (
    <form action={formAction} className="space-y-6">
      {/* Demo Users */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground text-center">
          Try with demo accounts
        </p>

        <div className="grid grid-cols-3 gap-2">
          {/* Tourist */}
          <Button
            type="button"
            onClick={() => fillDemoUser("tourist")}
            variant={selectedRole === "tourist" ? "default" : "outline"}
            className={`
        flex gap-2
        ${selectedRole === "tourist" ? "ring-2 ring-primary/40" : ""}
      `}
          >
            <Compass size={16} />
            Tourist
          </Button>

          {/* Guide */}
          <Button
            type="button"
            onClick={() => fillDemoUser("guide")}
            variant={selectedRole === "guide" ? "default" : "outline"}
            className={`
        flex gap-2
        ${
          selectedRole === "guide"
            ? "bg-emerald-600 hover:bg-emerald-600 ring-2 ring-emerald-400 text-white"
            : ""
        }
      `}
          >
            <User size={16} />
            Guide
          </Button>

          {/* Admin */}
          <Button
            type="button"
            onClick={() => fillDemoUser("admin")}
            variant={selectedRole === "admin" ? "default" : "outline"}
            className={`
        flex gap-2
        ${
          selectedRole === "admin"
            ? "bg-red-600 hover:bg-red-600 ring-2 ring-red-400 text-white"
            : ""
        }
      `}
          >
            <Shield size={16} />
            Admin
          </Button>
        </div>

        {/* Selected indicator */}
        {selectedRole && (
          <p className="text-xs text-center text-muted-foreground">
            Selected demo account:{" "}
            <span className="font-medium capitalize text-foreground">
              {selectedRole}
            </span>
          </p>
        )}
      </div>

      {/* Fields */}
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@locana.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputFieldError field="email" state={state} />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputFieldError field="password" state={state} />
        </Field>
      </FieldGroup>

      {/* Actions */}
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </Button>

      {/* Links */}
      <div className="space-y-2 text-center text-sm">
        <FieldDescription>
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </FieldDescription>

        {/* <FieldDescription>
          <a href="/forget-password" className="text-primary hover:underline">
            Forgot password?
          </a>
        </FieldDescription> */}
      </div>
    </form>
  );
};

export default LoginForm;
