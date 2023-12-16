import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import prisma from "@/lib/prisma/db";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { AnimeFront1 } from "@/app/public/assets";
import { useFormState, useFormStatus } from "react-dom";
import FormBtn from "./FormBtn";
import { Badge } from "@/components/ui/badge";

function Page() {
  async function createNewUser(formdata: FormData) {
    "use server";

    const username = formdata.get("username")?.toString();
    const email = formdata.get("email")?.toString();
    const imageUrl = formdata.get("imageUrl")?.toString();
    const password = formdata.get("password")?.toString();

    if (!username || !email || !password) {
      return;
    }

    const isUsernameInDb = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    const isEmailInDb = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (isUsernameInDb || isEmailInDb) {
      return "User with such credentials already exists";
    } else {
      await prisma.user.create({
        data: {
          username,
          name: username,
          email,
          image: imageUrl,
          password,
        },
      });

      redirect("/api/auth/signin");
    }
  }

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
        <form
          className="flex flex-col items-stretch gap-4 py-4 pb-8"
          action={createNewUser}
        >
          <Input type="text" name="username" placeholder="username" />
          <Input type="email" name="email" placeholder="email" />
          <Input type="url" name="imageUrl" placeholder="imageUrl" />
          <Input
            type="password"
            name="password"
            placeholder="password"
            autoComplete="off"
          />
          <FormBtn className="px-4 py-2 duration-300" variant={"destructive"}>
            Submit
          </FormBtn>
        </form>
      </div>
    </section>
  );
}

export default Page;
