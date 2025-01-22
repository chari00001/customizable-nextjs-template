import api from "./api";

export const pageService = {
  // Site
  getSiteSettings: async () => {
    return await api.get("/api/site/settings");
  },

  updateSiteSettings: async (data) => {
    return await api.put("/api/site/settings", data);
  },

  updateSocialMedia: async (data) => {
    return await api.put("/api/site/social-media", data);
  },

  // Sabit sayfalar
  getPages: async (params) => {
    return await api.get("/api/pages", { params });
  },

  getPageById: async (id) => {
    return await api.get(`/api/pages/${id}`);
  },

  createPage: async (data) => {
    return await api.post("/api/pages", data);
  },

  updatePage: async (id, data) => {
    return await api.put(`/api/pages/${id}`, data);
  },

  deletePage: async (id) => {
    return await api.delete(`/api/pages/${id}`);
  },

  // Blog yazıları
  getPosts: async (params) => {
    return await api.get("/api/posts", { params });
  },

  getPostById: async (id) => {
    return await api.get(`/api/posts/${id}`);
  },

  createPost: async (data) => {
    return await api.post("/api/posts", data);
  },

  updatePost: async (id, data) => {
    return await api.put(`/api/posts/${id}`, data);
  },

  deletePost: async (id) => {
    return await api.delete(`/api/posts/${id}`);
  },

  // Blog kategorileri
  getCategories: async () => {
    return await api.get("/api/categories");
  },

  createCategory: async (data) => {
    return await api.post("/api/categories", data);
  },

  updateCategory: async (id, data) => {
    return await api.put(`/api/categories/${id}`, data);
  },

  deleteCategory: async (id) => {
    return await api.delete(`/api/categories/${id}`);
  },

  // Medya
  getImages: async (params) => {
    return await api.get("/api/images", { params });
  },

  uploadImage: async (formData) => {
    return await api.post("/api/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  updateImage: async (id, data) => {
    return await api.put(`/api/images/${id}`, data);
  },

  deleteImage: async (id) => {
    return await api.delete(`/api/images/${id}`);
  },

  // İletişim mesajları
  getContacts: async (params) => {
    return await api.get("/api/contacts", { params });
  },

  getContactById: async (id) => {
    return await api.get(`/api/contacts/${id}`);
  },

  updateContact: async (id, data) => {
    return await api.put(`/api/contacts/${id}`, data);
  },

  deleteContact: async (id) => {
    return await api.delete(`/api/contacts/${id}`);
  },

  // SEO
  getSeoSettings: async (type, id) => {
    return await api.get(`/api/seo/${type}/${id}`);
  },

  updateSeoSettings: async (type, id, data) => {
    return await api.put(`/api/seo/${type}/${id}`, data);
  },

  // Scriptler
  getScripts: async (params) => {
    return await api.get("/api/scripts", { params });
  },

  createScript: async (data) => {
    return await api.post("/api/scripts", data);
  },

  updateScript: async (id, data) => {
    return await api.put(`/api/scripts/${id}`, data);
  },

  deleteScript: async (id) => {
    return await api.delete(`/api/scripts/${id}`);
  },
};
