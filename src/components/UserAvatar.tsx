import { Session } from "next-auth";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DropdownMenuDemo = ({ session }: { session: Session }) => {
  return (
    <>
      <Avatar>
        <AvatarImage
          className="object-cover"
          src={session?.user?.image as string}
        />
        <AvatarFallback>{session?.user.name?.slice(0, 1)}</AvatarFallback>
      </Avatar>
    </>
  );
};

export default DropdownMenuDemo;
