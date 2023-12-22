"use client";

import React, { useState } from "react";
import { createNewUser, newUserData } from "./actions";
import { newUserSchema } from "@/lib/validation/userValidation";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import FormBtn from "./FormBtn";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

type TstateError = {
  isError: boolean | null;
  message?: string[];
};

function RegisterForm() {
  const [isError, setIsError] = useState<TstateError>({
    isError: false,
    message: [""],
  });

  const clientAction = async (formData: FormData) => {
    const username = formData.get("username")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const imageUrl = formData.get("imageUrl")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    if (!username || !email || !password) {
      setIsError({ isError: true });
      toast.warning("Fill all the inputs!");
      return;
    }

    const newUser: newUserData = {
      username,
      email,
      imageUrl:
        imageUrl ||
        "https://i.pinimg.com/280x280_RS/d8/ea/7b/d8ea7b37641ce7b201f264041d300ea1.jpg",
      password,
    };

    const result = newUserSchema.safeParse(newUser);
    if (!result.success) {
      let isArr: string[] = [];
      result.error.issues.map((error) => {
        isArr.push(error.message);
        setIsError({ isError: true, message: isArr });
      });
      toast.error(
        isArr.map((err) => (
          <React.Fragment key={`signUpErr - ${err.length}`}>
            {err}
            <br />
          </React.Fragment>
        ))
      );
      return;
    }

    try {
      const response = await createNewUser(newUser);
      if (!response.success) {
        toast.warning(response.message);
      } else {
        toast.success(response.message);
        await signIn("credentials", {
          callbackUrl: "/",
          username: response.newUser?.username,
          password: response.newUser?.password,
        });
      }
    } catch (error) {}
  };

  return (
    <form
      className="flex flex-col items-stretch gap-4 py-4 pb-8"
      action={clientAction}
    >
      {isError.isError && (
        <Badge className="bg-transparent px-0 text-destructive font-bold py-2">
          <motion.span
            className="flex items-center gap-x-2"
            key={`${Date.now()}-error`}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <ShieldAlert />
            There is an error!
          </motion.span>
        </Badge>
      )}

      <Input type="text" name="username" placeholder="username" />
      <Input type="email" name="email" placeholder="email" />
      <Input type="url" name="imageUrl" placeholder="imageUrl" />
      <Input
        type="password"
        name="password"
        placeholder="password"
        autoComplete="off"
      />
      <FormBtn variant={"default"}>Submit</FormBtn>
    </form>
  );
}

export default RegisterForm;
