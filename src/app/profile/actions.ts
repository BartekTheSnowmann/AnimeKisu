import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import prisma from "@/lib/prisma/db";
import { revalidatePath } from "next/cache";

export async function changeProfilePicture(imageUrl: string) {
  "use server";
  const session = await getServerSession(authOptions);

  if (session) {
    prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        image: imageUrl,
      },
    });
  }
  revalidatePath("/profile");
}
