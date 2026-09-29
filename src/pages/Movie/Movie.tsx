import { useParams } from "react-router";
import useMovie from "./hooks/useMovie";
import "./Movie.css";
import { TMDB_IMAGE_BACKDROP_BASE_URL, TMDB_IMAGE_POSTER_BASE_URL } from "../../core/constants/base-url";
import { useWatchlistContext } from "../../core/hooks/watchlist/WatchlistContext";
import { useMemo } from "react";

export function Movie() {
  const {movieid} = useParams<{movieid: string}>();
  const {data} = useMovie(Number(movieid));
  const [movies, toggleMovie] = useWatchlistContext();
  const inWatchlist = useMemo(() => 
    movies.find(({id}) => id === Number(movieid)), 
  [movies, movieid]);
  const inWatchlistClass = useMemo(() => inWatchlist ? "mn-details__watchlist--active" : "", [inWatchlist]);

  return (
    <main className="mn-details">
      <section className="mn-details__hero">
        <img
          className="mn-details__backdrop"
          src={TMDB_IMAGE_BACKDROP_BASE_URL + data?.backdrop_path}
          alt={data?.title}
        />

        <div className="mn-details__overlay"></div>

        <div className="mn-details__hero-content">

          <div className="mn-details__poster-wrapper">
            <img
              className="mn-details__poster"
              src={TMDB_IMAGE_POSTER_BASE_URL + data?.poster_path}
              alt={data?.title}
            />
          </div>

          <div className="mn-details__info">

            <div className="mn-details__heading">
              <h1 className="mn-details__title">
                {data?.title}
              </h1>

              <span className="mn-details__year">
                2008
              </span>
            </div>

            <div className="mn-details__meta">
              <span>July 18, 2008</span>
              <span className="mn-details__dot"></span>
              <span>2h 32m</span>
              <span className="mn-details__dot"></span>
              <span>PG-13</span>
            </div>

            <div className="mn-details__genres">
              <span className="mn-details__genre">Action</span>
              <span className="mn-details__genre">Crime</span>
              <span className="mn-details__genre">Drama</span>
            </div>

            <div className="mn-details__actions">

              <div className="mn-details__rating">
                <span className="mn-details__rating-star">★</span>
                <strong>{data?.vote_average.toFixed(1)}</strong>
                <span>/ 10</span>
              </div>

              <button
                type="button"
                className={`mn-details__watchlist ${inWatchlistClass}`}
                onClick={() => toggleMovie(data as any)}
              >
                ♡
                <span>{inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}</span>
              </button>

            </div>

          </div>
        </div>
      </section>


      <section className="mn-details__body">

        <div className="mn-details__overview">
          <h2 className="mn-details__section-title">
            Overview
          </h2>

          <p className="mn-details__description">
            {data?.overview}
          </p>
        </div>


        <div className="mn-details__facts">

          <div className="mn-details__fact">
            <span className="mn-details__fact-label">
              Release date
            </span>

            <span className="mn-details__fact-value">
              {data?.release_date}
            </span>
          </div>

          <div className="mn-details__fact">
            <span className="mn-details__fact-label">
              Language
            </span>

            <span className="mn-details__fact-value">
              {data?.original_language}
            </span>
          </div>

          <div className="mn-details__fact">
            <span className="mn-details__fact-label">
              Status
            </span>

            <span className="mn-details__fact-value">
              {data?.status}
            </span>
          </div>

          <div className="mn-details__fact">
            <span className="mn-details__fact-label">
              Budget
            </span>

            <span className="mn-details__fact-value">
              ${data?.budget}
            </span>
          </div>

        </div>

      </section>

    </main>
  );
}