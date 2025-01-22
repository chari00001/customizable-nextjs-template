import { create } from "zustand";
import { contactService } from "@/services";

const useContactStore = create((set, get) => ({
  messages: [],
  selectedMessages: [],
  filter: "all", // all, unread, starred, archived
  isLoading: false,
  error: null,

  // Mesajları yükle
  fetchMessages: async (params) => {
    set({ isLoading: true });
    try {
      const messages = await contactService.getMessages(params);
      set({ messages, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Mesaj detayını getir
  getMessageDetails: async (messageId) => {
    set({ isLoading: true });
    try {
      const message = await contactService.getMessageById(messageId);
      set((state) => ({
        messages: state.messages.map((m) => (m.id === messageId ? message : m)),
        isLoading: false,
      }));
      return message;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Mesajları sil
  deleteMessages: async (messageIds) => {
    set({ isLoading: true });
    try {
      await contactService.deleteMessages(messageIds);
      set((state) => ({
        messages: state.messages.filter(
          (message) => !messageIds.includes(message.id)
        ),
        selectedMessages: state.selectedMessages.filter(
          (message) => !messageIds.includes(message.id)
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Mesajları arşivle
  archiveMessages: async (messageIds) => {
    set({ isLoading: true });
    try {
      await contactService.archiveMessages(messageIds);
      set((state) => ({
        messages: state.messages.map((message) =>
          messageIds.includes(message.id)
            ? { ...message, isArchived: true }
            : message
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Mesajları yıldızla
  toggleStarMessages: async (messageIds) => {
    set({ isLoading: true });
    try {
      await contactService.toggleStarMessages(messageIds);
      set((state) => ({
        messages: state.messages.map((message) =>
          messageIds.includes(message.id)
            ? { ...message, isStarred: !message.isStarred }
            : message
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Mesajları okundu olarak işaretle
  markAsRead: async (messageIds) => {
    set({ isLoading: true });
    try {
      await contactService.markMessagesAsRead(messageIds);
      set((state) => ({
        messages: state.messages.map((message) =>
          messageIds.includes(message.id)
            ? { ...message, isRead: true }
            : message
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Mesajları okunmadı olarak işaretle
  markAsUnread: async (messageIds) => {
    set({ isLoading: true });
    try {
      await contactService.markMessagesAsUnread(messageIds);
      set((state) => ({
        messages: state.messages.map((message) =>
          messageIds.includes(message.id)
            ? { ...message, isRead: false }
            : message
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Mesaj yanıtla
  replyToMessage: async (messageId, reply) => {
    set({ isLoading: true });
    try {
      const response = await contactService.replyToMessage(messageId, reply);
      set((state) => ({
        messages: state.messages.map((message) =>
          message.id === messageId
            ? { ...message, replies: [...(message.replies || []), response] }
            : message
        ),
        isLoading: false,
      }));
      return response;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      throw error;
    }
  },

  // Seçili mesajları güncelle
  setSelectedMessages: (messages) => set({ selectedMessages: messages }),

  // Filtreyi güncelle
  setFilter: (filter) => set({ filter }),

  // Hata mesajını temizle
  clearError: () => set({ error: null }),
}));

export default useContactStore;
