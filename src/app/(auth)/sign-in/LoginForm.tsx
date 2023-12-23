"use client";

import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "sonner";
import Spinner from "@/app/public/spinner.svg";

import { useRouter } from "next/navigation";
import { userSchema } from "@/lib/validation/userValidation";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShieldAlert } from "lucide-react";

type TstateError = {
  isError: boolean | null;
  message: string[];
};

function LoginForm() {
  const router = useRouter();

  const [isError, setIsError] = useState<TstateError>({
    isError: false,
    message: [""],
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsPending(true);
    e.preventDefault();

    const newUser = {
      username,
      password,
    };

    const result = userSchema.safeParse(newUser);
    if (!result.success) {
      let isArr: string[] = [];
      result.error.issues.map((error) => {
        isArr.push(error.message);
        setIsError({ isError: true, message: isArr });
      });
      setIsPending(false);
      toast.error(
        isArr.map((err) => (
          <React.Fragment key={`signIpErr - ${err}`}>
            {err}
            <br />
          </React.Fragment>
        ))
      );
      return;
    }

    try {
      const login = await signIn("credentials", {
        callbackUrl: "/",
        redirect: false,
        username,
        password,
      });

      if (login?.status == 200) {
        setIsPending(false);
        toast.success(`Welcome back ${username}!`);
        router.push("/");
        router.refresh();
      } else {
        setIsPending(false);
        toast.error("User not Found 🙃. You might have misspelled something");
      }
    } catch (error) {}
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button>
        {isPending ? (
          <Image
            src={Spinner}
            alt="spinner"
            width={28}
            height={28}
            className="object-contain"
          />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}

export default LoginForm;
