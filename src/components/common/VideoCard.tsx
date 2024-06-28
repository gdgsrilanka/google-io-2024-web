import React from "react";
import Link from "next/link";

interface VideoCardI {
  image: any;
  title: string;
  link: string;
}

const VideoCard = ({ image, title, link }: VideoCardI) => {
  return (
    <Link href={link} className="mb-5 flex flex-col gap-5 w-full">
      <div className="w-full aspect-w-16 aspect-h-9 relative">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-[13px]"
        />
      </div>
      <div>
        <p className="font-normal text-xl">{title}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
