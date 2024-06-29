import { SessionizeAPI } from "@/api";
import { useQuery } from "@tanstack/react-query";

export function useGetSpeakers() {
  return useQuery({
    queryKey: ["speakers"],
    queryFn: SessionizeAPI.getSpeaker,
  });
}
