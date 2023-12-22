"use server";

import prisma from "@/lib/prisma/db";
import { User } from "@prisma/client";

export interface newUserData {
  username: string;
  email: string;
  imageUrl?: string;
  password: string;
}

export type response = {
  newUser?: User;
  success: boolean;
  message: string;
};

export async function createNewUser(formData: newUserData): Promise<response> {
  const isUsernameOccupied = await prisma.user.findUnique({
    where: {
      username: formData.username,
    },
  });

  const isEmailOccupied = await prisma.user.findUnique({
    where: {
      email: formData.email,
    },
  });

  if (isUsernameOccupied) {
    return { success: false, message: "Username is already used" };
  }
  if (isEmailOccupied) {
    return { success: false, message: "Email is already used" };
  }

  const newUser = await prisma.user.create({
    data: {
      username: formData.username,
      name: formData.username,
      email: formData.email,
      image:
        formData.imageUrl ||
        "https://i.pinimg.com/280x280_RS/d8/ea/7b/d8ea7b37641ce7b201f264041d300ea1.jpg",
      password: formData.password,
    },
  });

  return {
    success: true,
    message: `${newUser.username} Successfully created!`,
    newUser,
  };
}
