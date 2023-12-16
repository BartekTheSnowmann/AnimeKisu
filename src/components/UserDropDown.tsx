import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Session } from "next-auth";
import UserAvatar from "./UserAvatar";

import React from "react";
import Link from "next/link";
import LogOutBtn from "./LogOutBtn";

function UserDropDown({ session }: { session: Session }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar session={session} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile">
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </Link>
        <Link href="/favorites">
          <DropdownMenuItem>Favorites</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <LogOutBtn className="w-full mx-2 mx-auto">Sign out</LogOutBtn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropDown;
