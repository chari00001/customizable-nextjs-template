"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSave, FiX, FiEye } from "react-icons/fi";
import dynamic from "next/dynamic";

// Rich text editor'ü client-side'da yükle
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Yükleniyor...</p>,
});
import "react-quill/dist/quill.snow.css";

export default function NewStaticPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    status: "draft",
    seo: {
      title: "",
      description: "",
      keywords: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("seo.")) {
      const seoField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        seo: { ...prev.seo, [seoField]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEditorChange = (content) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // API çağrısı yapılacak
      console.log("Form data:", formData);
      router.push("/admin/dashboard/pages/static");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Üst bar */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Yeni Sayfa</h1>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <FiX className="w-5 h-5" />
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            title="Önizleme"
          >
            <FiEye className="w-5 h-5" />
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="inline-flex items-center px-4 py-2 bg-[#4E73DF] text-white rounded-lg hover:bg-[#4262c5] transition-colors duration-200"
          >
            <FiSave className="w-5 h-5 mr-2" />
            {loading ? "Kaydediliyor..." : "Kaydet"}
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sol kolon - Ana içerik */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sayfa Başlığı
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E73DF]/20 focus:border-[#4E73DF]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="slug"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    URL
                  </label>
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E73DF]/20 focus:border-[#4E73DF]"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                İçerik
              </label>
              <div className="prose max-w-none">
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={handleEditorChange}
                  className="h-96"
                />
              </div>
            </div>
          </div>

          {/* Sağ kolon - Ayarlar */}
          <div className="space-y-6">
            {/* Durum */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Durum</h2>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E73DF]/20 focus:border-[#4E73DF]"
              >
                <option value="draft">Taslak</option>
                <option value="published">Yayında</option>
              </select>
            </div>

            {/* SEO Ayarları */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                SEO Ayarları
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SEO Başlığı
                  </label>
                  <input
                    type="text"
                    name="seo.title"
                    value={formData.seo.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E73DF]/20 focus:border-[#4E73DF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Meta Açıklama
                  </label>
                  <textarea
                    name="seo.description"
                    value={formData.seo.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E73DF]/20 focus:border-[#4E73DF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Anahtar Kelimeler
                  </label>
                  <input
                    type="text"
                    name="seo.keywords"
                    value={formData.seo.keywords}
                    onChange={handleChange}
                    placeholder="Virgülle ayırın"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E73DF]/20 focus:border-[#4E73DF]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
