import { useEffect, useMemo, useState } from "react";
import MoviesFilter from "./Filter/Filter";
import MoviesSearch from "./Seacrh/Search";
import { useDebounce } from "../../core/hooks/useDebounce";
import { DEBOUNCE_TIME } from "../../core/constants/debounce-time";
import useMoviesSearchUrlParams from "./hooks/useMoviesSearchUrlParams";
import useMoviesDiscoverUrlParams from "./hooks/useMoviesDiscoverUrlParams";
import useMovies from "./hooks/useMovies";
import Pagination from "../../core/components/Pagination/Pagination";
import MoviesCard from "../../shared/components/Card/Card";
import MoviesEmpty from "../../shared/components/Empty/Empty";
import MoviesError from "../../shared/components/Error/Error";
import MoviesList from "../../shared/components/List/List";
import MoviesLoader from "../../shared/components/Loader/Loader";

export default function Movies() {
  const {
    filters: searchFilters, 
    queryChange, 
    pageChange: searchPageChange,
  } = useMoviesSearchUrlParams();

  const {
    filters: discoverFilters, 
    pageChange: discoverPageChange,
    yearChange,
    ratingChange,
    sortChange,
    genreChange,
  } = useMoviesDiscoverUrlParams();

  const [search, setSearch] = useState(searchFilters.query);

  const debounceSearch = useDebounce({value: search, delay: DEBOUNCE_TIME});

  useEffect(() => setSearch(searchFilters.query), [searchFilters.query]);
  useEffect(() => queryChange(debounceSearch), [debounceSearch]);

  const {data, isLoading, isError} = useMovies(searchFilters, discoverFilters);
  
  const content = useMemo(() => {
    if (isLoading) {
      return <MoviesLoader/>;
    }

    if (isError) {
      return <MoviesError/>;
    }

    if (!data?.results.length) {
      return <MoviesEmpty/>;
    }

    return (
      <MoviesList 
        pagination={
          <Pagination 
            total_pages={data.total_pages} 
            page={data.page}
            onPageChange={searchFilters.query ? searchPageChange : discoverPageChange}
          />
        }
        total_results={data.total_results}
      >
        {data?.results.map(movie => 
          <MoviesCard key={movie.id} movie={movie}/>
        )}
      </MoviesList>
    );
  }, [data, isLoading, isError])

 
  return (
    <section className="mn-movies-container">
      <h4 style={{marginBottom: '1rem'}}>Find something to watch tonight.</h4>
      <MoviesFilter
        canSeeFilters={!Boolean(searchFilters.query)}
        year={discoverFilters.primary_release_year}
        rating={discoverFilters["vote_average.gte"]}
        sort={discoverFilters.sort_by}
        genre={discoverFilters.with_genres}
        onYearChange={yearChange}
        onRatingChange={ratingChange}
        onSortChange={sortChange}
        onGenreChange={genreChange}
      >
        <MoviesSearch 
          search={search} 
          onSearchChange={setSearch} 
        />
      </MoviesFilter>

      {content}
    </section>
  );
}