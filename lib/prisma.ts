import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query",
      },
      {
        emit: "event",
        level: "error",
      },
      {
        emit: "event",
        level: "info",
      },
      {
        emit: "event",
        level: "warn",
      },
    ],
  });
};

export const prisma = globalThis.prisma ?? prismaClientSingleton();

// Veritabanı olaylarını dinle
prisma.$on("query", (e) => {
  console.log("🔍 Veritabanı Sorgusu:", {
    query: e.query,
    params: e.params,
    duration: `${e.duration}ms`,
  });
});

prisma.$on("error", (e) => {
  console.error("❌ Veritabanı Hatası:", e);
});

prisma.$on("info", (e) => {
  console.info("ℹ️ Veritabanı Bilgisi:", e);
});

prisma.$on("warn", (e) => {
  console.warn("⚠️ Veritabanı Uyarısı:", e);
});

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
} 