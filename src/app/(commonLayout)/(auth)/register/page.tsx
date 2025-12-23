export const dynamic = "force-dynamic";
import RegisterForm from "@/components/register-form";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-xl rounded-xl border bg-background shadow-xl">
        {/* Header */}
        <div className="border-b px-8 py-6 text-center">
          <h1 className="text-3xl font-bold text-primary">
            Create Your Locana Account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Join Locana and start exploring or guiding travelers
          </p>
        </div>

        {/* Form */}
        <div className="px-8 py-6">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
