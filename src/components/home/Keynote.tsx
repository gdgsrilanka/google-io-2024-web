import React from "react";
import VideoCard from "../common/VideoCard";
import Link from "next/link";

const Keynote = () => {
  return (
    <div className="container mx-auto flex flex-col items-center mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <VideoCard
          image="/io24-featured-keynote-recap-videos.webp"
          title="Watch the recap videos"
          link="https://www.youtube.com/playlist?list=PLOU2XLYxmsIJZaqcQHCNrDtoaEgvZORMk"
        />
        <VideoCard
          image="/io24-featured-keynote-recap.webp"
          title="Google keynote"
          link="https://www.youtube.com/playlist?list=PLOU2XLYxmsIJZaqcQHCNrDtoaEgvZORMk"
        />
        <VideoCard
          image="/io24-featured-keynote-recap-developer.webp"
          title="Developer Keynote"
          link="https://www.youtube.com/playlist?list=PLOU2XLYxmsIJZaqcQHCNrDtoaEgvZORMk"
        />
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between w-full gap-10">
        <div className="relative flex-1 flex flex-row border-[1px] border-white rounded-2xl lg:flex-row overflow-hidden justify-between">
          <div className="flex flex-col items-start p-10 pr-0">
            <span className="text-grey dark:text-white mb-3 text-md:mb-4 sm:s-h4 md:l-h4 text-5xl">
              Join a community group
            </span>
            <div className="flex-1 flex flex-col items-start">
              <p className="text-grey dark:text-white mb-3 text-md:mb-6 sm:s-cta2 md:l-cta1">
                Meet developers, discover local groups, and build your global
                network.
              </p>
              <Link
                href="https://gdg.community.dev/gdg-sri-lanka/"
                className="px-4 py-3 rounded-full border-white border-[1px] hover:bg-white hover:text-black"
                target={"_blank"}
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="flex justify-end w-1/2 items-end pt-0 p-0 md:p-0 md:pr-4 ml:pt-[44.18px] ml-auto md:ml-[unset] mr-2 mb-[-2px]">
            <img
              src="https://io.google/2024/app/images/io24-join-community-cta-dark.svg"
              alt=""
              className="block mb-2 max-h-[145.2px] text-md:max-h-[192.9px] text-md:min-w-[259.42px] h-full w-auto"
            />
          </div>
        </div>

        <div className="relative flex-1 flex flex-row border-[1px] border-white rounded-2xl lg:flex-row overflow-hidden justify-between">
          <div className="flex flex-col items-start p-10 pr-0">
            <span className="text-grey dark:text-white mb-3 text-md:mb-4 sm:s-h4 md:l-h4 text-5xl">
              Continue Learning
            </span>

            <div className="flex-1 flex flex-col items-start">
              <p className="text-grey dark:text-white mb-3 text-md:mb-6 sm:s-cta2 md:l-cta1">
                Grow your skills around the Google technology you love.
              </p>
              <Link
                href="https://codelabs.developers.google.com/"
                className="px-4 py-3 rounded-full border-white border-[1px] hover:bg-white hover:text-black"
                target={"_blank"}
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="flex justify-end w-1/2 items-end pt-0 p-0 md:pr-4 ml:pt-[44.18px] ml-auto md:ml-[unset] mr-2 mb-[-2px]">
            <img
              src="https://io.google/2024/app/images/io24-learning-cta-dark.webp"
              alt=""
              className="block mb-2 max-h-[145.2px] text-md:max-h-[192.9px] text-md:min-w-[259.42px] h-full w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keynote;
