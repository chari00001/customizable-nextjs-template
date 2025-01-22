import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { hash, compare } from "bcryptjs";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor." },
        { status: 401 }
      );
    }

    const { currentPassword, newPassword } = await req.json();

    // Kullanıcıyı bul
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user?.password) {
      return NextResponse.json(
        { error: "Kullanıcı bulunamadı." },
        { status: 404 }
      );
    }

    // Mevcut şifreyi kontrol et
    const isValid = await compare(currentPassword, user.password);

    if (!isValid) {
      return NextResponse.json(
        { error: "Mevcut şifre yanlış." },
        { status: 400 }
      );
    }

    // Yeni şifreyi hashle
    const hashedPassword = await hash(newPassword, 12);

    // Şifreyi güncelle
    await prisma.user.update({
      where: { email: session.user.email },
      data: { password: hashedPassword },
    });

    return NextResponse.json({
      message: "Şifreniz başarıyla güncellendi.",
    });
  } catch (error) {
    console.error("Şifre değiştirme hatası:", error);
    return NextResponse.json(
      { error: "Şifre değiştirilirken bir hata oluştu." },
      { status: 500 }
    );
  }
} 