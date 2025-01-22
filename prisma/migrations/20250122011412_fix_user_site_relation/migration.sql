/*
  Warnings:

  - You are about to drop the column `siteId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ownerId]` on the table `Site` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownerId` to the `Site` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_siteId_fkey";

-- AlterTable
ALTER TABLE "Site" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "siteId";

-- CreateIndex
CREATE UNIQUE INDEX "Site_ownerId_key" ON "Site"("ownerId");

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
