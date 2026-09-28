import { useEffect, useState } from "react";
import MoviesFilter from "./Filter/Filter";
import MoviesSearch from "./Seacrh/Search";
import { useDebounce } from "../../core/hooks/useDebounce";
import { DEBOUNCE_TIME } from "../../core/constants/debounce-time";
import useMoviesSearchUrlParams from "./hooks/useMoviesSearchUrlParams";
import MoviesList from "./List/List";
import useMoviesDiscoverUrlParams from "./hooks/useMoviesDiscoverUrlParams";
import useMovies from "./hooks/useMovies";
import MoviesCard from "./Card/Card";
import MoviesLoader from "./Loader/Loader";
import MoviesError from "./Error/Error";
import MoviesEmpty from "./Empty/Empty";
import Pagination from "../../core/components/Pagination/Pagination";

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
  } = useMoviesDiscoverUrlParams();

  const [search, setSearch] = useState(searchFilters.query);

  const debounceSearch = useDebounce({value: search, delay: DEBOUNCE_TIME});

  useEffect(() => setSearch(searchFilters.query), [searchFilters.query]);
  useEffect(() => queryChange(debounceSearch), [debounceSearch]);

  const {data, isLoading, isError} = useMovies(searchFilters, discoverFilters);
  
  const content = (loading: boolean, error: boolean) => {
    if (loading) {
      return <MoviesLoader/>;
    }

    if (error) {
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
  }

 
  return (
    <section className="mn-movies-container">
      <h4>Find something to watch tonight.</h4>
      <MoviesFilter>
        <MoviesSearch 
          search={search} 
          onSearchChange={setSearch} 
        />
      </MoviesFilter>

      {content(isLoading, isError)}
    </section>
  );
}