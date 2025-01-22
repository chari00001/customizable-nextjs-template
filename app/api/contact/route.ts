import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Tüm mesajları getir
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
    const search = searchParams.get("search");
    const isRead = searchParams.get("isRead");
    const isStarred = searchParams.get("isStarred");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
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
      ...(search && {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { subject: { contains: search, mode: "insensitive" } },
          { message: { contains: search, mode: "insensitive" } },
        ],
      }),
      ...(isRead !== null && { isRead: isRead === "true" }),
      ...(isStarred !== null && { isStarred: isStarred === "true" }),
    };

    // Toplam mesaj sayısını al
    const total = await prisma.contact.count({ where });

    // Mesajları getir
    const messages = await prisma.contact.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    });

    return NextResponse.json({
      messages,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Mesajlar alınırken hata:", error);
    return NextResponse.json(
      { error: "Mesajlar alınırken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Toplu mesaj işlemleri
export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

    const { ids, action } = await req.json();

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { error: "Geçersiz mesaj ID'leri." },
        { status: 400 }
      );
    }

    let updateData = {};

    switch (action) {
      case "markAsRead":
        updateData = { isRead: true, readAt: new Date() };
        break;
      case "markAsUnread":
        updateData = { isRead: false, readAt: null };
        break;
      case "star":
        updateData = { isStarred: true };
        break;
      case "unstar":
        updateData = { isStarred: false };
        break;
      default:
        return NextResponse.json(
          { error: "Geçersiz işlem." },
          { status: 400 }
        );
    }

    // Mesajları güncelle
    await prisma.contact.updateMany({
      where: {
        id: {
          in: ids,
        },
      },
      data: updateData,
    });

    return NextResponse.json({
      message: "Mesajlar başarıyla güncellendi.",
    });
  } catch (error) {
    console.error("Mesaj güncelleme hatası:", error);
    return NextResponse.json(
      { error: "Mesajlar güncellenirken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Toplu mesaj silme
export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

    const { ids } = await req.json();

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { error: "Geçersiz mesaj ID'leri." },
        { status: 400 }
      );
    }

    // Mesajları sil
    await prisma.contact.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return NextResponse.json({
      message: "Mesajlar başarıyla silindi.",
    });
  } catch (error) {
    console.error("Mesaj silme hatası:", error);
    return NextResponse.json(
      { error: "Mesajlar silinirken bir hata oluştu." },
      { status: 500 }
    );
  }
} 