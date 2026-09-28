import { type SetURLSearchParams } from "react-router";

export function searchQueryChange<T>(
  key: string,
  searchParams: URLSearchParams, 
  setParams: SetURLSearchParams,
  callback?: (searchParams: URLSearchParams) => void,
) {
  return (value: T) => {
    const queryParams = new URLSearchParams(searchParams);

    if (value) {
      queryParams.set(key, String(value));
    } else {
      queryParams.delete(key);
    }

    if (callback) {
      callback(queryParams);
    }

    setParams(queryParams);
  }
}