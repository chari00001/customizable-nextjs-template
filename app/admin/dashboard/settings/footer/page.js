"use client";

import { useState } from "react";
import { FiSave, FiPlus, FiTrash2 } from "react-icons/fi";

export default function FooterSettingsPage() {
  const [settings, setSettings] = useState({
    footerStyle: {
      background: "#1a1a1a",
      textColor: "#ffffff",
      linkColor: "#4E73DF",
      padding: "60px",
      showSocialIcons: true,
      showNewsletter: true,
    },
    columns: [
      {
        id: 1,
        title: "Hakkımızda",
        content:
          "Fixnix, modern web çözümleri sunan yenilikçi bir teknoloji şirketidir.",
      },
      {
        id: 2,
        title: "Hızlı Linkler",
        links: [
          { id: 1, label: "Ana Sayfa", url: "/" },
          { id: 2, label: "Hizmetler", url: "/hizmetler" },
          { id: 3, label: "Blog", url: "/blog" },
          { id: 4, label: "İletişim", url: "/iletisim" },
        ],
      },
      {
        id: 3,
        title: "İletişim",
        content: `İstanbul, Türkiye\ninfo@fixnix.com\n+90 555 123 4567`,
      },
    ],
    bottomBar: {
      showCopyright: true,
      copyrightText: "© 2024 Fixnix. Tüm hakları saklıdır.",
      showPaymentIcons: true,
    },
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [newLink, setNewLink] = useState({ label: "", url: "" });
  const [selectedColumn, setSelectedColumn] = useState(null);

  const handleStyleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      footerStyle: {
        ...prev.footerStyle,
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const handleColumnChange = (id, field, value) => {
    setSettings((prev) => ({
      ...prev,
      columns: prev.columns.map((column) =>
        column.id === id ? { ...column, [field]: value } : column
      ),
    }));
  };

  const handleLinkChange = (columnId, linkId, field, value) => {
    setSettings((prev) => ({
      ...prev,
      columns: prev.columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              links: column.links?.map((link) =>
                link.id === linkId ? { ...link, [field]: value } : link
              ),
            }
          : column
      ),
    }));
  };

  const addLink = () => {
    if (selectedColumn && newLink.label && newLink.url) {
      setSettings((prev) => ({
        ...prev,
        columns: prev.columns.map((column) =>
          column.id === selectedColumn
            ? {
                ...column,
                links: [
                  ...(column.links || []),
                  {
                    id: Math.max(...column.links.map((link) => link.id)) + 1,
                    ...newLink,
                  },
                ],
              }
            : column
        ),
      }));
      setNewLink({ label: "", url: "" });
    }
  };

  const removeLink = (columnId, linkId) => {
    setSettings((prev) => ({
      ...prev,
      columns: prev.columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              links: column.links.filter((link) => link.id !== linkId),
            }
          : column
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // API'ye gönderme simülasyonu
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setSuccess(true);

    // 3 saniye sonra başarı mesajını kaldır
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Footer Ayarları
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Footer Stil Ayarları */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Footer Stil Ayarları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Arkaplan Rengi
              </label>
              <div className="mt-1 flex items-center space-x-2">
                <input
                  type="color"
                  name="background"
                  value={settings.footerStyle.background}
                  onChange={handleStyleChange}
                  className="h-8 w-8 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  value={settings.footerStyle.background}
                  onChange={handleStyleChange}
                  name="background"
                  className="flex-1 border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Yazı Rengi
              </label>
              <div className="mt-1 flex items-center space-x-2">
                <input
                  type="color"
                  name="textColor"
                  value={settings.footerStyle.textColor}
                  onChange={handleStyleChange}
                  className="h-8 w-8 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  value={settings.footerStyle.textColor}
                  onChange={handleStyleChange}
                  name="textColor"
                  className="flex-1 border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Link Rengi
              </label>
              <div className="mt-1 flex items-center space-x-2">
                <input
                  type="color"
                  name="linkColor"
                  value={settings.footerStyle.linkColor}
                  onChange={handleStyleChange}
                  className="h-8 w-8 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  value={settings.footerStyle.linkColor}
                  onChange={handleStyleChange}
                  name="linkColor"
                  className="flex-1 border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                İç Boşluk
              </label>
              <input
                type="text"
                name="padding"
                value={settings.footerStyle.padding}
                onChange={handleStyleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
              />
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="showSocialIcons"
                  checked={settings.footerStyle.showSocialIcons}
                  onChange={handleStyleChange}
                  className="h-4 w-4 text-[#4E73DF] focus:ring-[#4E73DF] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Sosyal Medya İkonları
                </span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="showNewsletter"
                  checked={settings.footerStyle.showNewsletter}
                  onChange={handleStyleChange}
                  className="h-4 w-4 text-[#4E73DF] focus:ring-[#4E73DF] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Bülten Aboneliği
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer Kolonları */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Footer Kolonları
          </h2>
          <div className="space-y-6">
            {settings.columns.map((column) => (
              <div
                key={column.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Kolon Başlığı
                  </label>
                  <input
                    type="text"
                    value={column.title}
                    onChange={(e) =>
                      handleColumnChange(column.id, "title", e.target.value)
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                  />
                </div>

                {column.content && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      İçerik
                    </label>
                    <textarea
                      value={column.content}
                      onChange={(e) =>
                        handleColumnChange(column.id, "content", e.target.value)
                      }
                      rows="3"
                      className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                    />
                  </div>
                )}

                {column.links && (
                  <div className="space-y-4">
                    <div className="flex items-end space-x-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">
                          Link Adı
                        </label>
                        <input
                          type="text"
                          value={newLink.label}
                          onChange={(e) =>
                            setNewLink((prev) => ({
                              ...prev,
                              label: e.target.value,
                            }))
                          }
                          className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">
                          URL
                        </label>
                        <input
                          type="text"
                          value={newLink.url}
                          onChange={(e) =>
                            setNewLink((prev) => ({
                              ...prev,
                              url: e.target.value,
                            }))
                          }
                          className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedColumn(column.id);
                          addLink();
                        }}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#4E73DF] hover:bg-[#2E59D9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4E73DF]"
                      >
                        <FiPlus className="w-5 h-5 text-white" />
                        Ekle
                      </button>
                    </div>

                    <div className="space-y-2">
                      {column.links.map((link) => (
                        <div
                          key={link.id}
                          className="flex items-center space-x-4"
                        >
                          <input
                            type="text"
                            value={link.label}
                            onChange={(e) =>
                              handleLinkChange(
                                column.id,
                                link.id,
                                "label",
                                e.target.value
                              )
                            }
                            className="flex-1 border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                          />
                          <input
                            type="text"
                            value={link.url}
                            onChange={(e) =>
                              handleLinkChange(
                                column.id,
                                link.id,
                                "url",
                                e.target.value
                              )
                            }
                            className="flex-1 border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                          />
                          <button
                            type="button"
                            onClick={() => removeLink(column.id, link.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <FiTrash2 className="w-5 h-5 text-red-500" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Alt Bar Ayarları */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Alt Bar Ayarları
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.bottomBar.showCopyright}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      bottomBar: {
                        ...prev.bottomBar,
                        showCopyright: e.target.checked,
                      },
                    }))
                  }
                  className="h-4 w-4 text-[#4E73DF] focus:ring-[#4E73DF] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Telif Hakkı Yazısı
                </span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.bottomBar.showPaymentIcons}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      bottomBar: {
                        ...prev.bottomBar,
                        showPaymentIcons: e.target.checked,
                      },
                    }))
                  }
                  className="h-4 w-4 text-[#4E73DF] focus:ring-[#4E73DF] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Ödeme Yöntemi İkonları
                </span>
              </label>
            </div>

            {settings.bottomBar.showCopyright && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Telif Hakkı Metni
                </label>
                <input
                  type="text"
                  value={settings.bottomBar.copyrightText}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      bottomBar: {
                        ...prev.bottomBar,
                        copyrightText: e.target.value,
                      },
                    }))
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                />
              </div>
            )}
          </div>
        </div>

        {/* Kaydet Butonu */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#4E73DF] hover:bg-[#2E59D9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4E73DF] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            ) : (
              <FiSave className="w-5 h-5 text-white" />
            )}
            Kaydet
          </button>
        </div>

        {/* Başarı Mesajı */}
        {success && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            Ayarlar başarıyla kaydedildi!
          </div>
        )}
      </form>
    </div>
  );
}
