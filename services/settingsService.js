import api from "./api";

export const settingsService = {
  // Tüm ayarları getir
  getAllSettings: async () => {
    return await api.get("/settings");
  },

  // Genel ayarları güncelle
  updateGeneralSettings: async (settings) => {
    return await api.put("/settings/general", settings);
  },

  // Header ayarlarını güncelle
  updateHeaderSettings: async (settings) => {
    return await api.put("/settings/header", settings);
  },

  // Footer ayarlarını güncelle
  updateFooterSettings: async (settings) => {
    return await api.put("/settings/footer", settings);
  },

  // Logo yükle
  uploadLogo: async (file) => {
    const formData = new FormData();
    formData.append("logo", file);
    return await api.post("/settings/upload-logo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  // Favicon yükle
  uploadFavicon: async (file) => {
    const formData = new FormData();
    formData.append("favicon", file);
    return await api.post("/settings/upload-favicon", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
