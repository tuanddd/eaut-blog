import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(
  request: Request & { body: ReadableStream },
): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename") || "filename";

  try {
    const blob = await put(filename, request.body, {
      access: "public",
    });
    if (!blob) return NextResponse.json({ message: "Failed" }, { status: 401 });

    return NextResponse.json(blob);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
