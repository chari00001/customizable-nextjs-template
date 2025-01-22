import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const status = searchParams.get("status");
    const categoryId = searchParams.get("categoryId");
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    // Filtreleme koşullarını oluştur
    const where = {
      AND: [
        { title: { contains: search || "", mode: "insensitive" } },
        status ? { status } : {},
        categoryId ? { categoryId } : {},
      ],
    };

    // Toplam sayıyı al
    const total = await prisma.post.count({ where });

    // Verileri getir
    const posts = await prisma.post.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
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
    console.error("Blog yazıları getirilirken hata oluştu:", error);
    return NextResponse.json(
      { error: "Blog yazıları getirilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, content, slug, status, categoryId } = body;

    // Zorunlu alanları kontrol et
    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: "Başlık, içerik ve URL zorunludur" },
        { status: 400 }
      );
    }

    // Slug benzersizliğini kontrol et
    const existingPost = await prisma.post.findUnique({
      where: { slug },
    });

    if (existingPost) {
      return NextResponse.json(
        { error: "Bu URL zaten kullanılıyor" },
        { status: 400 }
      );
    }

    // Yeni blog yazısını oluştur
    const post = await prisma.post.create({
      data: {
        title,
        content,
        slug,
        status: status || "DRAFT",
        categoryId,
        authorId: session.user.id,
      },
      include: {
        category: true,
      },
    });

    return NextResponse.json({
      message: "Blog yazısı başarıyla oluşturuldu",
      post,
    });
  } catch (error) {
    console.error("Blog yazısı oluşturulurken hata oluştu:", error);
    return NextResponse.json(
      { error: "Blog yazısı oluşturulurken bir hata oluştu" },
      { status: 500 }
    );
  }
}
