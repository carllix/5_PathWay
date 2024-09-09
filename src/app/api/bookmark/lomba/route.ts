import { db } from "@/lib/db";

export async function POST(req: Request) {
  const { title, user_email, category, deadline } = await req.json();
  const data = { title, user_email, category, deadline };

  const createBookmark = await db.bookmarkLomba.create({
    data,
  });
  if (!createBookmark) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
