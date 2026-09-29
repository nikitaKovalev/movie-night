import { useMemo } from "react";
import { TMDB_IMAGE_POSTER_BASE_URL } from "../../../core/constants/base-url";
import "./Cards.css";
import { useWatchlistContext } from "../../../core/hooks/watchlist/WatchlistContext";
import type { MovieShort } from "../../models/movies";

export default function MoviesCard({movie}: {movie: MovieShort}) {
  const [movies, toggleMovies] = useWatchlistContext();

  const inWatchlist = useMemo(() => 
    !!movies.find(({id}) => id === movie.id),
  [movies, movie]);
  
  const inWatchlistClass = useMemo(() => 
    inWatchlist ? `mn-movie-card__watchlist--active` : '', 
  [inWatchlist]);

  return (
    <article className="mn-movie-card">
    <div className="mn-movie-card__poster">
      <img
        className="mn-movie-card__image"
        src={TMDB_IMAGE_POSTER_BASE_URL + movie.poster_path}
        alt={movie.title}
      />

    <button
        className={`mn-movie-card__watchlist ${inWatchlistClass}`}
        type="button"
        aria-label="Add to watchlist"
        onClick={() => toggleMovies(movie)}
      >
        ♡
    </button>

      <div className="mn-movie-card__rating">
        <span>★</span>
        <span>{movie.vote_average.toFixed(1)}</span>
      </div>
    </div>

    <div className="mn-movie-card__content">
      <h3 className="mn-movie-card__title">
        {movie.title}
      </h3>

      <div className="mn-movie-card__meta">
        <span>{movie.release_date}</span>
        <span className="mn-movie-card__dot"></span>
        <span>Action</span>
      </div>
    </div>
  </article>
  );
}