"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { pageService } from "@/services/pageService";
import { FiEdit2, FiEye, FiPlus } from "react-icons/fi";

const STATIC_PAGE_TEMPLATES = [
  {
    title: "Anasayfa",
    slug: "home",
    content: "<h1>Hoş Geldiniz</h1><p>Anasayfa içeriği buraya gelecek.</p>",
    isHomePage: true,
  },
  {
    title: "Hakkımızda",
    slug: "about",
    content: "<h1>Hakkımızda</h1><p>Şirketimiz hakkında detaylı bilgi.</p>",
  },
  {
    title: "Hizmetlerimiz",
    slug: "services",
    content: "<h1>Hizmetlerimiz</h1><p>Sunduğumuz hizmetler hakkında bilgi.</p>",
  },
  {
    title: "İletişim",
    slug: "contact",
    content: "<h1>İletişim</h1><p>İletişim bilgilerimiz ve formu.</p>",
  },
  {
    title: "Gizlilik Politikası",
    slug: "privacy-policy",
    content: "<h1>Gizlilik Politikası</h1><p>Gizlilik politikamız hakkında bilgi.</p>",
  }
];

export default function StaticPagesPage() {
  const router = useRouter();
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      setLoading(true);
      const data = await pageService.getPages({ status: "PUBLISHED" });
      setPages(data.pages);
    } catch (err) {
      console.error("Sayfalar yüklenirken hata:", err);
      setError("Sayfalar yüklenirken bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/dashboard/pages/static/edit/${id}`);
  };

  const handleCreatePage = async (template: any) => {
    try {
      setLoading(true);
      const data = await pageService.createPage({
        ...template,
        status: "PUBLISHED",
      });
      await fetchPages();
      setShowTemplateSelector(false);
    } catch (err) {
      console.error("Sayfa oluşturulurken hata:", err);
      setError("Sayfa oluşturulurken bir hata oluştu");
    } finally {
      setLoading(false);
    }
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sabit Sayfalar</h1>
          <p className="mt-2 text-gray-600">
            Web sitenizin sabit sayfalarını buradan yönetebilirsiniz.
          </p>
        </div>
        <button
          onClick={() => setShowTemplateSelector(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
        >
          <FiPlus className="w-4 h-4 mr-2" />
          Sayfa Ekle
        </button>
      </div>

      {showTemplateSelector && (
        <div className="mb-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Sayfa Şablonu Seçin</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {STATIC_PAGE_TEMPLATES.map((template) => {
              const isExisting = pages.some(
                (page: any) => page.slug === template.slug
              );
              return (
                <div
                  key={template.slug}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >
                  <h3 className="font-medium">{template.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">/{template.slug}</p>
                  <button
                    onClick={() => handleCreatePage(template)}
                    disabled={isExisting}
                    className={`mt-3 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md ${
                      isExisting
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "text-white bg-primary-600 hover:bg-primary-700"
                    }`}
                  >
                    {isExisting ? "Zaten Mevcut" : "Oluştur"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="min-w-full divide-y divide-gray-200">
          <div className="bg-gray-50">
            <div className="grid grid-cols-12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="col-span-4">Başlık</div>
              <div className="col-span-3">URL</div>
              <div className="col-span-3">Son Güncelleme</div>
              <div className="col-span-2">İşlemler</div>
            </div>
          </div>

          <div className="bg-white divide-y divide-gray-200">
            {pages.map((page: any) => (
              <div
                key={page.id}
                className="grid grid-cols-12 px-6 py-4 text-sm text-gray-900 items-center hover:bg-gray-50"
              >
                <div className="col-span-4 font-medium">{page.title}</div>
                <div className="col-span-3 text-gray-600">{page.slug}</div>
                <div className="col-span-3 text-gray-600">
                  {new Date(page.updatedAt).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <div className="col-span-2 space-x-3">
                  <button
                    onClick={() => handleEdit(page.id)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-900"
                  >
                    <FiEdit2 className="w-4 h-4 mr-1" />
                    Düzenle
                  </button>
                  <Link
                    href={`/${page.slug}`}
                    target="_blank"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <FiEye className="w-4 h-4 mr-1" />
                    Görüntüle
                  </Link>
                </div>
              </div>
            ))}

            {pages.length === 0 && (
              <div className="px-6 py-4 text-center text-gray-500">
                Henüz hiç sayfa oluşturulmamış.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 