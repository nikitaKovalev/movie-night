import "./Empty.css";

export default function MoviesEmpty() {
  return (
    <div className="mn-empty">
      <div className="mn-empty__icon">
        ◯
      </div>

      <h3 className="mn-empty__title">
        No movies found
      </h3>

      <p className="mn-empty__message">
        Try changing your search or filters.
      </p>
    </div>
  );
}