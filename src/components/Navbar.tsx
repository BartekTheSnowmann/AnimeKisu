import Image from "next/image";
import React from "react";
import Logo from "@/app/public/assets/AnimeKisuLogo.png";
import Link from "next/link";
import SearchBar from "./SearchBar";
import ModeToggle from "./DarkModeSwitch";
import { Button } from "./ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import UserDropDown from "./UserDropDown";
import Menu from "./Menu";
import { navLinks, authLinks } from "../../constant/data";
import NavItems from "./NavItems";

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="sticky top-0 z-30 bg-white dark:bg-black">
      <div className="bg-dark z-50 mx-auto flex h-20 max-w-7xl items-center justify-between p-4 shadow-md">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" width={40} height={40} />
        </Link>

        <div className="">
          <SearchBar />
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <NavItems />
          <ul className="flex gap-4">
            {session?.user ? (
              <div className="mx-2">
                <UserDropDown session={session} />
              </div>
            ) : (
              <div className="flex">
                {authLinks.map((link, idx) => (
                  <Button
                    className={
                      idx % 2 == 0 ? "rounded-r-none" : "rounded-l-none"
                    }
                    variant={idx % 2 == 0 ? "outline" : "destructive"}
                    asChild
                    key={`auth_link-${link.name}`}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </Button>
                ))}
              </div>
            )}
          </ul>
          <ModeToggle />
        </div>

        <div className="block md:hidden">
          <Menu session={session} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
