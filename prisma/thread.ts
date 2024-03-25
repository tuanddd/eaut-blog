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
  catSlug: string,
  postPerPage: number,
  page: number,
) => {
  const data = await prisma.thread.findMany({
    where: {
      ...(catSlug && { catSlug }),
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
  const found = await prisma.thread.findUnique({
    where: {
      slug: body.slug,
    },
  });
  if (found)
    return Response.json(null, { status: 400, statusText: "DUPLICATED" });

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
  const data = await prisma.thread.delete({
    where: {
      slug: slug,
    },
  });
  return data;
};

// Vote a thread
export const vote = async (
  type: "UPVOTE" | "DOWNVOTE",
  userEmail: string,
  slug: string,
) => {
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
