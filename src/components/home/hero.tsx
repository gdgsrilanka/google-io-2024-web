"use client";
import herodark from "@public/hero-dark.svg";
import herodarkMobile from "@public/hero-dark-mobile.svg";
import { useMedia } from "use-media";
import Image from "next/image";

const Hero = () => {
  const isMobileScreen = useMedia({ maxWidth: "767px" });
  const handleClick = () => {
    window.open("https://www.google.com", "_blank"); // TODO: Replace the link with the techevents registration page
  };
  return (
    <div>
      <section className="max-w-8xl flex items-center justify-between flex-col md:flex-row px-5">
        <div className=" ml-6 text-center justify-center w-full md:text-left md:w-full py-5 px-5 md:m-0 md:px-5 md:py-5">
          <h1 className="text-3xl font-normal md:text-6xl">
            Google I/O Extended Sri Lanka 2024
          </h1>
          <h2 className="text-base mt-5 mb-5 md:text-xl w-full md:w-4/5">
            Join us for an exhilarating deep dive into the latest innovations
            and announcements from Google I/O.
          </h2>
          <button className="text-white font-normal py-3 px-5 rounded-full text-xl bg-blue-600 hover:bg-blue-500 md2:text-sm" onClick={handleClick}>Register</button>
        </div>
        <div className="mt-16 pr-4 lg:pr-0 md:w-full md:m-0">
          <Image
            className="w-full"
            src={isMobileScreen ? herodarkMobile : herodark}
            alt="Google I/O Extended Sri Lanka 2024 Hero Image"
            // height={534}
          />
        </div>
      </section>
      <hr className="border-t-2  w-full md:border-t" />
    </div>
  );
};

export default Hero;
