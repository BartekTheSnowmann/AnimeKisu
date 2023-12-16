import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/public/assets/AnimeKisuLogo.png";
import { navLinks, socialLinks } from "@/../constant/data";

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl pt-12">
      <div className="flex items-start justify-between px-4 pb-8">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Anime-Kisu" height={40} width={40} />
          </Link>
          {/* <p>AnimeKisu - Express yourself</p> */}
        </div>

        <ul className="flex flex-col gap-2">
          <h3 className="pb-4 font-bold ">Navigation</h3>
          {navLinks.map((navlink) => (
            <Link
              key={`footer_navlink-${navlink.name}`}
              className="flex items-center gap-2"
              href={navlink.link}
            >
              <navlink.icon />
              {navlink.name}
            </Link>
          ))}
        </ul>
        <ul className="flex flex-col gap-2">
          <h3 className="pb-4 font-bold ">Contact</h3>
          {socialLinks.map((navlink) => (
            <Link
              key={`footer_navlink-${navlink.name}`}
              className="flex items-center gap-2"
              href={navlink.link}
            >
              <navlink.icon />
              {navlink.name}
            </Link>
          ))}
        </ul>
      </div>
      <div className="mx-4 border-t-2 border-black dark:border-white text-center">
        <p className="py-8">AnimeKisu© 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
