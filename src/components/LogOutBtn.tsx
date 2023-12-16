"use client";

import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

interface LogOutBtnProps {
  className?: string;
  children: React.ReactNode;
}

function LogOutBtn({ className, children }: LogOutBtnProps) {
  return (
    <Button
      className={`${className} flex cursor-pointer items-center gap-2  pl-2 text-sm font-semibold`}
      // variant="solid"
      onClick={() => signOut()}
    >
      {children}
      <LogOutIcon size={15} />
    </Button>
  );
}

export default LogOutBtn;
