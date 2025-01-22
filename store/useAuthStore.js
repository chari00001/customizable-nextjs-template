import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authService } from "@/services";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      loginError: null,
      isLoading: false,

      setUser: (user) => set({ user, isLoggedIn: !!user }),
      setLoginError: (error) => set({ loginError: error }),
      setLoading: (loading) => set({ isLoading: loading }),

      login: async (email, password, remember) => {
        set({ isLoading: true, loginError: null });
        try {
          const response = await authService.login(email, password);
          if (remember) {
            localStorage.setItem("rememberedUser", email);
          }
          localStorage.setItem("isLoggedIn", "true");
          set({
            user: response.user,
            isLoading: false,
            isLoggedIn: true,
            loginError: null,
          });
          return response;
        } catch (error) {
          set({
            isLoading: false,
            loginError: error.message,
            isLoggedIn: false,
          });
          throw error;
        }
      },

      logout: async () => {
        try {
          await authService.logout();
        } finally {
          set({
            user: null,
            isLoggedIn: false,
            loginError: null,
          });
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("rememberedUser");
        }
      },

      getProfile: async () => {
        set({ isLoading: true });
        try {
          const user = await authService.getProfile();
          set({ user, isLoading: false });
          return user;
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      changePassword: async (currentPassword, newPassword) => {
        set({ isLoading: true });
        try {
          await authService.changePassword(currentPassword, newPassword);
          set({ isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
