import "./Search.css";

export default function MoviesSearch(
  {search, onSearchChange}: {search: string, onSearchChange: (text: string) => void},
) {
  return (
    <div className="mn-filter__search">
      <input 
        type="text"
        placeholder="Search movies..." 
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}