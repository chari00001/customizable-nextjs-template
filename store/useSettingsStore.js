import { create } from "zustand";
import { settingsService } from "@/services";

const useSettingsStore = create((set, get) => ({
  settings: {
    general: {
      siteName: "",
      siteDescription: "",
      siteEmail: "",
      sitePhone: "",
      siteAddress: "",
      logo: null,
      favicon: null,
      socialMedia: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
      },
    },
    header: {
      menuItems: [],
      style: {
        position: "fixed",
        background: "#ffffff",
        textColor: "#000000",
        height: "80px",
        showShadow: true,
        isTransparent: false,
      },
    },
    footer: {
      columns: [],
      style: {
        background: "#000000",
        textColor: "#ffffff",
        linkColor: "#ffffff",
        padding: "60px",
      },
      bottomBar: {
        showCopyright: true,
        copyrightText: "",
        showPaymentIcons: true,
      },
    },
  },
  isLoading: false,
  error: null,

  // Genel ayarları güncelle
  updateGeneralSettings: async (generalSettings) => {
    set({ isLoading: true });
    try {
      const response = await settingsService.updateGeneralSettings(
        generalSettings
      );
      set((state) => ({
        settings: {
          ...state.settings,
          general: { ...state.settings.general, ...response },
        },
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Header ayarlarını güncelle
  updateHeaderSettings: async (headerSettings) => {
    set({ isLoading: true });
    try {
      const response = await settingsService.updateHeaderSettings(
        headerSettings
      );
      set((state) => ({
        settings: {
          ...state.settings,
          header: { ...state.settings.header, ...response },
        },
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Footer ayarlarını güncelle
  updateFooterSettings: async (footerSettings) => {
    set({ isLoading: true });
    try {
      const response = await settingsService.updateFooterSettings(
        footerSettings
      );
      set((state) => ({
        settings: {
          ...state.settings,
          footer: { ...state.settings.footer, ...response },
        },
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Logo yükle
  uploadLogo: async (file) => {
    set({ isLoading: true });
    try {
      const response = await settingsService.uploadLogo(file);
      set((state) => ({
        settings: {
          ...state.settings,
          general: { ...state.settings.general, logo: response.logo },
        },
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Favicon yükle
  uploadFavicon: async (file) => {
    set({ isLoading: true });
    try {
      const response = await settingsService.uploadFavicon(file);
      set((state) => ({
        settings: {
          ...state.settings,
          general: { ...state.settings.general, favicon: response.favicon },
        },
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Tüm ayarları yükle
  fetchSettings: async () => {
    set({ isLoading: true });
    try {
      const settings = await settingsService.getAllSettings();
      set({ settings, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Ayarları kaydet
  saveSettings: async () => {
    set({ isLoading: true });
    try {
      // API çağrısı burada yapılacak
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
}));

export default useSettingsStore;
