import { useEffect, useState } from "react";
import MoviesFilter from "./Filter/Filter";
import MoviesSearch from "./Seacrh/Search";
import { useDebounce } from "../../core/hooks/useDebounce";
import { DEBOUNCE_TIME } from "../../core/constants/debounce-time";
import useMoviesSearchUrlParams from "./hooks/useMoviesSearchUrlParams";
import useMovies from "./hooks/useMovies";

export default function Movies() {
  const {filters, queryChange, pageChange} = useMoviesSearchUrlParams();
  const [search, setSearch] = useState(filters.query);
  const debounceSearch = useDebounce({value: search, delay: DEBOUNCE_TIME});

  useEffect(() => setSearch(filters.query), [filters.query]);
  useEffect(() => queryChange(debounceSearch), [debounceSearch]);

  const {data} = useMovies(filters);
 
  return (
    <section className="mn-movies-container">
      <h4>Find something to watch tonight.</h4>
      <MoviesFilter>
        <MoviesSearch 
          search={search} 
          onSearchChange={setSearch} 
        />
      </MoviesFilter>
    </section>
  );
}