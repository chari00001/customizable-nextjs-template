import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Sabit sayfaları oluştur
const staticPages = [
  {
    title: "Anasayfa",
    slug: "home",
    content: "Anasayfa içeriği buraya gelecek",
    isHomePage: true,
    status: "PUBLISHED",
  },
  {
    title: "Hakkımızda",
    slug: "about",
    content: "Hakkımızda sayfası içeriği",
    status: "PUBLISHED",
  },
  {
    title: "Hizmetlerimiz",
    slug: "services",
    content: "Hizmetlerimiz sayfası içeriği",
    status: "PUBLISHED",
  },
  {
    title: "İletişim",
    slug: "contact",
    content: "İletişim sayfası içeriği",
    status: "PUBLISHED",
  },
  {
    title: "Gizlilik Politikası",
    slug: "privacy-policy",
    content: "Gizlilik politikası içeriği",
    status: "PUBLISHED",
  },
];

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

    // Kullanıcının site ID'sini al
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { site: true },
    });

    if (!user?.site?.id) {
      return NextResponse.json(
        { error: "Site bulunamadı." },
        { status: 404 }
      );
    }

    // Sabit sayfaları oluştur
    const pages = await Promise.all(
      staticPages.map(async (page) => {
        // Önce varsa mevcut sayfayı kontrol et
        const existingPage = await prisma.page.findFirst({
          where: {
            slug: page.slug,
            siteId: user.site.id,
          },
        });

        if (existingPage) {
          console.log(`${page.title} sayfası zaten mevcut`);
          return existingPage;
        }

        // Sayfa yoksa yeni oluştur
        return await prisma.page.create({
          data: {
            ...page,
            site: {
              connect: { id: user.site.id },
            },
            seo: {
              create: {
                title: page.title,
                description: `${page.title} sayfası açıklaması`,
              },
            },
          },
        });
      })
    );

    return NextResponse.json({
      message: "Sabit sayfalar başarıyla oluşturuldu",
      pages,
    });
  } catch (error) {
    console.error("Sabit sayfalar oluşturulurken hata:", error);
    return NextResponse.json(
      { error: "Sabit sayfalar oluşturulurken bir hata oluştu." },
      { status: 500 }
    );
  }
} 