import { createOne, getAll } from "@/prisma/thread";
import { NextRequest, NextResponse } from "next/server";

// Get All Threads
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const catSlug = searchParams.get("catSlug") || "";
  const userEmail = searchParams.get("userEmail") || "";
  const page = Number(searchParams.get("page") || 1);
  const POST_PER_PAGE = 6;
  
  try {
    const data = await getAll(POST_PER_PAGE, page, catSlug, userEmail);
    
    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 404 });
  }
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    const data = await createOne(body);

    if (data)
      return NextResponse.json(data, {
        status: data.status,
        statusText: data.statusText,
      });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 404 });
  }
};
