import api from "./api";

export const mediaService = {
  // Tüm medya dosyalarını getir
  getMediaItems: async (params) => {
    return await api.get("/media", { params });
  },

  // Dosya yükle
  uploadFiles: async (files, onProgress) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    return await api.post("/media/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgress?.(percentCompleted);
      },
    });
  },

  // Dosya sil
  deleteFiles: async (fileIds) => {
    return await api.delete("/media", { data: { fileIds } });
  },

  // Dosya bilgilerini güncelle
  updateFileInfo: async (fileId, fileData) => {
    return await api.put(`/media/${fileId}`, fileData);
  },

  // Dosya detaylarını getir
  getFileDetails: async (fileId) => {
    return await api.get(`/media/${fileId}`);
  },

  // Dosyaları kategorize et
  categorizeFiles: async (fileIds, categoryId) => {
    return await api.post("/media/categorize", { fileIds, categoryId });
  },
};
