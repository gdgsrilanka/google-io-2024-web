import { FlipWords } from "@/components/ui/flip-words";

const WhyIO = () => {
  const words = [
    "networking",
    "learning",
    "meeting developer experts",
    "interacting with Googlers",
    "exploring new technologies",
    "making new friends",
    "gaining insights",
    "enhancing skills",
  ];

  return (
    <section className="container max-w-8xl h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">
        Why you should attend Google IO Extended?
      </h1>

      <div className="mt-20 text-5xl mx-auto font-normal text-center text-white dark:text-neutral-400">
        Experience
        <FlipWords words={words} /> <br />
        at Google IO Extended Sri Lanka 2024
      </div>
    </section>
  );
};

export default WhyIO;
