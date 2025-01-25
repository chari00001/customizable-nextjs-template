import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - Token ekleme ve loglama
api.interceptors.request.use((config) => {
  console.log("🚀 API İsteği:", {
    url: config.url,
    method: config.method,
    data: config.data,
    params: config.params,
  });

  return config;
});

// Response interceptor - Hata yönetimi ve loglama
api.interceptors.response.use(
  (response) => {
    console.log("✅ API Yanıtı:", {
      url: response.config.url,
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error("❌ API Hatası:", {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });

    if (error.response?.status === 401) {
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

export default api;
