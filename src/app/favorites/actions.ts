"use server";

import { cookies } from "next/dist/client/components/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import prisma from "@/lib/prisma/db";
import { revalidatePath } from "next/cache";

export async function getFavoritesList() {
  const session = await getServerSession(authOptions);
  let favoriteList;

  if (session) {
    favoriteList = await prisma.favorites.findFirst({
      where: {
        userId: session.user.id,
      },
      include: { items: { include: { animeItem: true } } },
    });
  } else {
    const localFavoriteListId = cookies().get("favoriteListId")?.value;
    favoriteList = localFavoriteListId
      ? await prisma.favorites.findUnique({
          where: {
            id: localFavoriteListId,
          },
          include: { items: { include: { animeItem: true } } },
        })
      : null;
  }

  if (!favoriteList) {
    return null;
  }

  return favoriteList;
}

export async function deleteFromFavorites(animeId: string) {
  // console.log(animeId);
  const userFavorites = await getFavorites();

  if (userFavorites) {
    await prisma.favorites.update({
      where: {
        id: userFavorites.id,
      },
      data: {
        items: {
          deleteMany: {
            animeId,
          },
        },
      },
    });
  }

  revalidatePath("/favorites");
}

export async function getFavorites() {
  // const session = await getServerSession(authOptions);

  const localFavoritesId = cookies().get("favoriteListId")?.value;
  if (!localFavoritesId) {
    await createFavorites();
  } else {
    // Czyli mamy cookie
    const userFavorites = await prisma.favorites.findFirst({
      where: {
        id: localFavoritesId,
      },
    });
    return userFavorites;
  }
}

export async function createFavorites() {
  const session = await getServerSession(authOptions);
  let newFavoriteList;
  if (!session?.user) {
    newFavoriteList = await prisma.favorites.create({
      data: {},
    });
    cookies().set("favoriteListId", newFavoriteList.id);
    return newFavoriteList;
  } else {
    newFavoriteList = await prisma.favorites.create({
      data: {
        userId: session.user.id,
      },
    });
  }
}
