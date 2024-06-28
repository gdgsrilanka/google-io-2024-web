import Agenda from "@/components/home/agenda";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Speakers from "@/components/home/speakers";
import WhyIO from "@/components/home/why-io";
import SeeYou from "@/components/home/SeeYou";
import Keynote from "@/components/home/Keynote";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="video">
        <Keynote />
      </section>
      <section id="why-io">
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
      </section>
      <section>
        <SeeYou />
      </section>
    </main>
  );
}
