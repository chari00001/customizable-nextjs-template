import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Site ayarlarını getir
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

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

    // Site ayarlarını getir
    const site = await prisma.site.findUnique({
      where: { id: user.site.id },
      include: {
        settings: true,
        socialMedia: true,
      },
    });

    return NextResponse.json({ site });
  } catch (error) {
    console.error("Site ayarları alınırken hata:", error);
    return NextResponse.json(
      { error: "Site ayarları alınırken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Site ayarlarını güncelle
export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

    const {
      name,
      description,
      url,
      logo,
      favicon,
      settings,
      socialMedia,
    } = await req.json();

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

    // Site ayarlarını güncelle
    const site = await prisma.site.update({
      where: { id: user.site.id },
      data: {
        name,
        description,
        url,
        logo,
        favicon,
        settings: {
          upsert: {
            create: settings,
            update: settings,
          },
        },
        socialMedia: {
          upsert: {
            create: socialMedia,
            update: socialMedia,
          },
        },
      },
      include: {
        settings: true,
        socialMedia: true,
      },
    });

    return NextResponse.json({
      site,
      message: "Site ayarları başarıyla güncellendi.",
    });
  } catch (error) {
    console.error("Site ayarları güncelleme hatası:", error);
    return NextResponse.json(
      { error: "Site ayarları güncellenirken bir hata oluştu." },
      { status: 500 }
    );
  }
} 