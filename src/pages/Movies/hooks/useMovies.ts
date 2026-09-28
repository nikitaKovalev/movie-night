import { useQuery } from "@tanstack/react-query";
import type { SearchMovieQueryParams } from "../models/movies";
import { searchMovie } from "../api/search-movie";

export default function useMovies(
  {query, page}: SearchMovieQueryParams
) {
  return useQuery({
    queryKey: ['movies', query, page],
    queryFn: () => searchMovie({query, page}),
    staleTime: 1000 * 60 * 5,
  })
}