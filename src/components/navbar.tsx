'use client';
import { useState } from "react";
import IOExtended2024LogoBlack from "@public/IOExtended2024-logo-core-black.png";
import IOExtended2024LogoWhite from "@public/IOExtended2024-logo-core-white.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleMenu = (): void => {
    setIsClick(isClick => !isClick);
  };

  return (
    <>
      <header className="max-w-8xl flex items-center justify-between py-4 mx-4">
        <Link href="/" className="cursor-pointer">
          <Image
            src={IOExtended2024LogoWhite}
            alt="Google I/O Extended Sri Lanka 2024"
            width={300}
            height={200}
          />
        </Link>
        <div>
          <nav className="md:hidden">
            <ul className="flex items-center gap-8 font-medium">
              <li>
                <a href="#why-io">Why I/O</a>
              </li>
              <li>
                <a href="#speakers">Speakers</a>
              </li>
              <li>
                <a href="#agenda">Agenda</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block items-center justify-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ml-5"
              onClick={toggleMenu}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      <div
        className={`hidden transition-max-height duration-700 ease-in ${isClick ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden md:block`}
      >
        <hr className="w-full border-t-2" />
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#why-io"
            className="hover:bg-white hover:text-black rounded-lg p-2 block"
          >
            Why I/O
          </a>
          <a
            href="#speakers"
            className="hover:bg-white hover:text-black rounded-lg p-2 block"
          >
            Speakers
          </a>
          <a
            href="#agenda"
            className="hover:bg-white hover:text-black rounded-lg p-2 block"
          >
            Agenda
          </a>
          <a
            href="#faq"
            className="hover:bg-white hover:text-black rounded-lg p-2 block"
          >
            FAQ
          </a>
        </div>
      </div>
      <hr className="w-full border-t-2" />
    </>
  );
};

export default Navbar;
