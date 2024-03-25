import { createOne, getAll } from "@/prisma/category";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await getAll();

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 404 },
    );
  }
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  try {
    const data = await createOne(body);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 404 },
    );
  }
};
