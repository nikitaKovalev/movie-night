import { type ReactNode } from "react";
import "./Filter.css";
import MoviesFilterSelect from "./FilterSelect/FilterSelect";
import { RATING_OPTIONS, SORT_OPTIONS, YEARS_OPTIONS } from "./filters";

interface MoviesFilterProps {
  children: ReactNode;
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
  return (
    <section className="mn-filter-container">
      <div className="mn-filter__search">
        {children}
      </div>

      <div className="mn-filter__item">
        <MoviesFilterSelect 
          name="genre"
          options={[]}
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