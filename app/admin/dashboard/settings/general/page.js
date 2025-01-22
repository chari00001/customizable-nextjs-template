"use client";

import { useState } from "react";
import { FiSave, FiImage } from "react-icons/fi";

export default function GeneralSettingsPage() {
  const [settings, setSettings] = useState({
    siteName: "Fixnix",
    siteDescription: "Modern web çözümleri",
    siteEmail: "info@fixnix.com",
    sitePhone: "+90 555 123 4567",
    siteAddress: "İstanbul, Türkiye",
    logo: null,
    favicon: null,
    socialMedia: {
      facebook: "https://facebook.com/fixnix",
      twitter: "https://twitter.com/fixnix",
      instagram: "https://instagram.com/fixnix",
      linkedin: "https://linkedin.com/company/fixnix",
    },
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setSettings((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setSettings((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setSettings((prev) => ({
        ...prev,
        [type]: file,
      }));
    }
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
        <h1 className="text-2xl font-semibold text-gray-800">Genel Ayarlar</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Site Bilgileri */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Site Bilgileri
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Site Adı
              </label>
              <input
                type="text"
                name="siteName"
                value={settings.siteName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Site Açıklaması
              </label>
              <textarea
                name="siteDescription"
                value={settings.siteDescription}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  E-posta Adresi
                </label>
                <input
                  type="email"
                  name="siteEmail"
                  value={settings.siteEmail}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Telefon Numarası
                </label>
                <input
                  type="text"
                  name="sitePhone"
                  value={settings.sitePhone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adres
              </label>
              <textarea
                name="siteAddress"
                value={settings.siteAddress}
                onChange={handleChange}
                rows="2"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
              />
            </div>
          </div>
        </div>

        {/* Logo ve Favicon */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Logo ve Favicon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Site Logo
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 h-20 w-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  {settings.logo ? (
                    <img
                      src={URL.createObjectURL(settings.logo)}
                      alt="Logo"
                      className="h-16 w-16 object-contain"
                    />
                  ) : (
                    <FiImage className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <label className="cursor-pointer">
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Logo Seç
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "logo")}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Favicon
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 h-20 w-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  {settings.favicon ? (
                    <img
                      src={URL.createObjectURL(settings.favicon)}
                      alt="Favicon"
                      className="h-8 w-8 object-contain"
                    />
                  ) : (
                    <FiImage className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <label className="cursor-pointer">
                  <span className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Favicon Seç
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "favicon")}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Sosyal Medya */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Sosyal Medya Bağlantıları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Facebook
              </label>
              <input
                type="url"
                name="socialMedia.facebook"
                value={settings.socialMedia.facebook}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Twitter
              </label>
              <input
                type="url"
                name="socialMedia.twitter"
                value={settings.socialMedia.twitter}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Instagram
              </label>
              <input
                type="url"
                name="socialMedia.instagram"
                value={settings.socialMedia.instagram}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                LinkedIn
              </label>
              <input
                type="url"
                name="socialMedia.linkedin"
                value={settings.socialMedia.linkedin}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-[#4E73DF] focus:border-[#4E73DF]"
              />
            </div>
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
              <FiSave className="w-5 h-5 mr-2" />
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
