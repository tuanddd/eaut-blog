import { deleteOne, editOne } from "@/prisma/category";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  const { slug } = params;

  try {
    const data = await deleteOne(slug);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some thing went wrong" },
      { status: 404 },
    );
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  const body = await req.json();
  const { slug } = params;  

  try {
    const data = editOne(slug, body);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some thing went wrong" },
      { status: 404 },
    );
  }
};
