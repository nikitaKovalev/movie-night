import { useSearchParams } from "react-router";
import { searchQueryChange } from "../../../core/helpers/search-query";

export default function useMoviesDiscoverUrlParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;
  const year = searchParams.get('primary_release_year') ?? new Date().getFullYear();
  const rating = searchParams.get('vote_average.gte') ?? 5;
  const sort = searchParams.get('sort_by') ?? '';
  const genre = searchParams.get('with_genres') ?? '';

  const pageChange = searchQueryChange<number>('page', searchParams, setSearchParams);
  const yearChange = searchQueryChange<number>('primary_release_year', searchParams, setSearchParams, (params) => params.set('page', '1'));
  const ratingChange = searchQueryChange<number>('vote_average.gte', searchParams, setSearchParams, (params) => params.set('page', '1'));
  const sortChange = searchQueryChange<string>('sort_by', searchParams, setSearchParams, (params) => params.set('page', '1'));
  const genreChange = searchQueryChange<string>('with_genres', searchParams, setSearchParams, (params) => params.set('page', '1'));

  return {
    filters: {
      page: Number(page),
      'primary_release_year': Number(year), 
      'vote_average.gte': Number(rating), 
      sort_by: sort,
      with_genres: genre, 
    },
    pageChange,
    yearChange,
    ratingChange,
    sortChange,
    genreChange,
  }
}