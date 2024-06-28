'use client';

import herodark from '@public/hero-dark.svg'
import herodarkMobile from '@public/hero-dark-mobile.svg'
import { useMedia } from 'use-media';

const FAQ = () => {
  const isMobileScreen = useMedia({ maxWidth: '767px' });


  return (
    <section className="max-w-5xl flex items-center justify-between md:flex-col">
      <div className=" ml-10 text-left justify-center w-2/6 md:text-center md:w-full md:m-0 md:px-5 md:py-5">
        <h1 className="text-6xl leading-tight md2:text-3xl">Frequently asked questions</h1>
        <div className="flex flex-col faq-pills">
        <button
            className="text-white font-semibold py-3 px-5 rounded-sm  border border-white text-xl bg-none hover:bg-white hover:text-black md2:text-sm mb-6 mt-6"
          >
            General
            </button>
            <button
            className="text-white font-semibold py-3 px-5 rounded-sm  border border-white text-xl bg-none hover:bg-white hover:text-black md2:text-sm mb-6 mt-6"
          >
            Registration
          </button>
          <button
            className="text-white font-semibold py-3 px-5 rounded-sm  border border-white text-xl bg-none hover:bg-white hover:text-black md2:text-sm mb-6 mt-6"
          >
            Google Developer Profile
          </button>
          <button
            className="text-white font-semibold py-3 px-5 rounded-sm  border border-white text-xl bg-none hover:bg-white hover:text-black md2:text-sm mb-6 mt-6"
          >
            Community
          </button>
          <button
            className="text-white font-semibold py-3 px-5 rounded-sm  border border-white text-xl bg-none hover:bg-white hover:text-black md2:text-sm mb-6 mt-6"
          >
            Terms and conditions
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
