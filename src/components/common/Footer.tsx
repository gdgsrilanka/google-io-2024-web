import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t border-t-border ">
      <div className="px-8 py-10 flex flex-col md:flex-row md gap-5">
        <Image
          src="/Logo-GoogleForDevelopers.svg"
          alt="google for developers"
          width={180}
          height={20}
        />

        <ul className="flex flex-col md:flex-row gap-5 text-[#9AA0A6]">
          <Link href="#">
            <li>I/O 2023</li>
          </Link>
          <Link href="#">
            <li>I/O Puzzle</li>
          </Link>
          <Link href="#">
            <li>Privacy & terms</li>
          </Link>
          <Link href="#">
            <li>Community guidelines</li>
          </Link>
          <Link href="#">
            <li>FAQ</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
