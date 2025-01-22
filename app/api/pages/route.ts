import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Tüm sayfaları getir
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    const where = {
      ...(status && { status }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { content: { contains: search, mode: "insensitive" } },
        ],
      }),
    };

    const pages = await prisma.page.findMany({
      where,
      orderBy: { updatedAt: "desc" },
      include: {
        seo: true,
      },
    });

    return NextResponse.json({ pages });
  } catch (error) {
    console.error("Sayfalar alınırken hata:", error);
    return NextResponse.json(
      { error: "Sayfalar alınırken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Yeni sayfa oluştur
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

    const { title, slug, content, status, seo } = await req.json();

    // Slug kontrolü
    const existingPage = await prisma.page.findUnique({
      where: { slug },
    });

    if (existingPage) {
      return NextResponse.json(
        { error: "Bu URL adresi zaten kullanılıyor." },
        { status: 400 }
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

    // Sayfayı oluştur
    const page = await prisma.page.create({
      data: {
        title,
        slug,
        content,
        status,
        site: {
          connect: { id: user.site.id },
        },
        ...(seo && {
          seo: {
            create: seo,
          },
        }),
      },
      include: {
        seo: true,
      },
    });

    return NextResponse.json({
      page,
      message: "Sayfa başarıyla oluşturuldu.",
    });
  } catch (error) {
    console.error("Sayfa oluşturma hatası:", error);
    return NextResponse.json(
      { error: "Sayfa oluşturulurken bir hata oluştu." },
      { status: 500 }
    );
  }
} 