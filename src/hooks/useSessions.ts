import { SessionizeAPI } from "@/api";
import { useQuery } from "@tanstack/react-query";

export function useGetSessions() {
  return useQuery({
    queryKey: ["sessions"],
    queryFn: SessionizeAPI.getSessionList,
  });
}
