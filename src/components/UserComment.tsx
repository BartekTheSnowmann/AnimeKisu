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

export default function UserComment({
  userReview,
  animeName,
}: {
  userReview: string;
  animeName: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit" variant="outline">
          See Full
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-scroll sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="my-2">{animeName}</DialogTitle>
          <DialogDescription>{userReview}</DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
