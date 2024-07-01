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
    <footer className="w-full flex flex-col 2xl:flex-row items-start 2xl:items-center justify-start 2xl:justify-between py-5 px-8 2xl:px-16 text-grey-500 ">
      <div className="flex flex-col 2xl:flex-row items-start 2xl:items-center mb-6 2xl:mb-0">
        <Link href="/" className="cursor-pointer mb-10 2xl:mb-0 2xl:pr-12">
          <Image
            src={GoogleForDevelopers}
            alt="Google For Developers"
            width={180}
            height={26}
          />
        </Link>
        <div className="flex flex-col 2xl:flex-row 2xl:items-center">
          <a
            href="https://io.google/2023/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 font-medium mb-5 2xl:mb-0 2xl:pr-3 text-base"
          >
            I/O 2023
          </a>
          <a
            href="/2024/puzzle/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 font-medium mb-5 2xl:mb-0 2xl:px-3 text-base"
          >
            I/O Puzzle
          </a>
          <a
            href="https://policies.google.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 font-medium mb-5 2xl:mb-0 2xl:px-3 text-base"
          >
            Privacy &amp; terms
          </a>
          <a
            href="https://developers.google.com/community-guidelines"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 font-medium mb-5 2xl:mb-0 2xl:px-3   text-base"
          >
            Community guidelines
          </a>
          <a
            href="/2024/about/#section-one"
            className="text-gray-400 font-medium  2xl:mb-0  2xl:pl-3 text-base"
          >
            FAQ
          </a>
        </div>
      </div>
      <div className="flex flex-wrap 2xl:flex-nowrap justify-start 2xl:justify-end w-full 2xl:w-auto">
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
            className="w-7"
            loading="lazy"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://www.instagram.com/gdgsrilanka/"
          className="p-3 "
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Google Developers on Instagram"
        >
          <Image
            src={Instagram}
            alt="Google Developers on Instagram"
            className="w-7"
            loading="lazy"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/gdglk/"
          className="p-3 "
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Google Developers on LinkedIn"
        >
          <Image
            src={Linkedin}
            alt="Google Developers on Linkedin"
            className="w-7"
            loading="lazy"
            width={24}
            height={24}
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
            loading="lazy"
            width={24}
            height={24}
            className="w-7"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
