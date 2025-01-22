import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request) {
  try {
    // Oturum kontrolü
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { message: "Bu işlem için yetkiniz yok" },
        { status: 401 }
      );
    }

    // URL'den query parametrelerini al
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";
    const categoryId = searchParams.get("categoryId");
    const status = searchParams.get("status");

    // Filtreleme koşullarını oluştur
    const where = {
      AND: [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        // Kategori filtresi
        ...(categoryId ? [{ categoryId }] : []),
        // Durum filtresi
        ...(status ? [{ status }] : []),
      ],
    };

    // Toplam blog yazısı sayısını al
    const total = await prisma.blogPost.count({ where });

    // Blog yazılarını getir
    const posts = await prisma.blogPost.findMany({
      where,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: (page - 1) * limit,
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
    console.error("Blog yazıları getirilirken hata:", error);
    return NextResponse.json(
      { message: "Blog yazıları getirilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
