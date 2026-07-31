import apiClient from "./config";

export const registerUser = async ({ fullname, username, email, password }) => {
  try {
    const response = await apiClient.post("/users/register", {
      fullname,
      username,
      email,
      password,
    });

    return response.data.data;
  } catch (error) {
    console.error("Gagal mendaftarkan data user:", error);
    throw error;
  }
};

export const loginUser = async ({ username, password }) => {
  try {
    const response = await apiClient.post("/users/login", {
      username,
      password,
    });
    return response.data.data;
  } catch (error) {
    console.error("Gagal melakukan login:", error);
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const response = await apiClient.get("/users/profile/me");
    return response.data.user;
  } catch (error) {
    console.error("Gagal mengambil data user:", error);
    throw error;
  }
};

export const updateProfile = async ({ username, email, newPassword }) => {
  try {
    const payload = { username, email };

    if (newPassword) {
      payload.password = newPassword;
    }

    const response = await apiClient.patch("/users/profile/me", payload);
    return response.data;
  } catch (error) {
    console.error("Gagal mengupdate data profil user:", error);
    throw error;
  }
};
