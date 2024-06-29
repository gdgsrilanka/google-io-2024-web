import React from "react";
import Link from "next/link";

interface VideoCardI {
  image: any;
  title: string;
  desc?:string;
  link?: string;
}

const VideoCard = ({ image, title, link, desc }: VideoCardI) => {
  return (
    <a href={link} className="mb-5 flex flex-col gap-5 w-full">
      <div className="w-full aspect-w-16 aspect-h-9 relative">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-[13px]"
        />
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-normal text-3xl">{title}</p>
        <p>{desc}</p>
      </div>
    </a>
  );
};

export default VideoCard;
