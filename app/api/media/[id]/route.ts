import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Medya öğesi detaylarını getir
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

    const media = await prisma.image.findUnique({
      where: { id: params.id },
      include: {
        pages: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
        posts: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
    });

    if (!media) {
      return NextResponse.json(
        { error: "Medya öğesi bulunamadı." },
        { status: 404 }
      );
    }

    return NextResponse.json({ media });
  } catch (error) {
    console.error("Medya öğesi detayları alınırken hata:", error);
    return NextResponse.json(
      { error: "Medya öğesi detayları alınırken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Medya öğesini güncelle
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

    const { alt } = await req.json();

    // Medya öğesini güncelle
    const media = await prisma.image.update({
      where: { id: params.id },
      data: { alt },
      include: {
        pages: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
        posts: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
    });

    return NextResponse.json({
      media,
      message: "Medya öğesi başarıyla güncellendi.",
    });
  } catch (error) {
    console.error("Medya öğesi güncelleme hatası:", error);
    return NextResponse.json(
      { error: "Medya öğesi güncellenirken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Medya öğesini sil
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

    // Medya öğesini sil
    await prisma.image.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      message: "Medya öğesi başarıyla silindi.",
    });
  } catch (error) {
    console.error("Medya öğesi silme hatası:", error);
    return NextResponse.json(
      { error: "Medya öğesi silinirken bir hata oluştu." },
      { status: 500 }
    );
  }
} 