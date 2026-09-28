import type { ReactNode } from "react";
import "./List.css";

export default function MoviesList(
  {children, pagination, total_results}: {children: ReactNode, pagination: ReactNode, total_results: number}
) {
  return (
    <section className="mn-movies">
    <div className="mn-movies__header">
      <h2 className="mn-movies__title">Movies</h2>
      <span className="mn-movies__count">{total_results} movies found</span>
    </div>

    <div className="mn-movies__grid">
      {children}
    </div>

    <div className="mn-movies__pagination">
      {pagination}
    </div>
  </section>
  );
}