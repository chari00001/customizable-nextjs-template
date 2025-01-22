"use client";

import { useState, useEffect } from "react";
import {
  FiUsers,
  FiEye,
  FiClock,
  FiArrowUp,
  FiArrowDown,
} from "react-icons/fi";
import EmptyState from "@/components/ui/EmptyState";

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState("last7days");
  const [isLoading, setIsLoading] = useState(true);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    // API'den analytics verilerini çekme simülasyonu
    const fetchAnalytics = async () => {
      setIsLoading(true);
      try {
        // Simüle edilmiş API çağrısı
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Örnek veri
        setAnalytics({
          summary: {
            totalVisitors: 0,
            pageViews: 0,
            avgSessionDuration: "0:00",
            bounceRate: "0%",
          },
          topPages: [],
          trafficSources: [],
          deviceTypes: [],
        });
      } catch (error) {
        console.error("Analytics verisi çekilemedi:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, [dateRange]);

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

  if (
    !analytics ||
    (analytics.topPages.length === 0 &&
      analytics.trafficSources.length === 0 &&
      analytics.deviceTypes.length === 0 &&
      analytics.summary.totalVisitors === 0)
  ) {
    return (
      <EmptyState
        title="Henüz Analytics Verisi Yok"
        description="Sitenizin ziyaretçi istatistikleri burada görüntülenecektir. Veriler günlük olarak güncellenir."
        image="/assets/images/empty-analytics.svg"
        actionLabel="Analytics Kurulumunu Tamamla"
        onAction={() =>
          (window.location.href = "/admin/dashboard/settings/analytics")
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Başlık ve Tarih Aralığı Seçimi */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Analytics</h1>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#4E73DF] focus:border-[#4E73DF]"
        >
          <option value="last7days">Son 7 Gün</option>
          <option value="last30days">Son 30 Gün</option>
          <option value="lastYear">Son 1 Yıl</option>
        </select>
      </div>

      {/* Özet Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Toplam Ziyaretçi */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Toplam Ziyaretçi
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mt-1">
                {analytics.summary.totalVisitors.toLocaleString()}
              </h3>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <FiUsers className="w-6 h-6 text-[#4E73DF]" />
            </div>
          </div>
        </div>

        {/* Sayfa Görüntüleme */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Sayfa Görüntüleme
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mt-1">
                {analytics.summary.pageViews.toLocaleString()}
              </h3>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <FiEye className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>

        {/* Ortalama Oturum Süresi */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Ort. Oturum Süresi
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mt-1">
                {analytics.summary.avgSessionDuration}
              </h3>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <FiClock className="w-6 h-6 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Hemen Çıkma Oranı */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Hemen Çıkma Oranı
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mt-1">
                {analytics.summary.bounceRate}
              </h3>
            </div>
            <div className="p-3 bg-red-50 rounded-full">
              <FiArrowUp className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* En Çok Ziyaret Edilen Sayfalar */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          En Çok Ziyaret Edilen Sayfalar
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sayfa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Görüntülenme
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tekil Ziyaretçi
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ort. Süre
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analytics.topPages.map((page) => (
                <tr key={page.path}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{page.path}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {page.views.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {page.uniqueVisitors.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {page.avgTimeOnPage}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trafik Kaynakları ve Cihaz Dağılımı */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trafik Kaynakları */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Trafik Kaynakları
          </h2>
          <div className="space-y-4">
            {analytics.trafficSources.map((source) => (
              <div key={source.name}>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{source.name}</span>
                  <span>{source.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#4E73DF] h-2 rounded-full"
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cihaz Dağılımı */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Cihaz Dağılımı
          </h2>
          <div className="space-y-4">
            {analytics.deviceTypes.map((device) => (
              <div key={device.name}>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{device.name}</span>
                  <span>{device.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${device.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
