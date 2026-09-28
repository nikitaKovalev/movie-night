import type { ReactNode } from "react";
import "./List.css";

export default function MoviesList({children}: {children: ReactNode}) {
  return (
    <section className="mn-movies">
    <div className="mn-movies__header">
      <h2 className="mn-movies__title">Movies</h2>
      <span className="mn-movies__count">124 movies found</span>
    </div>

    <div className="mn-movies__grid">
      {children}
    </div>
  </section>
  );
}