import { useQuery } from "@tanstack/react-query";
import { genreList } from "../api/genre-list";
import { STALE_TIME } from "../../../core/constants/debounce-time";

export default function useGenres() {
  return useQuery({
    queryKey: ['genre'],
    queryFn: () => genreList(),
    staleTime: STALE_TIME,
  });
}