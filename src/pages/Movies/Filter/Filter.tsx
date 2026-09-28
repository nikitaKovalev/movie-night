import { type ReactNode } from "react";
import "./Filter.css";

export default function MoviesFilter({children}: {children: ReactNode}) {
  return (
    <section className="mn-filter-container">
      <div className="mn-filter__search">
        {children}
      </div>

      <div className="mn-filter__item">
        <select name="genre" id="genre" className="mn-filter__select">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <div className="mn-filter__item">
        <select name="year" id="year" className="mn-filter__select">
          <option value="1">1</option>
        </select>
      </div>

      <div className="mn-filter__item">
        <select name="rating" id="rating" className="mn-filter__select">
          <option value="1">1</option>
        </select>
      </div>

      <div className="mn-filter__item">
        <select name="sort" id="sort" className="mn-filter__select">
          <option value="1">1</option>
        </select>
      </div>
    </section>
  );
}