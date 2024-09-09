import { db } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const user_email = searchParams.get("user_email");
  const title = searchParams.get("title");

  if (!user_email || !title) {
    return new Response(
      JSON.stringify({ status: 400, message: "Missing parameters" }),
      { status: 400 }
    );
  }

  try {
    const existingBookmark = await db.bookmarkLomba.findFirst({
      where: {
        user_email: user_email,
        title: title,
      },
    });

    return new Response(
      JSON.stringify({ exists: !!existingBookmark }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ status: 500, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
