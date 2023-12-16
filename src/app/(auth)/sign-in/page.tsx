import React from "react";
import LoginForm from "./LoginForm";
import Image from "next/image";
import { AnimeFront2 } from "@/app/public/assets";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function page() {
  return (
    <section className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-12">
      <div className="masked-image relative hidden min-h-[350px] bg-destructive sm:w-[50%] md:block md:min-h-[500px]">
        <Image
          className="absolute bottom-0 left-0 -translate-x-1/2"
          src={AnimeFront2}
          alt=""
        />
        <Badge className="absolute left-1/2 top-1/3 z-50 mx-2 rounded-full rounded-bl-none bg-white">
          <h1 className="p-2 text-xl text-muted-foreground">Welcome Back!</h1>
        </Badge>
      </div>

      <div className="px-4 py-8 md:py-0">
        <div className="pb-4">
          <h1 className="pb-2 text-5xl font-bold tracking-tight drop-shadow-xl">
            Login
          </h1>
          <div className="divider" />
          <span className="text-muted-foreground">Doesnt have an account?</span>
          <Link
            className="pl-2 font-bold text-destructive duration-300"
            href="/api/auth/signin"
          >
            Sign Up
          </Link>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}

export default page;
