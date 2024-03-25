import prisma from "@/lib/connect";

/**
 * getAll
 * getAll(by Slug)
 * createOne(by body)
 * delete one(by slug)
 * vote (type, userEmail, slug)
 *
 */

// Get a list of threads
export const getAll = async (
  postPerPage: number,
  page: number,
  catSlug: string,
  userEmail: string,
) => {
  const data = await prisma.thread.findMany({
    where: {
      ...(catSlug && { catSlug }),
      ...(userEmail && { userEmail }),
    },
    include: {
      user: {
        select: {
          email: true,
          name: true,
          image: true,
        },
      },
      _count: {
        select: {
          vote: true,
        },
      },
    },
    take: postPerPage,
    skip: postPerPage * (page - 1),
  });

  return data;
};

export const getOne = async (slug: string) => {
  const data = await prisma.thread.update({
    where: {
      slug: slug,
    },
    data: { views: { increment: 1 } },
    include: {
      user: {
        select: {
          email: true,
          name: true,
          image: true,
        },
      },
      vote: true,
    },
  });
  return data;
};

// Create a new thread
interface CreateThread {
  title: string;
  slug: string;
  desc?: string;
  content: string;
  thumbnail?: string;
  userEmail: string;
  catSlug: string;
}

export const createOne = async (body: CreateThread | any) => {
  //TODO: Check role first
  //First check if slug has already existed
  const found = await prisma.thread.findUnique({
    where: {
      slug: body.slug,
    },
  });
  if (found)
    return Response.json(null, { status: 400, statusText: "DUPLICATED" });

  // Create new Thread
  const data = await prisma.thread.create({
    data: {
      title: body.title,
      slug: body.slug,
      desc: body.desc,
      content: body.content,
      thumbnail: body.thumbnail,
      userEmail: body.userEmail,
      catSlug: body.catSlug,
    },
  });
  return Response.json(data, { status: 200, statusText: "SUCCESS" });
};

// Edit the thread
interface EditOne {
  title: string;
  content: string;
  thumbnail?: string;
  catSlug: string;
}
export const editOne = async (slug: string, body: EditOne) => {
  //TODO: Check role or Author of this Thread firstt
  const data = await prisma.thread.update({
    where: {
      slug: slug,
    },
    data: { ...body },
  });

  return data;
};

//Delete a thread
export const deleteOne = async (slug: string) => {
  //TODO: Check Role or Author of this Thread first
  // Delete all comment of thread first then delete thread
  const data = await prisma.$transaction([
    prisma.comment.deleteMany({
      where: { threadSlug: slug },
    }),
    prisma.thread.delete({
      where: {
        slug: slug,
      },
    }),
  ]);
  return data;
};

// Vote a thread
export const voteThread = async (
  type: "UPVOTE" | "DOWNVOTE",
  userEmail: string,
  slug: string,
) => {
  //TODO: Check User first then Replace userEmail with session

  const data = await prisma.thread.update({
    where: {
      slug: slug,
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
