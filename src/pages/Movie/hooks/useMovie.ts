import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../api/get-movie";
import { STALE_TIME } from "../../../core/constants/debounce-time";

export default function useMovie(movieid: number) {
  return useQuery({
    queryKey: ['movieDetails', movieid],
    queryFn: () => getMovie(movieid),
    staleTime: STALE_TIME,
    enabled: !!movieid,
  });
}