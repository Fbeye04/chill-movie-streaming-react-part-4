import { useEffect, useState } from "react";
import useMovieStore from "../store/movieStore";

const useFetchMovies = () => {
  const { movies, fetchMovies } = useMovieStore();
  const [isFakeLoading, setIsFakeLoading] = useState(true);

  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }

    const timer = setTimeout(() => {
      setIsFakeLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [fetchMovies, movies.length]);

  return { movies, isLoading: isFakeLoading };
};

export default useFetchMovies;
