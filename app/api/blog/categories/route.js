import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request) {
  try {
    // Oturum kontrolü
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { message: "Bu işlem için yetkiniz yok" },
        { status: 401 }
      );
    }

    // Kategorileri getir
    const categories = await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Kategoriler getirilirken hata:", error);
    return NextResponse.json(
      { message: "Kategoriler getirilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // Oturum kontrolü
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { message: "Bu işlem için yetkiniz yok" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { name, description } = body;

    // Gerekli alanları kontrol et
    if (!name) {
      return NextResponse.json(
        { message: "Kategori adı gereklidir" },
        { status: 400 }
      );
    }

    // Slug oluştur
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // Aynı slug'a sahip kategori var mı kontrol et
    const existingCategory = await prisma.category.findUnique({
      where: { slug },
    });

    if (existingCategory) {
      return NextResponse.json(
        { message: "Bu kategori adı zaten kullanılıyor" },
        { status: 400 }
      );
    }

    // Kategoriyi oluştur
    const category = await prisma.category.create({
      data: {
        name,
        slug,
        description,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error("Kategori oluşturulurken hata:", error);
    return NextResponse.json(
      { message: "Kategori oluşturulurken bir hata oluştu" },
      { status: 500 }
    );
  }
}
