"use server";

import prisma from "@/lib/prisma/db";
import { cookies } from "next/dist/client/components/headers";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export async function removeCookie() {
  cookies().delete("favoriteListId");
  revalidatePath("/favorites");
}

// After singin in
export async function createFavoriteListAfterSignIn(userId: string) {
  // Check if user already have list of favorites
  const userList = await prisma.favorites.findFirst({
    where: {
      userId: userId,
    },
  });

  if (userList) {
    // Case 1 - Have a list
    cookies().set("favoriteListId", userList.id);
  } else {
    // Case 2 - Doesnt have a list
    const newList = await prisma.favorites.create({
      data: {
        userId: userId,
      },
    });
    cookies().set("favoriteListId", newList.id);
  }
}

export async function changeProfilePicture(imageUrl: string) {
  const session = await getServerSession(authOptions);

  if (session) {
    await prisma.user.update({
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

export async function changeBio(bio: string) {
  const session = await getServerSession(authOptions);

  if (session) {
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        bio: bio,
      },
    });
  }

  revalidatePath("/profile");
}
