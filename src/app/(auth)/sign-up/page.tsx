import { Input } from "@/components/ui/input";
import prisma from "@/lib/prisma/db";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { AnimeFront1 } from "@/app/public/assets";
import FormBtn from "./FormBtn";
import { Badge } from "@/components/ui/badge";
import RegisterForm from "./RegisterForm";

function Page() {
  return (
    <section className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-12">
      <div className="masked-image relative hidden min-h-[350px] bg-destructive sm:w-[50%] md:block md:min-h-[500px]">
        <Image className="absolute" src={AnimeFront1} alt="" />
        <Badge className="rounded-l-none mt-4">Join Us, User-San!</Badge>
      </div>

      <div className="px-4 py-8 md:py-0">
        <div>
          <h1 className="text-5xl font-bold tracking-tight drop-shadow-xl">
            Create Account
          </h1>
          <div className="divider" />
          <span className="text-muted-foreground">
            Already have an account?
          </span>
          <Link
            className="pl-2 font-bold text-destructive duration-300"
            href="/api/auth/signin"
          >
            Sign in
          </Link>
        </div>

        <RegisterForm />
      </div>
    </section>
  );
}

export default Page;
