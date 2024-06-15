import IOExtended2024LogoBlack from "@public/IOExtended2024-logo-core-black.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="container max-w-8xl flex items-center justify-between py-4">
      <Image
        src={IOExtended2024LogoBlack}
        alt="Google I/O Extended Sri Lanka 2024"
        width={300}
        height={200}
      />

      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <a href="#hero">Home</a>
          </li>
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
    </header>
  );
};

export default Navbar;
