'use client';
import { useState } from 'react';
import GoogleForDevelopers from '@public/images/Logo-GoogleForDevelopers.svg';
import Instagram from '@public/images/ic_instagram.svg';
import Twitter from '@public/images/ic_twitter.svg';
import Youtube from '@public/images/ic_youtube.svg';
import Linkedin from '@public/images/ic_linkedin.svg';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between py-10 px-16 text-grey-500 border-t-2 ">
      <div className="w-full flex items-center">
        <Link href="/" className="cursor-pointer pr-12">
          <Image
            src={GoogleForDevelopers}
            alt="Google For Developers"
            width={180}
            height={24}
          />
        </Link>
        <div className="">
          <a
            href="https://io.google/2023/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 font-medium pr-3 text-base"
          >
            I/O 2023
          </a>
          <a
            href="/2024/puzzle/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 font-medium px-3 text-base"
          >
            I/O Puzzle
          </a>
          <a
            href="https://policies.google.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 font-medium px-3 text-base"
          >
            Privacy &amp; terms
          </a>
          <a
            href="https://developers.google.com/community-guidelines"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 font-medium px-3 text-base"
          >
            Community guidelines
          </a>
          <a
            href="/2024/about/#section-one"
            className="text-gray-400 font-medium pl-3 text-base"
          >
            FAQ
          </a>
        </div>

        <div className="hidden md:block items-center justify-center"></div>
      </div>
      <div className="flex lg:justify-self-end lg:justify-end mt-12 lg:mt-0">
        <a
          href="https://www.youtube.com/@GDGSriLanka"
          className="p-3"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Google Developers on YouTube"
        >
          <Image
            src={Youtube}
            alt="Google Developers on Youtube"
            width={30}
            height={30}
            loading="lazy"
          />
        </a>
        <a
          href="https://www.instagram.com/gdgsrilanka/"
          className="p-3"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Google Developers on Instagram"
        >
          <Image
            src={Instagram}
            alt="Google Developers on Instagram"
            width={30}
            height={30}
            loading="lazy"
          />
        </a>

        <a
          href="https://www.linkedin.com/company/gdglk/"
          className="p-3"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Google Developers on LinkedIn"
        >
          <Image
            src={Linkedin}
            alt="Google Developers on Linkedin"
            width={30}
            height={30}
            loading="lazy"
          />
        </a>

        <a
          href="https://twitter.com/googledevs"
          className="p-3"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Google Developers on Twitter"
        >
          <Image
            src={Twitter}
            alt="Google Developers on X"
            width={30}
            height={30}
            loading="lazy"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
