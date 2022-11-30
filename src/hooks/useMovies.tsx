import { useEffect, useState } from "react";
import { IMovie } from "../interfaces/movies/movies.interface";
import { getAllMovies } from "../services/movieService";

export default function useMovies() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const fetchMovies = async () => {
    let response = await getAllMovies();

    if (response && response.data) setMovies(response.data.items);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies };
}
