import prisma from "@/lib/connect";
import { Prisma } from "@prisma/client";

/**
 * getAll
 * deleteOne(by Id)
 * createOne(content, threadSlug, userEmail)
 * voteOne(type, id, userEmail)
 */

// Get all vote of thread
export const getAll = async (threadSlug: string) => {
  const query: Prisma.ThreadVoteFindManyArgs = {
    where: {
      ...(threadSlug && { threadSlug }),
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  };

  const [threadVotes, upCount, downCount] = await prisma.$transaction([
    prisma.threadVote.findMany(query),
    prisma.threadVote.count({
      where: {
        AND: [{ ...(threadSlug && { threadSlug }) }, { type: "UPVOTE" }],
      },
    }),
    prisma.threadVote.count({
      where: {
        AND: [{ ...(threadSlug && { threadSlug }) }, { type: "DOWNVOTE" }],
      },
    }),
  ]);

  return {
    count: {
      UPVOTE: upCount,
      DOWNVOTE: downCount,
    },
    data: threadVotes,
  };
};

// Delete a comment
export const deleteOne = async (id: string) => {
  const data = await prisma.threadVote.delete({
    where: {
      id: id,
    },
  });
  return data;
};
