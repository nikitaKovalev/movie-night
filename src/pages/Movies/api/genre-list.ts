import { AXIOS_INSTANCE } from "../../../core/api/axios-instance";
import type { GenreReponse } from "../../../shared/models/genre";

export async function genreList(): Promise<GenreReponse> {
  const response = await AXIOS_INSTANCE.get<GenreReponse>('genre/movie/list');
  return response.data;
}