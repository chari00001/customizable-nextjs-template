"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiLayout,
  FiSettings,
  FiFileText,
  FiImage,
  FiUsers,
  FiMail,
  FiBarChart,
  FiMenu,
  FiX,
  FiChevronDown,
  FiLogOut,
  FiUser,
} from "react-icons/fi";

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    // Oturum kontrolü
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn && status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  const handleLogout = async () => {
    // LocalStorage'dan oturum bilgilerini temizle
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("rememberedUser");

    // Next-auth oturumunu sonlandır
    await signOut({ redirect: false });
    router.push("/admin/login");
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FC]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#4E73DF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FiHome className="w-5 h-5" />,
      href: "/admin/dashboard",
    },
    {
      title: "Sayfa Yönetimi",
      icon: <FiLayout className="w-5 h-5" />,
      items: [
        { title: "Sabit Sayfalar", href: "/admin/dashboard/pages/static" },
        { title: "Blog Yazıları", href: "/admin/dashboard/pages/blog" },
      ],
    },
    {
      title: "Site Ayarları",
      icon: <FiSettings className="w-5 h-5" />,
      items: [
        { title: "Genel Ayarlar", href: "/admin/dashboard/settings/general" },
        { title: "Header Ayarları", href: "/admin/dashboard/settings/header" },
        { title: "Footer Ayarları", href: "/admin/dashboard/settings/footer" },
      ],
    },
    {
      title: "Medya",
      icon: <FiImage className="w-5 h-5" />,
      href: "/admin/dashboard/media",
    },
    {
      title: "İletişim",
      icon: <FiMail className="w-5 h-5" />,
      href: "/admin/dashboard/contact",
    },
    {
      title: "Analitik",
      icon: <FiBarChart className="w-5 h-5" />,
      href: "/admin/dashboard/analytics",
    },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = (title) =>
    setActiveDropdown(activeDropdown === title ? null : title);

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Mobil menü butonu */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isSidebarOpen ? (
          <FiX className="w-6 h-6 text-gray-600" />
        ) : (
          <FiMenu className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40"
          >
            {/* Logo */}
            <div className="p-6 border-b border-gray-200">
              <Link
                href="/admin/dashboard"
                className="flex items-center space-x-2"
              >
                <span className="text-2xl font-bold text-[#4E73DF]">F</span>
                <span className="text-xl font-semibold text-gray-800">
                  Fixnix
                </span>
              </Link>
            </div>

            {/* Menü */}
            <nav className="p-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.items ? (
                    // Dropdown menü
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="text-gray-700">{item.title}</span>
                        </div>
                        <FiChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-11 space-y-2"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Normal menü item
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      {item.icon}
                      <span className="text-gray-700">{item.title}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ana içerik */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : "ml-0"
        }`}
      >
        {/* Üst bar */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <h1 className="text-xl font-semibold text-gray-800">
                Hoş geldiniz, {session?.user?.name || session?.user?.email}
              </h1>

              {/* Kullanıcı menüsü */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <FiUser className="w-5 h-5" />
                  <span className="hidden md:block">
                    {session?.user?.name || session?.user?.email}
                  </span>
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isUserMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown menü */}
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl z-50"
                    >
                      <Link
                        href="/admin/dashboard/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <FiUser className="inline-block w-4 h-4 mr-2" />
                        Profil
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      >
                        <FiLogOut className="inline-block w-4 h-4 mr-2" />
                        Çıkış Yap
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Sayfa içeriği */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
