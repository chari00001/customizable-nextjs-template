import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PUT(request, { params }) {
  try {
    // Oturum kontrolü
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { message: "Bu işlem için yetkiniz yok" },
        { status: 401 }
      );
    }

    const { id } = params;
    const body = await request.json();
    const { name, description } = body;

    // Gerekli alanları kontrol et
    if (!name) {
      return NextResponse.json(
        { message: "Kategori adı gereklidir" },
        { status: 400 }
      );
    }

    // Slug oluştur
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // Aynı slug'a sahip başka kategori var mı kontrol et
    const existingCategory = await prisma.category.findFirst({
      where: {
        slug,
        NOT: {
          id,
        },
      },
    });

    if (existingCategory) {
      return NextResponse.json(
        { message: "Bu kategori adı zaten kullanılıyor" },
        { status: 400 }
      );
    }

    // Kategoriyi güncelle
    const category = await prisma.category.update({
      where: { id },
      data: {
        name,
        slug,
        description,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error("Kategori güncellenirken hata:", error);
    return NextResponse.json(
      { message: "Kategori güncellenirken bir hata oluştu" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    // Oturum kontrolü
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { message: "Bu işlem için yetkiniz yok" },
        { status: 401 }
      );
    }

    const { id } = params;

    // Kategoriye ait blog yazıları var mı kontrol et
    const postsCount = await prisma.blogPost.count({
      where: { categoryId: id },
    });

    if (postsCount > 0) {
      return NextResponse.json(
        {
          message:
            "Bu kategoriye ait blog yazıları var. Önce blog yazılarını silmelisiniz.",
        },
        { status: 400 }
      );
    }

    // Kategoriyi sil
    await prisma.category.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Kategori başarıyla silindi" });
  } catch (error) {
    console.error("Kategori silinirken hata:", error);
    return NextResponse.json(
      { message: "Kategori silinirken bir hata oluştu" },
      { status: 500 }
    );
  }
}
