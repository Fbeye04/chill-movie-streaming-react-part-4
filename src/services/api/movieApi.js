import apiClient from "./config";

const BASE_PORTRAIT_URL = "/posters/portrait/";
const BASE_LANDSCAPE_URL = "/posters/landscape/";

export const mapMovieFromBackend = (rawMovie) => {
  const currentYear = new Date().getFullYear();
  const NEW_RELEASE_THRESHOLD = 3;

  return {
    id: rawMovie.id_seriesfilm,
    title: rawMovie.judul,
    synopsis: rawMovie.sinopsis,
    releaseYear: rawMovie.tahun_rilis,
    ageRating: rawMovie.rating_umur,
    type: rawMovie.tipe_tayangan,
    image: rawMovie.poster_portrait
      ? BASE_PORTRAIT_URL + rawMovie.poster_portrait
      : "...",
    backdrop: rawMovie.poster_landscape
      ? BASE_LANDSCAPE_URL + rawMovie.poster_landscape
      : "...",
    rating: null,
    genre: "Tidak diketahui",
    duration: null,
    cast: [],
    filmmaker: "Tidak diketahui",
    label: null,
    labelVariant: null,
    isTrending: false,
    isNewRelease: currentYear - rawMovie.tahun_rilis <= NEW_RELEASE_THRESHOLD,
    isMyList: false,
  };
};

export const getMovies = async () => {
  try {
    const response = await apiClient.get("/movies");
    const rawMovies = response.data.data;

    const theMovies = rawMovies.map(mapMovieFromBackend);

    return theMovies;
  } catch (error) {
    console.error("Gagal mengambil data film:", error);
    return [];
  }
};
