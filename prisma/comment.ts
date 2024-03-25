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
  //TODO: Check User first then Replace userEmail with session

  const data = await prisma.comment.update({
    where: {
      id: id,
    },
    data: {
      vote: {
        create: {
          type: type,
          userEmail: userEmail,
        },
      },
    },
  });
  return data;
};
