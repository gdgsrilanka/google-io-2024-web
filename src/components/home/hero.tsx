"use client";
import { Button } from "@/components/ui/button";
import herodark from "@public/hero-dark.svg";
import herodarkMobile from "@public/hero-dark-mobile.svg";
import { useMedia } from "use-media";
import Image from "next/image";
import { IoTicketOutline } from "react-icons/io5";

const Hero = () => {
  const isMobileScreen = useMedia({ maxWidth: "767px" });

  const handleClick = () => {
    const registrationUrl =
      process.env.NEXT_PUBLIC_REGISTRATION_URL ?? "https://dev.techevents.lk/";
    window.open(registrationUrl, "_blank");
  };

  return (
    <div>
      <section className="max-w-8xl flex flex-col items-center justify-between md:flex-row">
        <div className=" ml-6 justify-center md:w-2/6 text-center md:text-left m-0 px-5 py-5">
          <h1 className="text-6xl font-semibold md2:text-3xl">
            Google I/O Extended Sri Lanka 2024
          </h1>
          <h2 className="text-xl mt-5 mb-5 md2:text-base">
            Join us for an exhilarating deep dive into the latest innovations
            and announcements from Google I/O.
          </h2>
          <Button
            className="text-white font-semibold py-3 px-5 rounded-full text-xl bg-blue-600 hover:bg-blue-500 md2:text-sm"
            onClick={handleClick}
          >
            Buy Tickets <IoTicketOutline className={"ml-2"} fontWeight={7} />
          </Button>
        </div>
        <div className="md:mt-16 md:pr-4 lg:pr-0 w-full md:w-auto ">
          <Image
            className="w-full"
            src={isMobileScreen ? herodarkMobile : herodark}
            alt="Google I/O Extended Sri Lanka 2024 Hero Image"
          />
        </div>
      </section>
      <hr className="border-t-2  w-full md:border-t" />
    </div>
  );
};

export default Hero;
