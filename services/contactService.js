import api from "./api";

export const contactService = {
  // Tüm mesajları getir
  getMessages: async (params) => {
    return await api.get("/contact", { params });
  },

  // Mesaj detayını getir
  getMessageById: async (id) => {
    return await api.get(`/contact/${id}`);
  },

  // Mesajları sil
  deleteMessages: async (messageIds) => {
    return await api.delete("/contact", { data: { messageIds } });
  },

  // Mesajları arşivle
  archiveMessages: async (messageIds) => {
    return await api.post("/contact/archive", { messageIds });
  },

  // Mesajları yıldızla
  toggleStarMessages: async (messageIds) => {
    return await api.post("/contact/star", { messageIds });
  },

  // Mesajları okundu olarak işaretle
  markMessagesAsRead: async (messageIds) => {
    return await api.post("/contact/mark-read", { messageIds });
  },

  // Mesajları okunmadı olarak işaretle
  markMessagesAsUnread: async (messageIds) => {
    return await api.post("/contact/mark-unread", { messageIds });
  },

  // Mesaj yanıtla
  replyToMessage: async (messageId, reply) => {
    return await api.post(`/contact/${messageId}/reply`, { reply });
  },
};
