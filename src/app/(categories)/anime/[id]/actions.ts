"use server";

import { TAnime } from "@/lib/animeTypes";
import prisma from "@/lib/prisma/db";
import { revalidatePath } from "next/cache";
import { cookies } from "next/dist/client/components/headers";

export async function addToFavorite(animeData: TAnime): Promise<any> {
  const isItem = await prisma.animeItem.findFirst({
    where: {
      name: animeData.title,
    },
  });
  if (isItem) {
    const userList = cookies().get("favoriteListId")?.value;
    if (!userList) {
      const newFavoriteList = await prisma.favorites.create({
        data: {
          items: {
            create: {
              animeId: isItem.id,
            },
          },
        },
      });
      cookies().set("favoriteListId", newFavoriteList.id);
    } else {
      const localFavoritesId = cookies().get("favoriteListId")?.value;
      const userFavorites = await prisma.favorites.findFirst({
        where: {
          id: localFavoritesId,
        },
        include: {
          items: true,
        },
      });
      const isItemInCart = userFavorites?.items.find(
        (item) => item.animeId === isItem.id,
      );
      if (isItemInCart) {
        return;
      }
      await prisma.favorites.update({
        where: {
          id: userList,
        },
        data: {
          items: {
            create: {
              animeId: isItem.id,
            },
          },
        },
      });
    }
  } else {
    const animeItem = await prisma.animeItem.create({
      data: {
        description: animeData?.background,
        mal_id: animeData.mal_id,
        episodes: animeData?.episodes,
        score: animeData?.score,
        synopsis: animeData?.synopsis,
        imageUrl: animeData.images.jpg.image_url,
        name: animeData.name || animeData.title,
      },
    });
    const userList = cookies().get("favoriteListId")?.value;
    if (!userList) {
      const newFavoriteList = await prisma.favorites.create({
        data: {
          items: {
            create: {
              animeId: animeItem.id,
            },
          },
        },
      });
      cookies().set("favoriteListId", newFavoriteList.id);
    } else {
      await prisma.favorites.update({
        where: {
          id: userList,
        },
        data: {
          items: {
            create: {
              animeId: animeItem.id,
            },
          },
        },
      });
    }
  }
  revalidatePath("/favorites");
}
