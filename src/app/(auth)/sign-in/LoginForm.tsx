"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "sonner";

function LoginForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      return toast.warning("Provide all credentials!");
    }

    await signIn("credentials", {
      callbackUrl: "/",
      redirect: true,
      password,
      username,
    });
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
      <Button>Submit</Button>
    </form>
  );
}

export default LoginForm;
