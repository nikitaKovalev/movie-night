import { createContext, useContext } from "react";
import type { MovieShort } from "../../../pages/Movies/models/movies";

export const WatchlistContext = createContext<MovieShort[]>([]);
export const WatchlistDispatchContext = createContext<(movie: MovieShort) => void>(() => {});

export function useWatchlistContext(): [MovieShort[], (movie: MovieShort) => void] {
  return [useContext(WatchlistContext), useContext(WatchlistDispatchContext)];
}