"use client";

import { useState, useEffect } from "react";
import {
  FiStar,
  FiTrash2,
  FiArchive,
  FiSearch,
  FiMail,
  FiEye,
} from "react-icons/fi";
import { useContactStore } from "@/store";
import EmptyState from "@/components/ui/EmptyState";

export default function ContactPage() {
  const { messages, isLoading, fetchMessages } = useContactStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [filter, setFilter] = useState("all"); // all, unread, starred, archived

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase());

    switch (filter) {
      case "unread":
        return !message.isRead && matchesSearch;
      case "starred":
        return message.isStarred && matchesSearch;
      case "archived":
        return message.isArchived && matchesSearch;
      default:
        return !message.isArchived && matchesSearch;
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#4E73DF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <EmptyState
        title="Henüz İletişim Mesajı Yok"
        description="İletişim formundan gönderilen mesajlar burada listelenecektir."
        image="/assets/images/empty-contact.svg"
        actionLabel="İletişim Formunu Görüntüle"
        onAction={() => (window.location.href = "/contact")}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Başlık ve Filtreler */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          İletişim Mesajları
        </h1>
        <div className="flex items-center space-x-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#4E73DF] focus:border-[#4E73DF]"
          >
            <option value="all">Tüm Mesajlar</option>
            <option value="unread">Okunmamış</option>
            <option value="starred">Yıldızlı</option>
            <option value="archived">Arşivlenmiş</option>
          </select>
        </div>
      </div>

      {/* Arama */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Mesajlarda ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E73DF] focus:border-[#4E73DF]"
          />
        </div>
      </div>

      {/* Mesaj Listesi */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-[#4E73DF] focus:ring-[#4E73DF]"
                    checked={
                      selectedMessages.length === filteredMessages.length
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedMessages(filteredMessages.map((m) => m.id));
                      } else {
                        setSelectedMessages([]);
                      }
                    }}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gönderen
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Konu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tarih
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMessages.map((message) => (
                <tr
                  key={message.id}
                  className={`${
                    !message.isRead ? "bg-blue-50" : ""
                  } hover:bg-gray-50`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[#4E73DF] focus:ring-[#4E73DF]"
                      checked={selectedMessages.includes(message.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedMessages([
                            ...selectedMessages,
                            message.id,
                          ]);
                        } else {
                          setSelectedMessages(
                            selectedMessages.filter((id) => id !== message.id)
                          );
                        }
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {message.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {message.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 truncate max-w-md">
                      {message.subject}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(message.date).toLocaleDateString("tr-TR")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        className={`${
                          message.isStarred
                            ? "text-yellow-400"
                            : "text-gray-400"
                        } hover:text-yellow-500`}
                        title={
                          message.isStarred ? "Yıldızı Kaldır" : "Yıldızla"
                        }
                      >
                        <FiStar className="w-5 h-5" />
                      </button>
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        title="Görüntüle"
                      >
                        <FiEye className="w-5 h-5" />
                      </button>
                      <button
                        className="text-indigo-600 hover:text-indigo-900"
                        title="Arşivle"
                      >
                        <FiArchive className="w-5 h-5" />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900"
                        title="Sil"
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
