import React from "react";
import Image from "next/image";

interface Props {}

export const Avatar: React.FC<Props> = ({}) => {
  return (
    <>
      <Image
        loading="lazy"
        src="/images/profile.jpeg"
        alt="Profile pic"
        width={35}
        height={35}
        className="object-cover rounded-full cursor-pointer transition-all duration-150 hover:scale-110"
      />
    </>
  );
};
