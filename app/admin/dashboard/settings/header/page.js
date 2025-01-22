"use client";

import { useState } from "react";
import { FiSave, FiPlus, FiTrash2, FiMove } from "react-icons/fi";

export default function HeaderSettingsPage() {
  const [settings, setSettings] = useState({
    menuItems: [
      {
        id: 1,
        label: "Ana Sayfa",
        url: "/",
        order: 1,
        isActive: true,
      },
      {
        id: 2,
        label: "Hakkımızda",
        url: "/hakkimizda",
        order: 2,
        isActive: true,
      },
      {
        id: 3,
        label: "Hizmetler",
        url: "/hizmetler",
        order: 3,
        isActive: true,
        subItems: [
          {
            id: 31,
            label: "Web Tasarım",
            url: "/hizmetler/web-tasarim",
            isActive: true,
          },
          {
            id: 32,
            label: "Mobil Uygulama",
            url: "/hizmetler/mobil-uygulama",
            isActive: true,
          },
        ],
      },
      {
        id: 4,
        label: "İletişim",
        url: "/iletisim",
        order: 4,
        isActive: true,
      },
    ],
    headerStyle: {
      position: "fixed", // fixed, relative
      background: "#ffffff",
      textColor: "#000000",
      height: "80px",
      showShadow: true,
      isTransparent: false,
    },
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [newMenuItem, setNewMenuItem] = useState({
    label: "",
    url: "",
    isActive: true,
  });

  const handleStyleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      headerStyle: {
        ...prev.headerStyle,
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const handleMenuItemChange = (id, field, value) => {
    setSettings((prev) => ({
      ...prev,
      menuItems: prev.menuItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleSubItemChange = (menuId, subItemId, field, value) => {
    setSettings((prev) => ({
      ...prev,
      menuItems: prev.menuItems.map((item) =>
        item.id === menuId
          ? {
              ...item,
              subItems: item.subItems?.map((subItem) =>
                subItem.id === subItemId
                  ? { ...subItem, [field]: value }
                  : subItem
              ),
            }
          : item
      ),
    }));
  };

  const addMenuItem = () => {
    if (newMenuItem.label && newMenuItem.url) {
      const newId = Math.max(...settings.menuItems.map((item) => item.id)) + 1;
      setSettings((prev) => ({
        ...prev,
        menuItems: [
          ...prev.menuItems,
          {
            ...newMenuItem,
            id: newId,
            order: prev.menuItems.length + 1,
          },
        ],
      }));
      setNewMenuItem({ label: "", url: "", isActive: true });
    }
  };

  const removeMenuItem = (id) => {
    setSettings((prev) => ({
      ...prev,
      menuItems: prev.menuItems.filter((item) => item.id !== id),
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
          Header Ayarları
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header Stil Ayarları */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Header Stil Ayarları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pozisyon
              </label>
              <select
                name="position"
                value={settings.headerStyle.position}
                onChange={handleStyleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
              >
                <option value="fixed">Sabit</option>
                <option value="relative">Göreceli</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Yükseklik
              </label>
              <input
                type="text"
                name="height"
                value={settings.headerStyle.height}
                onChange={handleStyleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Arkaplan Rengi
              </label>
              <div className="mt-1 flex items-center space-x-2">
                <input
                  type="color"
                  name="background"
                  value={settings.headerStyle.background}
                  onChange={handleStyleChange}
                  className="h-8 w-8 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  value={settings.headerStyle.background}
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
                  value={settings.headerStyle.textColor}
                  onChange={handleStyleChange}
                  className="h-8 w-8 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  value={settings.headerStyle.textColor}
                  onChange={handleStyleChange}
                  name="textColor"
                  className="flex-1 border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="showShadow"
                  checked={settings.headerStyle.showShadow}
                  onChange={handleStyleChange}
                  className="h-4 w-4 text-[#4E73DF] focus:ring-[#4E73DF] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Gölge Göster</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="isTransparent"
                  checked={settings.headerStyle.isTransparent}
                  onChange={handleStyleChange}
                  className="h-4 w-4 text-[#4E73DF] focus:ring-[#4E73DF] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Şeffaf Arkaplan
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Menü Öğeleri */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Menü Öğeleri
          </h2>

          {/* Yeni Menü Öğesi Ekleme */}
          <div className="mb-6 flex items-end space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Menü Etiketi
              </label>
              <input
                type="text"
                value={newMenuItem.label}
                onChange={(e) =>
                  setNewMenuItem((prev) => ({
                    ...prev,
                    label: e.target.value,
                  }))
                }
                className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                placeholder="Menü adı"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL
              </label>
              <input
                type="text"
                value={newMenuItem.url}
                onChange={(e) =>
                  setNewMenuItem((prev) => ({
                    ...prev,
                    url: e.target.value,
                  }))
                }
                className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                placeholder="/sayfa-url"
              />
            </div>
            <button
              type="button"
              onClick={addMenuItem}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#4E73DF] hover:bg-[#2E59D9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4E73DF]"
            >
              <FiPlus className="w-5 h-5 text-white mr-2" />
              Ekle
            </button>
          </div>

          {/* Menü Listesi */}
          <div className="space-y-4">
            {settings.menuItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg p-4 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <FiMove className="w-5 h-5 text-gray-500 cursor-move" />
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={item.label}
                        onChange={(e) =>
                          handleMenuItemChange(item.id, "label", e.target.value)
                        }
                        className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                      />
                      <input
                        type="text"
                        value={item.url}
                        onChange={(e) =>
                          handleMenuItemChange(item.id, "url", e.target.value)
                        }
                        className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={item.isActive}
                        onChange={(e) =>
                          handleMenuItemChange(
                            item.id,
                            "isActive",
                            e.target.checked
                          )
                        }
                        className="h-4 w-4 text-[#4E73DF] focus:ring-[#4E73DF] border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Aktif</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => removeMenuItem(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FiTrash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Alt Menü Öğeleri */}
                {item.subItems && (
                  <div className="pl-8 space-y-2">
                    {item.subItems.map((subItem) => (
                      <div
                        key={subItem.id}
                        className="flex items-center space-x-4"
                      >
                        <input
                          type="text"
                          value={subItem.label}
                          onChange={(e) =>
                            handleSubItemChange(
                              item.id,
                              subItem.id,
                              "label",
                              e.target.value
                            )
                          }
                          className="flex-1 border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                        />
                        <input
                          type="text"
                          value={subItem.url}
                          onChange={(e) =>
                            handleSubItemChange(
                              item.id,
                              subItem.id,
                              "url",
                              e.target.value
                            )
                          }
                          className="flex-1 border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                        />
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={subItem.isActive}
                            onChange={(e) =>
                              handleSubItemChange(
                                item.id,
                                subItem.id,
                                "isActive",
                                e.target.checked
                              )
                            }
                            className="h-4 w-4 text-[#4E73DF] focus:ring-[#4E73DF] border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Aktif
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
              <FiSave className="w-5 h-5 text-white mr-2" />
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
