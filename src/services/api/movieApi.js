import apiClient from "./config";

export const getMovies = async () => {
  try {
    const response = await apiClient.get("/movies");
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data film:", error);
    return [];
  }
};
