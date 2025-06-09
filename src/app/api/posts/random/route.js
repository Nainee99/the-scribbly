import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const count = parseInt(searchParams.get("count") || "4", 10);

  try {
    const total = await prisma.post.count();
    if (total === 0)
      return new NextResponse(JSON.stringify([], { status: 200 }));

    const skips = [];
    while (skips.length < count && skips.length < total) {
      const rand = Math.floor(Math.random() * total);
      if (!skips.includes(rand)) skips.push(rand);
    }

    const posts = await Promise.all(
      skips.map((skip) =>
        prisma.post.findFirst({
          skip,
          include: { user: true },
        })
      )
    );

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
