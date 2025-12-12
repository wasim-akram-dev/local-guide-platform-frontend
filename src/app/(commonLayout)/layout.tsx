export const dynamic = "force-dynamic";
import PublicFooter from "@/components/shared/PublicFooter";
import PublicNavbar from "@/components/shared/PublicNavbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicNavbar />
      <div className="grow">{children}</div>
      <PublicFooter />
    </div>
  );
};

export default CommonLayout;
