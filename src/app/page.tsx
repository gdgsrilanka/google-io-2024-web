import Agenda from "./components/agenda";
import FAQ from "./components/faq";
import Hero from "./components/hero";
import Speakers from "./components/speakers";
import WhyIO from "./components/why-io";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyIO />
      <Speakers />
      <Agenda />
      <FAQ />
    </main>
  );
}
