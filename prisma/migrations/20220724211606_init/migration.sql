-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "league" TEXT NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_id_key" ON "Game"("id");
