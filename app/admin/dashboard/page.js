"use client";

import { FiUsers, FiFileText, FiMail, FiEye } from "react-icons/fi";

export default function DashboardPage() {
  const stats = [
    {
      title: "Toplam Sayfa",
      value: "12",
      icon: <FiFileText className="w-6 h-6 text-blue-500" />,
      change: "+2 yeni",
      changeType: "increase",
    },
    {
      title: "Blog Yazısı",
      value: "24",
      icon: <FiFileText className="w-6 h-6 text-green-500" />,
      change: "+5 yeni",
      changeType: "increase",
    },
    {
      title: "İletişim Mesajı",
      value: "8",
      icon: <FiMail className="w-6 h-6 text-yellow-500" />,
      change: "3 okunmamış",
      changeType: "neutral",
    },
    {
      title: "Ziyaretçi",
      value: "1,234",
      icon: <FiEye className="w-6 h-6 text-purple-500" />,
      change: "+12% bu ay",
      changeType: "increase",
    },
  ];

  return (
    <div className="space-y-6">
      {/* İstatistik kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 transition-transform duration-200 hover:scale-105"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">{stat.icon}</div>
              <span
                className={`text-sm font-medium ${
                  stat.changeType === "increase"
                    ? "text-green-600"
                    : stat.changeType === "decrease"
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-gray-500 text-sm">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Son aktiviteler */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Son Aktiviteler
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FiFileText className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-gray-800 font-medium">Yeni sayfa eklendi</p>
                <p className="text-sm text-gray-500">Hakkımızda sayfası</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">2 saat önce</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <FiMail className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-gray-800 font-medium">
                  Yeni iletişim mesajı
                </p>
                <p className="text-sm text-gray-500">
                  Ahmet Yılmaz tarafından gönderildi
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500">5 saat önce</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <FiFileText className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-gray-800 font-medium">
                  Blog yazısı yayınlandı
                </p>
                <p className="text-sm text-gray-500">
                  "Yeni Teknolojiler 2024" başlıklı yazı
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500">1 gün önce</span>
          </div>
        </div>
      </div>

      {/* Hızlı işlemler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Hızlı İşlemler
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-gray-50 rounded-lg text-left hover:bg-gray-100 transition-colors duration-200">
              <FiFileText className="w-6 h-6 text-blue-500 mb-2" />
              <p className="font-medium text-gray-800">Yeni Sayfa</p>
              <p className="text-sm text-gray-500">Sayfa oluştur</p>
            </button>
            <button className="p-4 bg-gray-50 rounded-lg text-left hover:bg-gray-100 transition-colors duration-200">
              <FiFileText className="w-6 h-6 text-green-500 mb-2" />
              <p className="font-medium text-gray-800">Blog Yazısı</p>
              <p className="text-sm text-gray-500">Yazı oluştur</p>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Site Durumu
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Toplam Ziyaret</span>
              <span className="text-gray-800 font-medium">1,234</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Aktif Sayfalar</span>
              <span className="text-gray-800 font-medium">8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Blog Yazıları</span>
              <span className="text-gray-800 font-medium">24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
