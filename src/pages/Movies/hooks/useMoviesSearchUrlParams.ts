import { searchQueryChange } from "../../../core/helpers/search-query";
import { useSearchParams } from "react-router";

export default function useMoviesSearchUrlParams() {
  const [searchParams, setSerachParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const page = searchParams.get('page') ?? 1;

  const queryChange = searchQueryChange<string>(
    'query', 
    searchParams, 
    setSerachParams,
    (queryParams) => queryParams.set('page', '1'),
  );

  const pageChange = searchQueryChange<number>('page', searchParams, setSerachParams);

  return {
    filters: {query, page: Number(page)},
    queryChange,
    pageChange,
  }
}