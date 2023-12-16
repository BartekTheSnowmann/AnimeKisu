"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useFormStatus } from "react-dom";
import Spinner from "@/app/public/spinner.svg";

interface FormBtnProps {
  children: React.ReactNode;
  className?: string;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

function FormBtn({ className, variant, children }: FormBtnProps) {
  const { pending } = useFormStatus();

  return (
    <Button variant={variant} className={`${className}`}>
      {pending ? (
        <Image
          src={Spinner}
          alt="spinner"
          width={28}
          height={28}
          className="object-contain"
        />
      ) : (
        <>{children}</>
      )}
    </Button>
  );
}

export default FormBtn;
