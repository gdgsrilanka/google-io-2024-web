"use client";

import { Speaker } from "@/api/sessionize/sessionize.responses";
import { Session } from "@/components/agenda/agenda-container";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { getRandomGoogleColor } from "@/utils/google-colors";
import { format } from "date-fns";

interface Props {
  session: Session;
  speakers?: Speaker[];
}

export function AgendaCard({ session, speakers }: Props) {
  const bgColor = getRandomGoogleColor();

  return (
    <div
      key={session?.id}
      className={`text-white text-2xl border-2 border-black p-2 m-2 rounded-3xl`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-2 flex items-center">
          <p className={"ml-5 justify-center"}>
            {`${format(new Date(session.startsAt), "HH:mm")} - ${format(new Date(session.endsAt), "HH:mm")}`}
          </p>
        </div>
        <div className="col-span-5 flex items-center">
          <p className={"ml-4"}>{session.title}</p>
        </div>
        <div className="col-span-3 flex items-center justify-center">
          {speakers && speakers.length > 0 && (
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={speakers ?? []} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
