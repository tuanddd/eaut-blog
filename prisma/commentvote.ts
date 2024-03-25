import prisma from "@/lib/connect";
import { Prisma } from "@prisma/client";

// Get all vote of comment
export const getAll = async (commentId: string) => {
  const query: Prisma.CommentVoteFindManyArgs = {
    where: {
      ...(commentId && { commentId }),
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  };

  const [commentVotes, upCount, downCount] = await prisma.$transaction([
    prisma.commentVote.findMany(query),
    prisma.commentVote.count({
      where: {
        AND: [{ ...(commentId && { commentId }) }, { type: "UPVOTE" }],
      },
    }),
    prisma.commentVote.count({
      where: {
        AND: [{ ...(commentId && { commentId }) }, { type: "DOWNVOTE" }],
      },
    }),
  ]);

  return {
    count: {
      UPVOTE: upCount,
      DOWNVOTE: downCount,
    },
    data: commentVotes,
  };
};

// Delete a comment
export const deleteOne = async (id: string) => {
  const data = await prisma.commentVote.delete({
    where: {
      id: id,
    },
  });
  return data;
};
