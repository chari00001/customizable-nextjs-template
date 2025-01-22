import { create } from "zustand";
import { mediaService } from "@/services";

const useMediaStore = create((set, get) => ({
  mediaItems: [],
  selectedItems: [],
  isLoading: false,
  uploadProgress: 0,
  error: null,

  // Medya dosyalarını yükle
  fetchMediaItems: async (params) => {
    set({ isLoading: true });
    try {
      const mediaItems = await mediaService.getMediaItems(params);
      set({ mediaItems, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Dosya yükle
  uploadFiles: async (files) => {
    set({ isLoading: true, uploadProgress: 0 });
    try {
      const response = await mediaService.uploadFiles(files, (progress) => {
        set({ uploadProgress: progress });
      });
      set((state) => ({
        mediaItems: [...state.mediaItems, ...response],
        isLoading: false,
        uploadProgress: 100,
      }));
      return response;
    } catch (error) {
      set({ isLoading: false, error: error.message, uploadProgress: 0 });
      throw error;
    }
  },

  // Dosya sil
  deleteFiles: async (fileIds) => {
    set({ isLoading: true });
    try {
      await mediaService.deleteFiles(fileIds);
      set((state) => ({
        mediaItems: state.mediaItems.filter(
          (item) => !fileIds.includes(item.id)
        ),
        selectedItems: state.selectedItems.filter(
          (item) => !fileIds.includes(item.id)
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Dosya bilgilerini güncelle
  updateFileInfo: async (fileId, fileData) => {
    set({ isLoading: true });
    try {
      const updatedFile = await mediaService.updateFileInfo(fileId, fileData);
      set((state) => ({
        mediaItems: state.mediaItems.map((item) =>
          item.id === fileId ? updatedFile : item
        ),
        isLoading: false,
      }));
      return updatedFile;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Dosyaları kategorize et
  categorizeFiles: async (fileIds, categoryId) => {
    set({ isLoading: true });
    try {
      await mediaService.categorizeFiles(fileIds, categoryId);
      const updatedFiles = await mediaService.getMediaItems({ ids: fileIds });
      set((state) => ({
        mediaItems: state.mediaItems.map(
          (item) => updatedFiles.find((f) => f.id === item.id) || item
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Seçili dosyaları güncelle
  setSelectedItems: (items) => set({ selectedItems: items }),

  // Yükleme ilerlemesini güncelle
  setUploadProgress: (progress) => set({ uploadProgress: progress }),

  // Hata mesajını temizle
  clearError: () => set({ error: null }),
}));

export default useMediaStore;
