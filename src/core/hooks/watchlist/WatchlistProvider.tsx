import { type ReactNode } from "react";
import {WatchlistContext, WatchlistDispatchContext} from "./WatchlistContext";
import useLocalStorage from "../useLocalStorage";
import { MOVIES_STORAGE_KEY } from "../../constants/local-storage";
import type { MovieShort } from "../../../shared/models/movies";

export function WatchlistProvider({children}: {children: ReactNode}) {
  const [storedMovies, setStoredMovies] = useLocalStorage<MovieShort[]>({
    key: MOVIES_STORAGE_KEY, 
    initialValue: []
  });

  const toggleMovies = (movie: MovieShort) => {
    if (storedMovies.find(({id}) => id === movie.id)) {
      setStoredMovies(storedMovies.filter(({id}) => id !== movie.id));
    } else {
      setStoredMovies([...storedMovies, movie]);
    }
  };

  return (
    <WatchlistContext value={storedMovies}>
      <WatchlistDispatchContext value={toggleMovies}>
        {children}
      </WatchlistDispatchContext>
    </WatchlistContext>
  );
}