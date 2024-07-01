import { SessionizeAPI } from "@/api";
import { useQuery } from "@tanstack/react-query";

export function useGetAgendaGrid() {
  return useQuery({
    queryKey: ["agenda"],
    queryFn: SessionizeAPI.getScheduleGrid,
  });
}
