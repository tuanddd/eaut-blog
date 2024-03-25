import { getAll } from "@/prisma/threadvote";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const threadSlug = searchParams.get("threadSlug") || "";

  try {
    const data = await getAll(threadSlug);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};