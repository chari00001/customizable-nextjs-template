import api from "./api";

export const authService = {
  // Giriş yap
  login: async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    if (response.token) {
      localStorage.setItem("token", response.token);
    }
    return response;
  },

  // Çıkış yap
  logout: async () => {
    await api.post("/auth/logout");
    localStorage.removeItem("token");
  },

  // Kullanıcı bilgilerini getir
  getProfile: async () => {
    return await api.get("/auth/profile");
  },

  // Şifre değiştir
  changePassword: async (currentPassword, newPassword) => {
    return await api.post("/auth/change-password", {
      currentPassword,
      newPassword,
    });
  },
};
