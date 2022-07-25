/*
  Warnings:

  - A unique constraint covering the columns `[league]` on the table `Game` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Game_league_key" ON "Game"("league");
