import { useQuery } from "@tanstack/react-query";
import type { DiscoverMovieQueryParams } from "../models/movies";
import { discoverMovie } from "../api/discover-movie";
import type { SearchMovieQueryParams } from "../models/movies";
import { searchMovie } from "../api/search-movie";
import { STALE_TIME } from "../../../core/constants/debounce-time";
import { useEffect, useRef } from "react";

export default function useMovies(
  searchParams: SearchMovieQueryParams,
  discoverParams: DiscoverMovieQueryParams,
) {
  const isSearchActive = Boolean(searchParams.query);
  const wasSearchActive = useRef(isSearchActive);

  const searchQuery = useQuery({
    queryKey: ['searchMovies', searchParams],
    queryFn: () => searchMovie(searchParams),
    staleTime: STALE_TIME,
    enabled: isSearchActive,
  });

  const discoverQuery = useQuery({
    queryKey: ['discoverMovies', discoverParams],
    queryFn: () => discoverMovie(discoverParams),
    staleTime: STALE_TIME,
    enabled: !isSearchActive,
  });

  useEffect(() => {
    const searchWasJustCleared =
      wasSearchActive.current && !isSearchActive;

    wasSearchActive.current = isSearchActive;

    if (searchWasJustCleared) {
      void discoverQuery.refetch();
    }
  }, [isSearchActive, discoverQuery.refetch]);

  return isSearchActive ? searchQuery : discoverQuery;
}
