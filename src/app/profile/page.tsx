import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/options";
import ProfilePicture from "./ProfilePicture";
import ChangeProfilePicture from "./ChangeProfilePicture";

async function page() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-24">
        <h1>Sign in brother</h1>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <ProfilePicture
            ProfilePicture={
              session.user.image ??
              "https://i.pinimg.com/736x/97/eb/10/97eb10e5c7bcd69f1e0ca43ae00c9568.jpg"
            }
          />
          <div className="pt-4">
            <ChangeProfilePicture />
          </div>
        </div>
        <div className="mx-4 text-center">
          <h3 className="text-3xl font-bold tracking-wide">
            {session.user.name}
          </h3>
          <span className="text-muted-foreground">
            One of the users on AnimeKisu
          </span>
        </div>
      </div>
    </section>
  );
}

export default page;
