"use client";

import { useState, useEffect } from "react";
import { FiEdit2, FiTrash2, FiPlus, FiEye, FiSearch } from "react-icons/fi";
import Link from "next/link";
import { usePageStore } from "@/store";
import EmptyState from "@/components/ui/EmptyState";

export default function StaticPagesPage() {
  const { pages, isLoading, fetchPages } = usePageStore();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

  const filteredPages = Array.isArray(pages)
    ? pages.filter((page) =>
        page.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

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

  if (!Array.isArray(pages) || pages.length === 0) {
    return (
      <EmptyState
        title="Henüz Sayfa Eklenmemiş"
        description="Sitenize eklemek istediğiniz sabit sayfaları buradan oluşturabilirsiniz."
        image="/assets/images/empty-pages.svg"
        actionLabel="Yeni Sayfa Ekle"
        onAction={() =>
          (window.location.href = "/admin/dashboard/pages/static/new")
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Başlık ve Yeni Ekle Butonu */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Sabit Sayfalar</h1>
        <Link
          href="/admin/dashboard/pages/static/new"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#4E73DF] hover:bg-[#2E59D9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4E73DF]"
        >
          <FiPlus className="w-5 h-5 mr-2" />
          Yeni Sayfa Ekle
        </Link>
      </div>

      {/* Arama */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Sayfa ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E73DF] focus:border-[#4E73DF]"
          />
        </div>
      </div>

      {/* Sayfalar Tablosu */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sayfa Adı
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  URL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Son Güncelleme
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPages.map((page) => (
                <tr key={page.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {page.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{page.slug}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        page.status === "published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {page.status === "published" ? "Yayında" : "Taslak"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(page.updatedAt).toLocaleDateString("tr-TR")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        title="Görüntüle"
                      >
                        <FiEye className="w-5 h-5" />
                      </button>
                      <button
                        className="text-indigo-600 hover:text-indigo-900"
                        title="Düzenle"
                      >
                        <FiEdit2 className="w-5 h-5" />
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
