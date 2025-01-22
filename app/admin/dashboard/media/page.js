"use client";

import { useState, useEffect } from "react";
import { FiUpload, FiTrash2, FiImage, FiFile, FiSearch } from "react-icons/fi";
import { useMediaStore } from "@/store";
import EmptyState from "@/components/ui/EmptyState";

export default function MediaPage() {
  const { mediaItems, isLoading, fetchMediaItems } = useMediaStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMediaItems();
  }, [fetchMediaItems]);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    setLoading(true);
    // Dosya yükleme simülasyonu
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    setLoading(false);
    setUploadProgress(0);
    setSelectedFiles([]);
  };

  const filteredMedia = mediaItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  if (mediaItems.length === 0) {
    return (
      <EmptyState
        title="Henüz Medya Dosyası Yüklenmemiş"
        description="Sitenizde kullanmak istediğiniz görselleri ve diğer medya dosyalarını buradan yükleyebilirsiniz."
        image="/assets/images/empty-media.svg"
        actionLabel="Dosya Yükle"
        onAction={() => document.getElementById("file-upload").click()}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Başlık ve Yükleme Butonu */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Medya Kütüphanesi
        </h1>
        <div>
          <input
            type="file"
            id="file-upload"
            multiple
            className="hidden"
            onChange={handleFileSelect}
          />
          <button
            onClick={() => document.getElementById("file-upload").click()}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#4E73DF] hover:bg-[#2E59D9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4E73DF]"
          >
            <FiUpload className="w-5 h-5 mr-2" />
            Dosya Yükle
          </button>
        </div>
      </div>

      {/* Arama */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Medya ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4E73DF] focus:border-[#4E73DF]"
          />
        </div>
      </div>

      {/* Seçili Dosyalar ve Yükleme Durumu */}
      {selectedFiles.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-medium mb-2">Yüklenecek Dosyalar</h2>
          <ul className="space-y-2">
            {selectedFiles.map((file, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{file.name}</span>
                <span className="text-sm text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </li>
            ))}
          </ul>
          {loading && (
            <div className="mt-4">
              <div className="h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-[#4E73DF] rounded transition-all duration-200"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <span className="text-sm text-gray-500 mt-1">
                Yükleniyor... {uploadProgress}%
              </span>
            </div>
          )}
          {!loading && (
            <button
              onClick={handleUpload}
              className="mt-4 px-4 py-2 bg-[#4E73DF] text-white rounded hover:bg-[#2E59D9] transition-colors duration-200"
            >
              Yüklemeyi Başlat
            </button>
          )}
        </div>
      )}

      {/* Medya Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredMedia.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="aspect-w-1 aspect-h-1">
              {item.type.startsWith("image/") ? (
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <span className="text-gray-400 text-sm">{item.type}</span>
                </div>
              )}
            </div>
            <div className="p-2">
              <p className="text-sm text-gray-600 truncate">{item.name}</p>
              <p className="text-xs text-gray-400">
                {(item.size / 1024).toFixed(2)} KB
              </p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="p-2 text-white hover:text-red-400"
                title="Sil"
                onClick={() => {
                  // Silme işlemi
                  console.log("Delete:", item.id);
                }}
              >
                <FiTrash2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
