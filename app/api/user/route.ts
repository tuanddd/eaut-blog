import { getAll } from "@/prisma/user";
import { NextRequest, NextResponse } from "next/server";

// Get All Threads
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("user") || undefined;
  const page = Number(searchParams.get("page") || 1);
  const perPage = 8;

  try {
    const data = await getAll(perPage, page, userId);
    
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 404 });
  }
};
