import { voteComment } from "@/prisma/comment";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const { searchParams } = new URL(req.url);
  const userEmail = await req.json();
  const type = searchParams.get("type")?.toUpperCase() as "UPVOTE" | "DOWNVOTE";
  
  try {
    const res = await voteComment(type, params.id, userEmail);
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 404 });
  }
};
