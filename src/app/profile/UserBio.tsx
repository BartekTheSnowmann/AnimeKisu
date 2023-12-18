import prisma from "@/lib/prisma/db";
import React from "react";
import ChangeBio from "./ChangeBio";

const getBio = async (userId: string) => {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: { bio: true },
  });
  return user?.bio;
};

async function UserBio({ userId }: { userId: string }) {
  const bio = await getBio(userId);

  return (
    <div className="max-w-md p-2 gap-2">
      <p className="pb-2">{bio ? bio : "One of the users on AnimeKisu"}</p>
      <ChangeBio />
    </div>
  );
}

export default UserBio;
