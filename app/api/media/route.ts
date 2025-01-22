import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Tüm medya öğelerini getir
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
    const mimeType = searchParams.get("mimeType");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const skip = (page - 1) * limit;

    const where = {
      ...(search && {
        OR: [
          { filename: { contains: search, mode: "insensitive" } },
          { alt: { contains: search, mode: "insensitive" } },
        ],
      }),
      ...(mimeType && { mimeType }),
    };

    // Toplam medya sayısını al
    const total = await prisma.image.count({ where });

    // Medya öğelerini getir
    const media = await prisma.image.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    });

    return NextResponse.json({
      media,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Medya öğeleri alınırken hata:", error);
    return NextResponse.json(
      { error: "Medya öğeleri alınırken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Yeni medya öğesi oluştur
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const alt = formData.get("alt") as string;

    if (!file) {
      return NextResponse.json(
        { error: "Dosya yüklenemedi." },
        { status: 400 }
      );
    }

    // Dosya bilgilerini al
    const filename = file.name;
    const size = file.size;
    const mimeType = file.type;

    // Dosyayı yükle (örnek olarak uploadthing kullanıyoruz)
    // const uploadedFile = await uploadFile(file);
    const url = "https://example.com/uploads/" + filename; // Örnek URL

    // Medya öğesini oluştur
    const media = await prisma.image.create({
      data: {
        filename,
        url,
        size,
        mimeType,
        alt,
      },
    });

    return NextResponse.json({
      media,
      message: "Medya öğesi başarıyla yüklendi.",
    });
  } catch (error) {
    console.error("Medya öğesi yükleme hatası:", error);
    return NextResponse.json(
      { error: "Medya öğesi yüklenirken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Toplu medya öğesi sil
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
        { error: "Geçersiz medya öğesi ID'leri." },
        { status: 400 }
      );
    }

    // Medya öğelerini sil
    await prisma.image.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return NextResponse.json({
      message: "Medya öğeleri başarıyla silindi.",
    });
  } catch (error) {
    console.error("Medya öğeleri silme hatası:", error);
    return NextResponse.json(
      { error: "Medya öğeleri silinirken bir hata oluştu." },
      { status: 500 }
    );
  }
} 