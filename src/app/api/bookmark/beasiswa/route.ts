import { db } from "@/lib/db";

export async function POST(req: Request) {
  const { title, user_email, total_uang, deadline } = await req.json();
  const data = { title, user_email, total_uang, deadline };

  const createBookmark = await db.bookmarkBeasiswa.create({
    data,
  });
  if (!createBookmark) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
