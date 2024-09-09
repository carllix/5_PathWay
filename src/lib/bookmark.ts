import { db } from "./db";

export async function isBookmarked(user_email: string, title: string) {
  // Mencari bookmark berdasarkan email pengguna dan judul lomba
  const bookmark = await db.bookmarkLomba.findFirst({
    where: {
      user_email,
      title,
    },
  });

  // Mengembalikan true jika bookmark ditemukan, sebaliknya false
  return !!bookmark;
}
