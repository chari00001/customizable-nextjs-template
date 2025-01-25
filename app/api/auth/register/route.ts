import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Bu e-posta adresi zaten kayıtlı." },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "ADMIN",
        site: {
          create: {
            name: "Yeni Site",
            description: "Site açıklaması",
            url: "http://localhost:3000",
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return NextResponse.json({
      user,
      message: "Kullanıcı başarıyla oluşturuldu.",
    });
  } catch (error) {
    console.error("Kayıt hatası:", error);
    return NextResponse.json(
      { error: "Kullanıcı oluşturulurken bir hata oluştu." },
      { status: 500 }
    );
  }
} 