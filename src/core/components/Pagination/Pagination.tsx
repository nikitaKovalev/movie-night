import "./Pagination.css";

interface PaginationProps {
  total_pages: number;
  page: number;
  onPageChange: (page: number) => void;
}

export default function Pagination(
  {total_pages, page, onPageChange}: PaginationProps,
) {
  const onPrev = () => onPageChange(page - 1);
  const onNext = () => onPageChange(page + 1);

  return (
    <nav className="mn-pagination" aria-label="Movies pagination">
      <button 
        className="mn-pagination__button" 
        disabled={page === 1} 
        onClick={onPrev}
      >
        ←
        <span>Previous</span>
      </button>

      <div className="mn-pagination__current">
        <span className="mn-pagination__label">Page</span>
        <span className="mn-pagination__page">{page}</span>
      </div>

      <button
        className="mn-pagination__button"
        disabled={page === total_pages} 
        onClick={onNext}
      >
        <span>Next</span>
        →
      </button>
    </nav>
  );
}