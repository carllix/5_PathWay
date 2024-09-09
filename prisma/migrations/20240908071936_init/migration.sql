-- CreateTable
CREATE TABLE "BookmarkBeasiswa" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "total_uang" TEXT NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookmarkBeasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BookmarkBeasiswa_user_email_title_key" ON "BookmarkBeasiswa"("user_email", "title");
