import { useWatchlistContext } from "../../core/hooks/watchlist/WatchlistContext";
import MoviesCard from "../../shared/components/Card/Card";
import MoviesEmpty from "../../shared/components/Empty/Empty";
import MoviesList from "../../shared/components/List/List";

export function Watchlist() {
  const [movies] = useWatchlistContext();

  if (!movies.length) {
    return <MoviesEmpty />;
  }

  return (
    <MoviesList pagination={<></>} total_results={movies.length}>
      {
        movies.toReversed().map(movie => 
          <MoviesCard key={movie.id} movie={movie}/>
        )
      }
    </MoviesList>
  );
}