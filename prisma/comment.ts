import prisma from "@/lib/connect";

/**
 * getAll
 * deleteOne(by Id)
 * createOne(content, threadSlug, userEmail)
 * voteOne(type, id, userEmail)
 */

// Get all comments of thread
export const getAll = async (threadSlug: string) => {
  const data = await prisma.comment.findMany({
    where: {
      ...(threadSlug && { threadSlug }),
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
      votes: {
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  return data;
};

// Delete a comment
export const deleteOne = async (id: string) => {
  const data = await prisma.comment.delete({
    where: {
      id: id,
    },
  });
  return data;
};

// Create a new comment
interface CreateComment {
  content: string;
  threadSlug: string;
  userEmail: string;
}
export const createOne = async (body: CreateComment) => {
  const data = await prisma.comment.create({
    data: {
      content: body.content,
      threadSlug: body.threadSlug,
      userEmail: body.userEmail,
    },
  });
  return data;
};

//Vote a comment
export const voteComment = async (
  type: "UPVOTE" | "DOWNVOTE",
  id: string,
  userEmail: string,
) => {
  // check if user already upvoted or downvoted
  const found = await prisma.commentVote.deleteMany({
    where: {
      type: type,
      commentId: id,
      userEmail: userEmail,
    },
  });
  if (found.count !== 0) return found;

  const data = await prisma.$transaction([
    prisma.commentVote.deleteMany({
      where: {
        commentId: id,
        userEmail: userEmail,
      },
    }),
    prisma.comment.update({
      where: {
        id: id,
      },
      data: {
        votes: {
          create: {
            type: type,
            userEmail: userEmail,
          },
        },
      },
    }),
  ]);
  return data;
};
