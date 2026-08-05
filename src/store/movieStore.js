import { create } from "zustand";
import { getMovies, mapMovieFromBackend } from "../services/api/movieApi";
import {
  addToMyList,
  deleteFromMyList,
  getMyList,
} from "../services/api/myListApi";

const useMovieStore = create((set, get) => ({
  movies: [],
  myListMovies: [],
  isMoviesLoading: false, // ini sebenarnya gak dipakai di useFetchMovies jadi perlu dipertimbangkan apakah nanti isFakeLoading dihapus atau yang ini yang dihapus
  isMyListLoading: false,

  fetchMovies: async () => {
    set({ isMoviesLoading: true });

    try {
      const data = await getMovies();
      set({ movies: data, isMoviesLoading: false });
    } catch (error) {
      console.error("Gagal mengambil data:", error);
      set({ isMoviesLoading: false });
    }
  },

  fetchMyList: async () => {
    set({ isMyListLoading: true });

    try {
      const myList = await getMyList();
      const formattedList = myList.map(mapMovieFromBackend);
      set({ myListMovies: formattedList, isMyListLoading: false });
    } catch (error) {
      console.error("Gagal mengambil data daftar saya:", error);
      set({ isMyListLoading: false });
    }
  },

  resetStore: () => {
    set({ movies: [], myListMovies: [] });
  },

  toggleMyList: async (movieId) => {
    try {
      const isMovieOnList = get().myListMovies.some(
        (movie) => movie.id === movieId,
      );

      if (isMovieOnList) {
        await deleteFromMyList({ idSeriesFilm: movieId });
      } else {
        await addToMyList({ idSeriesFilm: movieId });
      }

      await get().fetchMyList();
    } catch (error) {
      console.error("Gagal mengubah status my list:", error);
      throw error;
    }
  },
}));

export default useMovieStore;
