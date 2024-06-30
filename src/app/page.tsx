import Agenda from "@/components/home/agenda";
import FAQ from "@/components/home/faq";
import GoogleGemini from "@/components/home/gemini";
import Hero from "@/components/home/hero";
import Keynote from "@/components/home/Keynote";
import SeeYou from "@/components/home/SeeYou";
import Speakers from "@/components/home/speakers";
import Stats from "@/components/home/stats";
import WhatToExpect from "@/components/home/whatexpect";
import WorldGlobe from "@/components/home/worldglobal";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="whattoexpect">
        <WhatToExpect />
      </section>
      <section id="globe">
        <WorldGlobe />
      </section>
      <section id="video">
        <Keynote />
      </section>
      <section>
        <GoogleGemini />
      </section>
      {/*<section id="why-io">*/}
      {/*  <WhyIO />*/}
      {/*</section>*/}
      <section id="speakers">
        <Speakers />
      </section>
      <section id="agenda">
        <Agenda />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section>
        <SeeYou />
      </section>
    </main>
  );
}
