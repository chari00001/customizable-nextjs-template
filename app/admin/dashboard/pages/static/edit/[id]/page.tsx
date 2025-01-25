"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { pageService } from "@/services/pageService";
import { FiSave, FiX, FiEye } from "react-icons/fi";
import Link from "next/link";
import dynamic from "next/dynamic";

// Quill editörünü dinamik olarak import et
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse bg-gray-200 rounded-md" style={{ height: "400px" }}></div>
  ),
});

// Quill modülleri
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

// Stil tanımlamaları için CSS modülü
import "./styles.css";
import "react-quill/dist/quill.snow.css";

export default function EditStaticPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    fetchPage();
  }, []);

  const fetchPage = async () => {
    try {
      setLoading(true);
      const response = await pageService.getPageById(params.id);
      if (response.page) {
        setPage(response.page);
      } else {
        setError("Sayfa bulunamadı");
      }
    } catch (err) {
      console.error("Sayfa yüklenirken hata:", err);
      setError("Sayfa yüklenirken bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const response = await pageService.updatePage(params.id, {
        title: page.title,
        slug: page.slug,
        content: page.content,
        seo: {
          title: page.seo?.title || page.title,
          description: page.seo?.description || ''
        }
      });

      if (response.page) {
        router.push("/admin/dashboard/pages/static");
      } else {
        setError("Sayfa kaydedilirken bir hata oluştu");
      }
    } catch (err: any) {
      console.error("Sayfa kaydedilirken hata:", err);
      setError(err.response?.data?.error || "Sayfa kaydedilirken bir hata oluştu");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    router.push("/admin/dashboard/pages/static");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
        {error}
      </div>
    );
  }

  if (!page) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-600 px-4 py-3 rounded-lg">
        Sayfa bulunamadı
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="p-6">
          <div className="flex flex-col space-y-6">
            <div className="border-b pb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Sayfa Düzenle
              </h1>
              <p className="text-gray-600">
                Sayfanızın içeriğini ve ayarlarını buradan düzenleyebilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Sayfa Başlığı
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={page.title}
                    onChange={(e) => setPage({ ...page, title: e.target.value })}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Sayfa İçeriği
                  </label>
                  <div className="prose max-w-none">
                    <ReactQuill
                      theme="snow"
                      value={page.content || ''}
                      onChange={(content) => setPage({ ...page, content })}
                      modules={modules}
                      formats={formats}
                      className="rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">SEO Ayarları</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="seoTitle" className="block text-sm font-medium text-gray-700">
                        SEO Başlığı
                      </label>
                      <input
                        type="text"
                        id="seoTitle"
                        value={page.seo?.title || ''}
                        onChange={(e) => setPage({
                          ...page,
                          seo: { ...page.seo, title: e.target.value }
                        })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="seoDescription" className="block text-sm font-medium text-gray-700">
                        SEO Açıklaması
                      </label>
                      <textarea
                        id="seoDescription"
                        value={page.seo?.description || ''}
                        onChange={(e) => setPage({
                          ...page,
                          seo: { ...page.seo, description: e.target.value }
                        })}
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {saving ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                        Kaydediliyor...
                      </>
                    ) : (
                      'Kaydet'
                    )}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                  >
                    İptal
                  </button>
                  <Link
                    href={`/${page.slug}`}
                    target="_blank"
                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                  >
                    <FiEye className="w-4 h-4 mr-2" />
                    Önizle
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 