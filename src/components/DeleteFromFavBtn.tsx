"use client";

import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { deleteFromFavorites } from "@/app/favorites/actions";
import Spinner from "@/../public/spinner.svg";
import Image from "next/image";
import { toast } from "sonner";

interface DeleteFromFavBtnProps {
  favoritesId?: string;
  animeId: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  className?: string;
  animeName: string;
}

function DeleteFromFavBtn({
  animeId,
  animeName,
  variant,
  className,
}: DeleteFromFavBtnProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      {isPending ? (
        <Image src={Spinner} alt="spinner" width={48} height={48} />
      ) : (
        <Button
          size={"icon"}
          aria-label="delete anime from favorites"
          onClick={() =>
            startTransition(async () => {
              await deleteFromFavorites(animeId);
              toast.success(`Deleted ${animeName}`);
            })
          }
          className={`w-fit px-2 ${className}`}
          variant={variant}
        >
          <Trash />
        </Button>
      )}
    </>
  );
}

export default DeleteFromFavBtn;
