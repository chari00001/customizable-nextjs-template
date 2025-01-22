import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Mesaj detaylarını getir
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

    const message = await prisma.contact.findUnique({
      where: { id: params.id },
    });

    if (!message) {
      return NextResponse.json(
        { error: "Mesaj bulunamadı." },
        { status: 404 }
      );
    }

    // Mesaj okunmamışsa okundu olarak işaretle
    if (!message.isRead) {
      await prisma.contact.update({
        where: { id: params.id },
        data: {
          isRead: true,
          readAt: new Date(),
        },
      });
    }

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Mesaj detayları alınırken hata:", error);
    return NextResponse.json(
      { error: "Mesaj detayları alınırken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Mesajı güncelle
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

    const { isRead, isStarred } = await req.json();

    // Mesajı güncelle
    const message = await prisma.contact.update({
      where: { id: params.id },
      data: {
        ...(isRead !== undefined && {
          isRead,
          readAt: isRead ? new Date() : null,
        }),
        ...(isStarred !== undefined && { isStarred }),
      },
    });

    return NextResponse.json({
      message,
      message: "Mesaj başarıyla güncellendi.",
    });
  } catch (error) {
    console.error("Mesaj güncelleme hatası:", error);
    return NextResponse.json(
      { error: "Mesaj güncellenirken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Mesajı sil
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

    // Mesajı sil
    await prisma.contact.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      message: "Mesaj başarıyla silindi.",
    });
  } catch (error) {
    console.error("Mesaj silme hatası:", error);
    return NextResponse.json(
      { error: "Mesaj silinirken bir hata oluştu." },
      { status: 500 }
    );
  }
} 