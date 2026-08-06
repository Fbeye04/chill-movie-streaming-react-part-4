import { create } from "zustand";

const useAuthStore = create((set, get) => ({
  token: localStorage.getItem("authToken"),

  isLoggedIn: () => !!get().token,

  login: (token) => {
    localStorage.setItem("authToken", token);
    set({ token });
  },

  logout: () => {
    localStorage.removeItem("authToken");
    set({ token: null });
  },
}));

export default useAuthStore;
