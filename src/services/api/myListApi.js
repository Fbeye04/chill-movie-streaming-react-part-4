import apiClient from "./config";

export const getMyList = async () => {
  try {
    const response = await apiClient.get("/mylist/me");
    return response.data.data;
  } catch (error) {
    console.error("Gagal mengambil data daftar saya:", error);
    throw error;
  }
};

export const addToMyList = async ({ idSeriesFilm }) => {
  try {
    const response = await apiClient.post("/mylist/", { idSeriesFilm });
    return response.data.message;
  } catch (error) {
    console.error("Gagal menambahkan film/series ke daftar saya:", error);
    throw error;
  }
};

export const deleteFromMyList = async ({ idSeriesFilm }) => {
  try {
    const response = await apiClient.delete(`/mylist/${idSeriesFilm}`);
    return response.data.message;
  } catch (error) {
    console.error("Gagal menghapus film/series dari daftar saya:", error);
    throw error;
  }
};
