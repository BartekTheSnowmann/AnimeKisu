import Image from "next/image";
import React from "react";

function ProfilePicture({ ProfilePicture }: { ProfilePicture: string }) {
  return (
    <Image
      className="aspect-square rounded-full object-cover shadow-lg"
      src={ProfilePicture}
      alt="Profile Picture"
      width={200}
      height={300}
    />
  );
}

export default ProfilePicture;
