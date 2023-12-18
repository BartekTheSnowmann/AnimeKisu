import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function UserBadge({
  username,
  userImg,
}: {
  username: string;
  userImg?: string;
}) {
  return (
    <div className="flex items-center">
      <Avatar className="h-9 w-9 shadow-lg">
        {userImg ? (
          <AvatarImage className="object-cover" src={userImg} alt={username} />
        ) : (
          ""
        )}
        <AvatarFallback>{username.slice(0, 1)}</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-semibold leading-none drop-shadow-lg flex flex-col">
          <span className="text-muted-foreground text-xs drop-shadow-lg">
            Review by
          </span>
          {username}
        </p>
      </div>
    </div>
  );
}

export default UserBadge;
