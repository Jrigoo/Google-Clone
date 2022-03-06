import React from "react";
import Image from "next/image";

interface Props {}

export const Avatar: React.FC<Props> = ({}) => {
  return (
    <div className="p-1 rounded-full hover:bg-gray-100 cursor-pointer grid place-content-center">
      <Image
        loading="lazy"
        src="/images/profile.jpeg"
        alt="Profile pic"
        width={30}
        height={30}
        className="object-cover rounded-full"
      />
    </div>
  );
};
