'use client';

import herodark from '@public/hero-dark.svg'
import herodarkMobile from '@public/hero-dark-mobile.svg'
import { useMedia } from 'use-media';
import Link from 'next/link';

const FAQ = () => {
  const isMobileScreen = useMedia({ maxWidth: '767px' });


  return (
    <section className="absolute max-w-full flex items-center justify-between md:flex-col">
      <div className="relative ml-10 text-left justify-center w-full max-w-md md:text-center md:w-full md:m-0 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
        <h1 className="text-6xl leading-tight md2:text-3xl">Frequently asked questions</h1>
        <div className="flex flex-col faq-pills">
        <button
            className="text-white font-semibold py-3 px-5 rounded-md  border border-white text-xl bg-none hover:bg-white hover:text-black md2:text-sm mb-3 mt-4 w-32"
            onClick={() => {
              const sectionOne = document.getElementById('section-one');
              if (sectionOne) {
                sectionOne.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            General
            </button>
            <button
            className="text-white font-semibold py-3 px-5 rounded-md   border border-white text-xl bg-none hover:bg-white hover:text-black md2:text-sm mb-3 mt-1 w-40"
            onClick={()=>{
              const sectionTwo = document.getElementById('section-two');
              if(sectionTwo){
                sectionTwo.scrollIntoView({behavior:'smooth'});
              
              }
            }}
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
      <div className=" flex-1 flex flex-col w-full max-w-screen-lg mx-auto faq-sections p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
        <section id="section-one" className="pb-10 w-auto">
         <div className="border-2 rounded-2xl border-grey-900 dark:border-grey-200 overflow-hidden">
          <div
                  className="section-header flex justify-between items-center border-b-2 p-[30px] md:py-[23px] md:pl-12 border-grey-900 dark:border-grey-200"
                  style={{
                    background:
                      'linear-gradient(90deg, #4285F4 -36.98%, #4285F4 22.31%, #34A853 78.95%, #34A853 132.93%)',
                  }}
                >
                    <h2 className="gap-20 font-normal text-grey-900 text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pl-1">
                      General
                    </h2>
                </div>
                <dl id="container-one" className="px-[30px]  pt-5 md:px-12 ">
                  <div className="pt-[14px] pr-12 border-b-2 mb-[18px] pb-[14px] border-grey-900 dark:border-grey-200 text-grey-900 dark:text-white">
                    <dt>
                      <div className="flex justify-between items-start w-full text-left">
                        <span className="font-medium sm:s-h5 md:l-h5 text-2xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
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
                <dl id="container-two" className="px-[30px]  pt-5 md:px-12 ">
                  <div className="pt-[14px] pr-12 border-b-2 mb-[18px] pb-[14px] border-grey-900 dark:border-grey-200 text-grey-900 dark:text-white">
                    <dt>
                      <div className="flex justify-between items-start w-full text-left">
                        <span className="font-medium sm:s-h5 md:l-h5 text-2xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
                          How will Google I/O 2024 work for attendees outside of the US?
                        </span>
                      </div>
                    </dt>
                    <dd className="mt-4 mb-[18px] md:mt-5">
                    <div className="faq-entry">
                      <div className="mb-2">
                        <p>
                          One of the exciting things about a digital experience is the opportunity to reach a global audience. Content will be provided on demand and in different languages to serve everyone. 
                          Some translated content such as captioned videos may be available shortly after the event. Check out what your local <u><Link href='https://gdg.community.dev/' target='blank'>developer community</Link></u> is offering as well.
                        </p>
                      </div>
                    </div>
                  </dd>
                  </div>
                </dl>
                <dl id="container-three" className="px-[30px]  pt-5 md:px-12 ">
                  <div className="pt-[14px] pr-12  mb-[18px] pb-[14px] border-grey-900 dark:border-grey-200 text-grey-900 dark:text-white">
                    <dt>
                      <div className="flex justify-between items-start w-full text-left">
                        <span className="font-medium sm:s-h5 md:l-h5 text-2xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
                          How can I stay informed on the latest from Google I/O?
                        </span>
                      </div>
                    </dt>
                    <dd className="mt-4 mb-[18px] md:mt-5">
                    <div className="faq-entry">
                      <div className="mb-2">
                        <p>
                        Register to receive important information via email about the digital event. To stay up-to-date on the latest information on sessions, speakers, and other activities, 
                        check the Google I/O 2024 website, 
                        visit the Google Developers blog, and follow us on X, LinkedIn, and Instagram. 
                        Join the social conversation about Google I/O 2024 via the official #GoogleIO hashtag.</p>
                      </div>
                    </div>
                  </dd>
                  </div>
                </dl>
         </div>
        </section>

        <section id="section-two" className="pb-10 w-auto">
         <div className="border-2 rounded-2xl border-grey-900 dark:border-grey-200 overflow-hidden">
          <div
                  className="section-header flex justify-between items-center border-b-2 p-[30px] md:py-[23px] md:pl-12 border-grey-900 dark:border-grey-200"
                  style={{
                    background:
                      'linear-gradient(90deg, #4285F4 -36.98%, #4285F4 22.31%, #34A853 78.95%, #34A853 132.93%)',
                  }}
                >
                    <h2 className="gap-20 font-normal text-grey-900 text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pl-1">
                      Registration
                    </h2>
                </div>
                <dl id="container-one" className="px-[30px]  pt-5 md:px-12 ">
                  <div className="pt-[14px] pr-12 border-b-2 mb-[18px] pb-[14px] border-grey-900 dark:border-grey-200 text-grey-900 dark:text-white">
                    <dt>
                      <div className="flex justify-between items-start w-full text-left">
                        <span className="font-medium sm:s-h5 md:l-h5 text-2xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
                          What does registration include?
                        </span>
                      </div>
                    </dt>
                    <dd className="mt-4 mb-[18px] md:mt-5">
                    <div className="faq-entry">
                      <div className="mb-2">
                        <p>
                          Registration for Google I/O 2024 enables you to stay up to date about the schedule and content along with relevant developer news via email. 
                          As a registrant, you can also create a developer profile to get the most out of the digital experience by saving and viewing content that's relevant to you.
                        </p>
                      </div>
                    </div>
                  </dd>
                  </div>
                </dl>
                <dl id="container-two" className="px-[30px]  pt-5 md:px-12 ">
                  <div className="pt-[14px] pr-12 border-b-2 mb-[18px] pb-[14px] border-grey-900 dark:border-grey-200 text-grey-900 dark:text-white">
                    <dt>
                      <div className="flex justify-between items-start w-full text-left">
                        <span className="font-medium sm:s-h5 md:l-h5 text-2xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
                          What happens if I choose not to register?
                        </span>
                      </div>
                    </dt>
                    <dd className="mt-4 mb-[18px] md:mt-5">
                    <div className="faq-entry">
                      <div className="mb-2">
                        <p>
                          If you're unregistered you can still view the keynotes and sessions, but you won't receive communications related to the event. 
                          In addition, you won't be able to save content to view later or get recommendations via your developer profile.
                        </p>
                      </div>
                    </div>
                  </dd>
                  </div>
                </dl>
                <dl id="container-three" className="px-[30px]  pt-5 md:px-12 ">
                  <div className="pt-[14px] pr-12  mb-[18px] pb-[14px] border-grey-900 dark:border-grey-200 text-grey-900 dark:text-white">
                    <dt>
                      <div className="flex justify-between items-start w-full text-left">
                        <span className="font-medium sm:s-h5 md:l-h5 text-2xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
                          I'm under 18 years old. Can I register for Google I/O?
                        </span>
                      </div>
                    </dt>
                    <dd className="mt-4 mb-[18px] md:mt-5">
                    <div className="faq-entry">
                      <div className="mb-2">
                        <p>
                        Attendees must be at least 18 years of age to participate in Google I/O.</p>
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
