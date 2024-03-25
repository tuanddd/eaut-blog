import { getAll } from "@/prisma/notification";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const isExpired = Boolean(searchParams.get("isStarted") || false);
  const isStarted = Boolean(searchParams.get("isExpired") || false);

  try {
    const notifications = await getAll(isExpired, isStarted);
    return NextResponse.json(notifications, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 404 },
    );
  }
};
