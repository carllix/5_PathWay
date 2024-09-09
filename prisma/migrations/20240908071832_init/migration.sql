-- CreateTable
CREATE TABLE "BookmarkLomba" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookmarkLomba_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BookmarkLomba_user_email_title_key" ON "BookmarkLomba"("user_email", "title");
