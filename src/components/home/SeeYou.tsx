import React from "react";
import Image from "next/image";

const SeeYou = () => {
  return (
    <div className="mt-28 relative w-full h-[420px] md2:h-[220px]">
      <Image
        src="io24-see-you-next-year-dark.svg"
        fill
        alt="io24-see-you-next-year"
        className="object-contain"
      />
      <div className="absolute md:top-10 md2:top-0 left-0 px-5 sm:px-10 py-5">
        <h1 className="title text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white">See you at the event!</h1>
      </div>
    </div>
  );
};

export default SeeYou;