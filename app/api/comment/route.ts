import { createOne, getAll } from "@/prisma/comment";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const comment = await createOne(body);

    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 404 },
    );
  }
};

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const threadSlug = searchParams.get("threadSlug") || "";

  try {
    const comments = await getAll(threadSlug);

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};
