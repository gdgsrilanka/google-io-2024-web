'use client';

import herodark from '@public/hero-dark.svg'
import herodarkMobile from '@public/hero-dark-mobile.svg'
import { useMedia } from 'use-media';

const FAQ = () => {
  const isMobileScreen = useMedia({ maxWidth: '767px' });


  return (
    <section className="max-w-full flex items-center justify-between md:flex-col">
      <div className="w-1/4 ml-10 text-left justify-center w-2/6 md:text-center md:w-full md:m-0 md:px-5 md:py-5">
        <h1 className="text-6xl leading-tight md2:text-3xl">Frequently asked questions</h1>
        <div className="flex flex-col faq-pills">
        <button
            className="text-white font-semibold py-3 px-5 rounded-md  border border-white text-xl bg-none hover:bg-white hover:text-black md2:text-sm mb-3 mt-4 w-32"
          >
            General
            </button>
            <button
            className="text-white font-semibold py-3 px-5 rounded-md   border border-white text-xl bg-none hover:bg-white hover:text-black md2:text-sm mb-3 mt-1 w-40"
          >
            Registration
          </button>
          <button
            className="text-white font-semibold py-3 px-5 rounded-md  border border-white text-xl bg-none hover:bg-white hover:text-black md2:text-sm mb-3 mt-1 w-72"
          >
            Google Developer Profile
          </button>
          <button
            className="text-white font-semibold py-3 px-5 rounded-md  border border-white text-xl bg-none hover:bg-white hover:text-black md2:text-sm mb-3 mt-1 w-40"
          >
            Community
          </button>
          <button
            className="text-white font-semibold py-3 px-5 rounded-md  border border-white text-xl bg-none hover:bg-white hover:text-black md2:text-sm mb-3 mt-1 w-64"
          >
            Terms and conditions
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col w-full max-w-full mx-auto faq-sections">
        <section id="section-one" className="pb-10 w-auto">
         <div className="border-2 rounded-2xl border-grey-900 dark:border-grey-200 overflow-hidden">
          <div
                  className="section-header flex justify-between items-center border-b-2 p-[30px] md:py-[23px] md:pl-12 border-grey-900 dark:border-grey-200"
                  style={{
                    background:
                      'linear-gradient(90deg, #4285F4 -36.98%, #4285F4 22.31%, #34A853 78.95%, #34A853 132.93%)',
                  }}
                >
                    <h2 className="font-semibold text-grey-900 sm:s-h4 md:l-h4 ">
                      General
                    </h2>
                </div>
                <dl id="container-one" className="px-[30px] pb-[50px] pt-5 md:px-12 md:pb-10 md:pt-[42px]">
                  <div className="pt-[14px] pr-12 border-b-2 mb-[18px] pb-[14px] border-grey-900 dark:border-grey-200 text-grey-900 dark:text-white">
                    <dt>
                      <div className="flex justify-between items-start w-full text-left">
                        <span className="font-medium sm:s-h5 md:l-h5">
                          When is Google I/O 2024?
                        </span>
                      </div>
                    </dt>
                    <dd className="mt-4 mb-[18px] md:mt-5">
                    <div className="faq-entry">
                      <div className="mb-2">
                        <p>
                          This year's event will be broadcast in front of a small live audience and is open to everyone online on May 14, 2024. Tune in to the livestreamed keynotes, then dive into technical content and learning material on demand.
                        </p>
                      </div>
                    </div>
                  </dd>
                  </div>
                </dl>
         </div>
        </section>
      </div>
    </section>
  );
};

export default FAQ;
