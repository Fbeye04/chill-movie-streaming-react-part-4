import { useEffect } from "react";
import useMovieStore from "../store/movieStore";

const useFetchMyList = () => {
  const { myListMovies, fetchMyList, isMyListLoading } = useMovieStore();

  useEffect(() => {
    if (myListMovies.length === 0) {
      fetchMyList();
    }
  }, [fetchMyList, myListMovies.length]);

  return { myListMovies, isMyListLoading };
};

export default useFetchMyList;
