"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useGetAgendaGrid } from "@/hooks/useAgendaGrid";

const Agenda = () => {
  const { data: agendaData, isLoading } = useGetAgendaGrid();

  return (
    <section className="container max-w-8xl h-[90vh] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-10">Agenda</h1>

      {isLoading && <Skeleton className="h-12 w-12 rounded-full" />}

      <div className={"mt-15"}>
        {!isLoading &&
          agendaData?.[0]?.rooms[0]?.sessions?.map((session: any) => (
            <div
              key={session?.id}
              className={
                "text-white text-2xl border-2 border-blue-500 bg-blue-700 p-2 m-2 rounded-3xl"
              }
            >
              <p className={"ml-4"}>{session.title}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Agenda;
