import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Blog yazısı detaylarını getir
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

    const post = await prisma.post.findUnique({
      where: { id: params.id },
      include: {
        category: true,
        seo: true,
        images: true,
        scripts: true,
      },
    });

    if (!post) {
      return NextResponse.json(
        { error: "Blog yazısı bulunamadı." },
        { status: 404 }
      );
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error("Blog yazısı detayları alınırken hata:", error);
    return NextResponse.json(
      { error: "Blog yazısı detayları alınırken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Blog yazısını güncelle
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

    const { title, slug, content, excerpt, status, categoryId, seo } = await req.json();

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

    // Slug kontrolü (kendi ID'si hariç)
    const existingPost = await prisma.post.findFirst({
      where: {
        siteId: user.site.id,
        slug,
        NOT: {
          id: params.id,
        },
      },
    });

    if (existingPost) {
      return NextResponse.json(
        { error: "Bu URL adresi zaten kullanılıyor." },
        { status: 400 }
      );
    }

    // Blog yazısını güncelle
    const post = await prisma.post.update({
      where: { id: params.id },
      data: {
        title,
        slug,
        content,
        excerpt,
        status,
        category: {
          ...(categoryId
            ? { connect: { id: categoryId } }
            : { disconnect: true }),
        },
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
        category: true,
        seo: true,
      },
    });

    return NextResponse.json({
      post,
      message: "Blog yazısı başarıyla güncellendi.",
    });
  } catch (error) {
    console.error("Blog yazısı güncelleme hatası:", error);
    return NextResponse.json(
      { error: "Blog yazısı güncellenirken bir hata oluştu." },
      { status: 500 }
    );
  }
}

// Blog yazısını sil
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

    // Blog yazısını sil (cascade ile ilişkili veriler de silinecek)
    await prisma.post.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      message: "Blog yazısı başarıyla silindi.",
    });
  } catch (error) {
    console.error("Blog yazısı silme hatası:", error);
    return NextResponse.json(
      { error: "Blog yazısı silinirken bir hata oluştu." },
      { status: 500 }
    );
  }
} 