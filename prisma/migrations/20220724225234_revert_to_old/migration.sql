/*
  Warnings:

  - You are about to drop the column `away_period_scores` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `away_team` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `home_period_scores` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `home_team` on the `Game` table. All the data in the column will be lost.
  - Added the required column `data` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "away_period_scores",
DROP COLUMN "away_team",
DROP COLUMN "home_period_scores",
DROP COLUMN "home_team",
ADD COLUMN     "data" JSONB NOT NULL;
