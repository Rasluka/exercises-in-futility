import useMovies from "../../hooks/useMovies";
import MovieCard from "./MovieCard";
import { IMovie } from "../../interfaces/movies/movies.interface";

export default function Movies() {
  const { movies } = useMovies();

  const mapMovie = (aMovie: IMovie) => {
    return <MovieCard key={aMovie.id} movie={aMovie} />;
  };

  return (
    <>
      <h1 className="text-center text-blue-600 text-lg">Movies Page</h1>

      <div className="md:grid md:grid-cols-4 md:gap-4 mx-auto w-3/4 ">
        {movies.map(mapMovie)}
      </div>
    </>
  );
}
