import "./Error.css";

export default function MoviesError() {
  return (
    <div className="mn-error">
      <div className="mn-error__icon">!</div>

      <h3 className="mn-error__title">
        Something went wrong
      </h3>

      <p className="mn-error__message">
        We couldn't load the movies. Please try again later.
      </p>

      <button className="mn-error__retry">
        Try again
      </button>
    </div>
  );
}