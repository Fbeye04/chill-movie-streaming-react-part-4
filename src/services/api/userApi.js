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
