import AgendaContainer from "@/components/agenda/agenda-container";

export default function Page() {
  return (
    <section className="container max-w-8xl flex flex-col items-center justify-center my-10">
      <h1 className="text-6xl font-bold mb-10">Agenda</h1>

      <AgendaContainer />
    </section>
  );
}
