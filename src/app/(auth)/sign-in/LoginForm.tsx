"use client";

import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "sonner";
import FormBtn from "../sign-up/FormBtn";

function LoginForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      return toast.warning("Provide all credentials!");
    }

    try {
      await signIn("credentials", {
        callbackUrl: "/",
        redirect: true,
        password,
        username,
      });
    } catch (error) {
      toast.error("There was an error");
    }
  };

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
      <FormBtn variant={"default"}>Submit</FormBtn>
    </form>
  );
}

export default LoginForm;
