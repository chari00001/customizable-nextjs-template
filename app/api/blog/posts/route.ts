import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Tüm blog yazılarını getir
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
    const categoryId = searchParams.get("categoryId");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

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

    const where = {
      siteId: user.site.id,
      ...(status && { status }),
      ...(categoryId && { categoryId }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { content: { contains: search, mode: "insensitive" } },
        ],
      }),
    };

    // Toplam yazı sayısını al
    const total = await prisma.post.count({ where });

    // Yazıları getir
    const posts = await prisma.post.findMany({
      where,
      orderBy: { updatedAt: "desc" },
      include: {
        category: true,
        seo: true,
      },
      skip,
      take: limit,
    });

    return NextResponse.json({
      posts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Blog yazıları alınırken hata:", error);
    return NextResponse.json(
      { error: "Blog yazıları alınırken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Yeni blog yazısı oluştur
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

    const { title, slug, content, excerpt, status, categoryId, seo } = await req.json();

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

    // Slug kontrolü
    const existingPost = await prisma.post.findFirst({
      where: {
        siteId: user.site.id,
        slug,
      },
    });

    if (existingPost) {
      return NextResponse.json(
        { error: "Bu URL adresi zaten kullanılıyor." },
        { status: 400 }
      );
    }

    // Blog yazısını oluştur
    const post = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        status,
        site: {
          connect: { id: user.site.id },
        },
        ...(categoryId && {
          category: {
            connect: { id: categoryId },
          },
        }),
        ...(seo && {
          seo: {
            create: seo,
          },
        }),
      },
      include: {
        category: true,
        seo: true,
      },
    });

    return NextResponse.json({
      post,
      message: "Blog yazısı başarıyla oluşturuldu.",
    });
  } catch (error) {
    console.error("Blog yazısı oluşturma hatası:", error);
    return NextResponse.json(
      { error: "Blog yazısı oluşturulurken bir hata oluştu." },
      { status: 500 }
    );
  }
} 