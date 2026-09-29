import "./Loader.css";

export default function MoviesLoader() {
  return (
    <div className="mn-loader">
      <div className="mn-loader__spinner"></div>

      <span className="mn-loader__text">
        Loading movies...
      </span>
    </div>
  );
}