import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    if (req.headers.get("content-type") !== "application/json") {
      return NextResponse.json(
        { error: "İstek JSON formatında olmalıdır" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Tüm alanları doldurun" },
        { status: 400 }
      );
    }

    // Email formatını kontrol et
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Geçerli bir email adresi girin" },
        { status: 400 }
      );
    }

    // Şifre uzunluğunu kontrol et
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Şifre en az 6 karakter olmalıdır" },
        { status: 400 }
      );
    }

    // Email kullanımda mı kontrol et
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Bu email adresi zaten kullanımda" },
        { status: 400 }
      );
    }

    // Şifreyi hashle
    const hashedPassword = await hash(password, 12);

    // Önce kullanıcıyı oluştur
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    // Sonra siteyi oluştur ve kullanıcıyla ilişkilendir
    const site = await prisma.site.create({
      data: {
        name: "Yeni Site",
        description: "Site açıklaması",
        url: "https://example.com",
        ownerId: user.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Kayıt başarılı",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        site: {
          id: site.id,
          name: site.name,
          url: site.url,
        },
      },
    });
  } catch (error) {
    console.error("Kayıt hatası:", error);
    return NextResponse.json(
      { error: "Kayıt işlemi sırasında bir hata oluştu" },
      { status: 500 }
    );
  }
}
