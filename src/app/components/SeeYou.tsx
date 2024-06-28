import React from "react";
import Image from "next/image";

const SeeYou = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col items-start px-10">
        <h1 className="title text-5xl font-medium">See you next year!</h1>
      </div>

      <div className="relative w-full mobile:h-[420px] md:h-[100px]">
        <Image
          src="io24-see-you-next-year-dark.svg"
          fill
          alt="io24-see-you-next-year"
        />
      </div>
    </div>
  );
};

export default SeeYou;
