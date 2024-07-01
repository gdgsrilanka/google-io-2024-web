"use client";

import { Speaker } from "@/api/sessionize/sessionize.responses";
import { AgendaCard } from "@/components/agenda/agenda-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAgendaGrid } from "@/hooks/useAgendaGrid";
import { useGetSpeakers } from "@/hooks/useSpeakers";

export interface Session {
  id: string;
  title: string;
  description: string | null;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: any[];
  categories: any[];
  roomId: number;
  room: string;
  liveUrl: string | null;
  recordingUrl: string | null;
  status: string | null;
  isInformed: boolean;
  isConfirmed: boolean;
}

const AgendaContainer = () => {
  const { data: agendaData, isLoading } = useGetAgendaGrid();
  const { data: speakersData } = useGetSpeakers();

  const getSessionSpeakers = (session: Session) => {
    if (!session.speakers || session.speakers.length === 0) {
      return [];
    }

    return session.speakers.map((s) =>
      speakersData?.find((speaker) => s.id === speaker.id),
    );
  };

  return (
    <>
      {isLoading && <Skeleton className="h-12 w-12 rounded-full" />}

      <div className={"mt-15"}>
        {!isLoading &&
          agendaData?.[0]?.rooms[0]?.sessions?.map((session: Session) => (
            <AgendaCard
              key={session.id}
              session={session}
              speakers={getSessionSpeakers(session) as Speaker[]}
            />
          ))}
      </div>
    </>
  );
};

export default AgendaContainer;
