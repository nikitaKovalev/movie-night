export const SORT_BY = [
  'popularity.desc',
  'vote_average.desc',
  'primary_release_date.desc',
];

export const SORT_OPTIONS = [
  {label: 'Popularity', value: SORT_BY[0]},
  {label: 'Rating', value: SORT_BY[1]},
  {label: 'Newest', value: SORT_BY[2]},
];

export const RATINGS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
export const RATING_OPTIONS = RATINGS.map(rate => ({label: String(rate), value: rate})).sort((a, b) => b.value - a.value);

export const YEARS = generateYearRange(1800, new Date().getFullYear());
export const YEARS_OPTIONS = YEARS.map(year => ({label: String(year), value: year}));

function generateYearRange(from: number, to: number) {
  const start = Number(from);
  const end = Number(to);

  if (isNaN(start) || !end || start > end) {
    return [];
  }

  const result = Array.from({ length: end - start + 1 }, (_, index) => start + index);

  return result.sort((a, b) => b - a);
}