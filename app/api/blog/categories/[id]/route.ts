import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Kategori detaylarını getir
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

    const category = await prisma.category.findUnique({
      where: { id: params.id },
      include: {
        posts: {
          select: {
            id: true,
            title: true,
            slug: true,
            status: true,
            publishedAt: true,
          },
          orderBy: { publishedAt: "desc" },
        },
        _count: {
          select: { posts: true },
        },
      },
    });

    if (!category) {
      return NextResponse.json(
        { error: "Kategori bulunamadı." },
        { status: 404 }
      );
    }

    return NextResponse.json({ category });
  } catch (error) {
    console.error("Kategori detayları alınırken hata:", error);
    return NextResponse.json(
      { error: "Kategori detayları alınırken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Kategoriyi güncelle
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

    const { name, slug, description } = await req.json();

    // Slug kontrolü (kendi ID'si hariç)
    const existingCategory = await prisma.category.findFirst({
      where: {
        slug,
        NOT: {
          id: params.id,
        },
      },
    });

    if (existingCategory) {
      return NextResponse.json(
        { error: "Bu URL adresi zaten kullanılıyor." },
        { status: 400 }
      );
    }

    // Kategoriyi güncelle
    const category = await prisma.category.update({
      where: { id: params.id },
      data: {
        name,
        slug,
        description,
      },
    });

    return NextResponse.json({
      category,
      message: "Kategori başarıyla güncellendi.",
    });
  } catch (error) {
    console.error("Kategori güncelleme hatası:", error);
    return NextResponse.json(
      { error: "Kategori güncellenirken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Kategoriyi sil
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

    // Kategoriye ait yazı var mı kontrol et
    const postCount = await prisma.post.count({
      where: { categoryId: params.id },
    });

    if (postCount > 0) {
      return NextResponse.json(
        { error: "Bu kategoriye ait yazılar olduğu için silinemez." },
        { status: 400 }
      );
    }

    // Kategoriyi sil
    await prisma.category.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      message: "Kategori başarıyla silindi.",
    });
  } catch (error) {
    console.error("Kategori silme hatası:", error);
    return NextResponse.json(
      { error: "Kategori silinirken bir hata oluştu." },
      { status: 500 }
    );
  }
} 