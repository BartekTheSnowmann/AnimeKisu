"use client";

import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useTransition } from "react";
import { changeProfilePicture } from "../../lib/actions";
import { useSession } from "next-auth/react";

export default function ChangeProfilePicture() {
  const [imageUrl, setImageUrl] = useState("");
  const [isPending, startTransition] = useTransition();

  const { data: session, update } = useSession();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Change Photo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Paste Image Url here</DialogTitle>
          <DialogDescription>
            Make sure its a correct link. To see changes, you need to sign in
            again.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              placeholder="Image Url..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              onClick={() =>
                startTransition(async () => {
                  await changeProfilePicture(imageUrl);
                  update({
                    ...session,
                    user: {
                      ...session?.user,
                      image: imageUrl,
                    },
                  });
                })
              }
              className="mt-2"
              variant={"outline"}
            >
              Submit
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
