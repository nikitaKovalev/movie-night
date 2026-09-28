import axios from "axios";
import { TMDB_API_TOKEN } from "../constants/token";

export const AXIOS_INSTANCE = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    "Content-Type": "application/json",
    "Authorization": TMDB_API_TOKEN ? `Bearer ${TMDB_API_TOKEN}` : "",
  }
})