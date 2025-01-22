import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/fixnix.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { saira, nunitoSans } from "@/lib/font";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fixnix Admin Panel",
  description: "Fixnix yönetim paneli",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${saira.variable} ${nunitoSans.variable} ${inter.className}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
