"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../../constant/data";

function NavItems() {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((navlink) => (
        <Link
          key={`menu_link-${navlink.name}`}
          className={`${
            pathname === navlink.link ? "text-destructive" : ""
          } "flex items-center gap-2 hover:text-red-400 text-sm font-medium leading-none drop-shadow-lg duration-300"`}
          href={navlink.link}
        >
          {navlink.name}
        </Link>
      ))}
    </>
  );
}

export default NavItems;
