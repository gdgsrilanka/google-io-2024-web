import Agenda from "@/components/agenda";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import Speakers from "@/components/speakers";
import WhyIO from "@/components/why-io";
import SeeYou from "@/components/SeeYou";
import Keynote from "@/components/Keynote";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="video">
        <Keynote />
      </section>
      {/* <section id="why-io">
        <WhyIO />
      </section>
      <section id="speakers">
        <Speakers />
      </section>
      <section id="agenda">
        <Agenda />
      </section>
      <section id="faq">
        <FAQ />
      </section> */}
      <section>
        <SeeYou />
      </section>
    </main>
  );
}
