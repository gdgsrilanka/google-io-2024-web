"use client";

import { Speaker } from "@/api/sessionize/sessionize.responses";
import { Session } from "@/components/agenda/agenda-container";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { format } from "date-fns";

const colors = [
  "#4285F4",
  "#34A853",
  "#FBBC04",
  "#EA4335",
  "#9F6CD4",
  "#F46831",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

interface Props {
  session: Session;
  speakers?: Speaker[];
}

export function AgendaCard({ session, speakers }: Props) {
  const bgColor = getRandomColor();

  return (
    <div
      key={session?.id}
      className={`text-white text-2xl border-2 border-black p-2 m-2 rounded-3xl`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-2">
          <p className={"ml-4"}>
            {format(new Date(session.startsAt), "HH:mm")}
          </p>
          <p className={"ml-4"}>{format(new Date(session.endsAt), "HH:mm")}</p>
        </div>
        <div className="col-span-5 flex items-center">
          <p className={"ml-4"}>{session.title}</p>
        </div>
        <div className="col-span-3 flex items-center">
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
