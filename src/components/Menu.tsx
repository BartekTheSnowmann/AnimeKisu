import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Session } from "next-auth";
import React from "react";
import UserAvatar from "./UserAvatar";
import { navLinks, authLinks } from "../../constant/data";
import Link from "next/link";
import ModeToggle from "./DarkModeSwitch";
import LogOutBtn from "./LogOutBtn";
import { Button } from "./ui/button";

function Menu({ session }: { session: Session | null }) {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="flex justify-center">
          <SheetHeader>
            <SheetTitle className="flex justify-center">
              <Link href={"/profile"}>
                {session?.user && <UserAvatar session={session} />}
              </Link>
            </SheetTitle>
            <div className="flex justify-center pt-8">
              <ModeToggle />
            </div>

            <ul className="flex flex-col gap-4 py-8">
              {navLinks.map((navlink) => (
                <Link
                  key={`menu_link-${navlink.name}`}
                  className="flex items-center gap-2 text-sm font-medium leading-none drop-shadow-lg duration-300 hover:text-red-500"
                  href={navlink.link}
                >
                  <navlink.icon />
                  {navlink.name}
                </Link>
              ))}
            </ul>
            {session?.user ? (
              <LogOutBtn className="">Sign Out</LogOutBtn>
            ) : (
              authLinks.map((link) => (
                <Button key={`menu_authlink_${link.name}`} asChild>
                  <Link href={link.link}>{link.name}</Link>
                </Button>
              ))
            )}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Menu;
