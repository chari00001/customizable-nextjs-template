import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Sayfa detaylarını getir
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

    const page = await prisma.page.findUnique({
      where: { id: params.id },
      include: {
        seo: true,
        images: true,
        scripts: true,
      },
    });

    if (!page) {
      return NextResponse.json(
        { error: "Sayfa bulunamadı." },
        { status: 404 }
      );
    }

    return NextResponse.json({ page });
  } catch (error) {
    console.error("Sayfa detayları alınırken hata:", error);
    return NextResponse.json(
      { error: "Sayfa detayları alınırken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Sayfayı güncelle
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

    const { title, slug, content, status, seo } = await req.json();

    // Slug kontrolü (kendi ID'si hariç)
    const existingPage = await prisma.page.findFirst({
      where: {
        slug,
        NOT: {
          id: params.id,
        },
      },
    });

    if (existingPage) {
      return NextResponse.json(
        { error: "Bu URL adresi zaten kullanılıyor." },
        { status: 400 }
      );
    }

    // Sayfayı güncelle
    const page = await prisma.page.update({
      where: { id: params.id },
      data: {
        title,
        slug,
        content,
        status,
        ...(seo && {
          seo: {
            upsert: {
              create: seo,
              update: seo,
            },
          },
        }),
      },
      include: {
        seo: true,
      },
    });

    return NextResponse.json({
      page,
      message: "Sayfa başarıyla güncellendi.",
    });
  } catch (error) {
    console.error("Sayfa güncelleme hatası:", error);
    return NextResponse.json(
      { error: "Sayfa güncellenirken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Sayfayı sil
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

    // Sayfayı sil (cascade ile ilişkili veriler de silinecek)
    await prisma.page.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      message: "Sayfa başarıyla silindi.",
    });
  } catch (error) {
    console.error("Sayfa silme hatası:", error);
    return NextResponse.json(
      { error: "Sayfa silinirken bir hata oluştu." },
      { status: 500 }
    );
  }
} 