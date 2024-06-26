'use client';
import { useState } from "react";
import GoogleForDevelopers from "@public/images/Logo-GoogleForDevelopers.svg"
import Instagram from "@public/images/ic_instagram.svg";
import Twitter from "@public/images/ic_twitter.svg";
import Youtube from "@public/images/ic_youtube.svg";
import Linkedin from "@public/images/ic_linkedin.svg";


import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  
  return (
   
      <footer className="max-w-8xl flex items-center justify-between pt-10 pb-1 px-16 text-grey-500 ">
        <Link href="/" className="cursor-pointer">
          <Image
            src={GoogleForDevelopers}
            alt="Google For Developers"
            width={190}
            height={100}
          />
        </Link>
        <div>
        <div>
          <a href="https://io.google/2023/" target="_blank" rel="noreferrer noopener">I/O 2023</a>
          <a href="/2024/puzzle/" target="_blank" rel="noreferrer noopener">I/O Puzzle</a>
          <a href="https://policies.google.com/" target="_blank" rel="noreferrer noopener">Privacy &amp; terms</a>
          <a href="https://developers.google.com/community-guidelines" target="_blank" rel="noreferrer noopener">Community guidelines</a>
          <a href="/2024/about/#section-one">FAQ</a>
    
        </div>
         
          <div className="hidden md:block items-center justify-center">

          </div>
        </div>
        <div className="flex lg:justify-self-end lg:justify-end mt-12 lg:mt-0">
            <a href="https://www.youtube.com/@GDGSriLanka" className="p-3" target="_blank" rel="noreferrer noopener" aria-label="Google Developers on YouTube">
            <Image
                src={Youtube}
                alt="Google Developers on Youtube"
                width={24}
                height={24}
                 loading="lazy"
            />
        
            </a>
            <a href="https://www.instagram.com/gdgsrilanka/" className="p-3" target="_blank" rel="noreferrer noopener" aria-label="Google Developers on Instagram">
            <Image
                src={Instagram}
                alt="Google Developers on Instagram"
                width={24}
                height={24}
                loading="lazy"
            />
            </a>
    
            <a href="https://www.linkedin.com/company/gdglk/" className="p-3" target="_blank" rel="noreferrer noopener" aria-label="Google Developers on LinkedIn">
            <Image
                src={Linkedin}
                alt="Google Developers on Linkedin"
                width={24}
                height={24}
                loading="lazy"
            />
            </a>
    
            <a href="https://twitter.com/googledevs" className="p-3" target="_blank" rel="noreferrer noopener" aria-label="Google Developers on Twitter">
            <Image
                src={Twitter}
                alt="Google Developers on X"
                width={24}
                height={24}
                loading="lazy"
            />
            </a>
    
        </div>
      </footer>

   
  );
};

export default Footer;
