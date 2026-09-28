import "./Filter.css";
import { useMemo, type ReactNode } from "react";
import MoviesFilterSelect from "./FilterSelect/FilterSelect";
import { RATING_OPTIONS, SORT_OPTIONS, YEARS_OPTIONS } from "./filters";
import useGenres from "../hooks/useGenres";

interface MoviesFilterProps {
  children: ReactNode;
  canSeeFilters: boolean;
  year: number;
  rating: number;
  sort: string;
  genre: string;
  onYearChange: (year: number) => void;
  onRatingChange: (rating: number) => void;
  onSortChange: (sort: string) => void;
  onGenreChange: (sort: string) => void;
}

export default function MoviesFilter(
  {
    children, 
    canSeeFilters,
    onRatingChange, 
    onSortChange, 
    onYearChange, 
    onGenreChange,
    year,
    rating,
    genre,
    sort,
  }: MoviesFilterProps,
) {
  const {data} = useGenres();
  const genreOptions = useMemo(() => 
    data?.genres?.map(value => ({label: value.name, value: value.id})) ?? [], 
  [data]);

  if (!canSeeFilters) {
    return (
      <section className="mn-filter-container">
        <div className="mn-filter__search">
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="mn-filter-container">
      <div className="mn-filter__search">
        {children}
      </div>

      <div className="mn-filter__item">
        <MoviesFilterSelect 
          name="genre"
          options={genreOptions}
          value={genre}
          onValueChange={onGenreChange}
        />
      </div>

      <div className="mn-filter__item">
        <MoviesFilterSelect 
          name="year" 
          options={YEARS_OPTIONS}
          value={year}
          onValueChange={onYearChange}
        />
      </div>

      <div className="mn-filter__item">
        <MoviesFilterSelect 
          name="rating" 
          options={RATING_OPTIONS}
          value={rating}
          onValueChange={onRatingChange}
        />
      </div>

      <div className="mn-filter__item">
        <MoviesFilterSelect 
          name="sort" 
          options={SORT_OPTIONS}
          value={sort}
          onValueChange={onSortChange}
        />
      </div>
    </section>
  );
}