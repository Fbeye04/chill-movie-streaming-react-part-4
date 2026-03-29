import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getMovies } from "../services/api/movieApi";

const useMovieStore = create(
  persist(
    (set) => ({
      movies: [],
      isLoading: false,

      fetchMovies: async () => {
        set({ isLoading: true });

        try {
          const data = await getMovies();
          set({ movies: data, isLoading: false });
        } catch (error) {
          console.error("Gagal mengambil data:", error);
          set({ isLoading: false });
        }
      },

      toggleMyList: (movieId) => {
        set((state) => ({
          movies: state.movies.map((movie) =>
            movie.id == movieId
              ? { ...movie, isMyList: !movie.isMyList }
              : movie,
          ),
        }));
      },
    }),
    {
      name: "my-list-movie",
    },
  ),
);

export default useMovieStore;
