/*
  Warnings:

  - You are about to drop the column `data` on the `Game` table. All the data in the column will be lost.
  - Added the required column `away_period_scores` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `away_team` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `home_period_scores` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `home_team` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "data",
ADD COLUMN     "away_period_scores" JSONB NOT NULL,
ADD COLUMN     "away_team" JSONB NOT NULL,
ADD COLUMN     "home_period_scores" JSONB NOT NULL,
ADD COLUMN     "home_team" JSONB NOT NULL;
