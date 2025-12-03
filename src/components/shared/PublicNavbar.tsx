import { navConfig } from "@/config/nav-items";
import getUserRole from "@/lib/getUserRole";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/icons/logo.png";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import LogoutButton from "./LogoutButton";

const PublicNavbar = async () => {
  const role = await getUserRole();

  const navItems = navConfig[role];
  const isLoggedIn = role !== "GUEST";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Locana" width={150} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          {isLoggedIn ? (
            <LogoutButton />
          ) : (
            <>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-4">
              <SheetTitle className="sr-only">Navigation</SheetTitle>

              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((link) => (
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}

                <div className="border-t pt-4 flex flex-col space-y-4">
                  {isLoggedIn ? (
                    <LogoutButton />
                  ) : (
                    <>
                      <Link href="/register">
                        <Button>Register</Button>
                      </Link>
                      <Link href="/login">
                        <Button>Login</Button>
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
