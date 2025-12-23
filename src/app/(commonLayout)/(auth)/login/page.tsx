export const dynamic = "force-dynamic";
import LoginForm from "@/components/login-form";

const LoginPage = async () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-md rounded-xl border bg-background shadow-xl">
        {/* Header */}
        <div className="border-b px-8 py-6 text-center">
          <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue exploring with Locana
          </p>
        </div>

        {/* Form */}
        <div className="px-8 py-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
