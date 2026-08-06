import axios from "axios";
import useAuthStore from "../../store/authStore";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("authToken");

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // PROTEKSI UTAMA: Cek jika error 401 (Unauthorized)
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      console.warn("Token tidak valid/kedaluwarsa. Sesi diakhiri.");
      useAuthStore.getState().logout();
      window.location.href = "/";

      return Promise.reject(error);
    }

    console.error("[axios interceptor] Error terdeteksi:", error.message);
    return Promise.reject(error);
  },
);

export default apiClient;
