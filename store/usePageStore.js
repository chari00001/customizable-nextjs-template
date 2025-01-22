import { create } from "zustand";
import { pageService } from "@/services";

const usePageStore = create((set, get) => ({
  pages: [],
  posts: [],
  categories: [],
  selectedPage: null,
  selectedPost: null,
  isLoading: false,
  error: null,

  // Sabit sayfaları yükle
  fetchPages: async (params) => {
    set({ isLoading: true });
    try {
      const pages = await pageService.getPages(params);
      set({ pages, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Blog yazılarını yükle
  fetchPosts: async (params) => {
    set({ isLoading: true });
    try {
      const posts = await pageService.getPosts(params);
      set({ posts, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Blog kategorilerini yükle
  fetchCategories: async () => {
    set({ isLoading: true });
    try {
      const categories = await pageService.getCategories();
      set({ categories, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Sayfa oluştur
  createPage: async (data) => {
    set({ isLoading: true });
    try {
      const newPage = await pageService.createPage(data);
      set((state) => ({
        pages: [...state.pages, newPage],
        isLoading: false,
      }));
      return newPage;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Blog yazısı oluştur
  createPost: async (data) => {
    set({ isLoading: true });
    try {
      const newPost = await pageService.createPost(data);
      set((state) => ({
        posts: [...state.posts, newPost],
        isLoading: false,
      }));
      return newPost;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Kategori oluştur
  createCategory: async (data) => {
    set({ isLoading: true });
    try {
      const newCategory = await pageService.createCategory(data);
      set((state) => ({
        categories: [...state.categories, newCategory],
        isLoading: false,
      }));
      return newCategory;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Sayfa güncelle
  updatePage: async (id, data) => {
    set({ isLoading: true });
    try {
      const updatedPage = await pageService.updatePage(id, data);
      set((state) => ({
        pages: state.pages.map((page) => (page.id === id ? updatedPage : page)),
        isLoading: false,
      }));
      return updatedPage;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Blog yazısı güncelle
  updatePost: async (id, data) => {
    set({ isLoading: true });
    try {
      const updatedPost = await pageService.updatePost(id, data);
      set((state) => ({
        posts: state.posts.map((post) => (post.id === id ? updatedPost : post)),
        isLoading: false,
      }));
      return updatedPost;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Kategori güncelle
  updateCategory: async (id, data) => {
    set({ isLoading: true });
    try {
      const updatedCategory = await pageService.updateCategory(id, data);
      set((state) => ({
        categories: state.categories.map((category) =>
          category.id === id ? updatedCategory : category
        ),
        isLoading: false,
      }));
      return updatedCategory;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Sayfa sil
  deletePage: async (id) => {
    set({ isLoading: true });
    try {
      await pageService.deletePage(id);
      set((state) => ({
        pages: state.pages.filter((page) => page.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Blog yazısı sil
  deletePost: async (id) => {
    set({ isLoading: true });
    try {
      await pageService.deletePost(id);
      set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Kategori sil
  deleteCategory: async (id) => {
    set({ isLoading: true });
    try {
      await pageService.deleteCategory(id);
      set((state) => ({
        categories: state.categories.filter((category) => category.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Seçili sayfayı güncelle
  setSelectedPage: (page) => set({ selectedPage: page }),

  // Seçili blog yazısını güncelle
  setSelectedPost: (post) => set({ selectedPost: post }),

  // Hata mesajını temizle
  clearError: () => set({ error: null }),
}));

export default usePageStore;
