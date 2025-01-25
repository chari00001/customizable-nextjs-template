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
    const response = await api.get("/pages", { params });
    return response.data;
  },

  getPageById: async (id) => {
    const response = await api.get(`/pages/${id}`);
    return response.data;
  },

  createPage: async (data) => {
    const response = await api.post("/pages", data);
    return response.data;
  },

  updatePage: async (id, data) => {
    const response = await api.put(`/pages/${id}`, {
      title: data.title,
      slug: data.slug,
      content: data.content,
      ...(data.seo && {
        seo: {
          title: data.seo.title,
          description: data.seo.description,
        },
      }),
    });
    return response.data;
  },

  deletePage: async (id) => {
    const response = await api.delete(`/pages/${id}`);
    return response.data;
  },

  // Blog yazıları
  getPosts: async (params) => {
    const response = await api.get("/posts", { params });
    return response.data;
  },

  getPostById: async (id) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },

  createPost: async (data) => {
    const response = await api.post("/posts", data);
    return response.data;
  },

  updatePost: async (id, data) => {
    const response = await api.put(`/posts/${id}`, data);
    return response.data;
  },

  deletePost: async (id) => {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
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
