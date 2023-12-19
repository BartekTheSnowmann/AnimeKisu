"use client";

import React, { useState, useTransition } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { changeBio } from "../../lib/actions";
import Spinner from "@/app/public/spinner.svg";
import Image from "next/image";
import { toast } from "sonner";
import { PenSquare } from "lucide-react";

function ChangeBio() {
  const [isPending, startTransition] = useTransition();
  const [bio, setBio] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <PenSquare className="mx-auto h-4 w-4" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Change Bio</DialogTitle>
          <DialogDescription>
            To see changes, you need to sign in again.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              placeholder="bio..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          {isPending ? (
            <Image
              src={Spinner}
              alt="spinner"
              width={28}
              height={28}
              className="object-contain mx-auto mt-2"
            />
          ) : (
            <Button
              onClick={() =>
                startTransition(async () => {
                  await changeBio(bio);
                  toast.success(
                    "Updated your bio. Refresh the page to see the changes."
                  );
                })
              }
              variant={"outline"}
            >
              Submit
            </Button>
          )}

          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ChangeBio;
