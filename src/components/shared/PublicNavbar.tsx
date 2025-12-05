import { getNavConfig } from "@/config/nav-config";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/icons/logo.png";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import LogoutButton from "./LogoutButton";

const PublicNavbar = async () => {
  const navItems = await getNavConfig();
  const user = await getUserInfo();
  const isLoggedIn = !!user;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Locana" width={150} height={50} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {isLoggedIn ? (
            <LogoutButton />
          ) : (
            <>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu size={20} />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[260px] p-4">
              <SheetTitle className="sr-only">Navigation</SheetTitle>

              <nav className="flex flex-col space-y-4 mt-10">
                {navItems?.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}

                <div className="border-t pt-4 flex flex-col gap-3">
                  {isLoggedIn ? (
                    <LogoutButton />
                  ) : (
                    <>
                      <Link href="/register">
                        <Button>Register</Button>
                      </Link>
                      <Link href="/login">
                        <Button variant="outline">Login</Button>
                      </Link>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
