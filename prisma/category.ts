import prisma from "@/lib/connect";

/**
 * getAll
 * getOne(by slug)
 * deleteOne(by slug)
 * createOn
 */

// Get all categories
export const getAll = async () => {
  const data = await prisma.category.findMany({
    include: {
      _count: {
        select: {
          threads: true,
        },
      },
    },
  });
  return data;
};

// Get one category by slug
export const getOne = async (slug: string) => {
  const data = await prisma.category.findUnique({
    where: {
      slug: slug,
    },
  });

  return data;
};

// Delete a category
export const deleteOne = async (slug: string) => {
  //TODO: Delete all all commetn of threads first
  const data = await prisma.$transaction([
    prisma.thread.deleteMany({
      where: {
        catSlug: slug,
      },
    }),
    prisma.category.delete({
      where: {
        slug: slug,
      },
    }),
  ]);
  return data;
};

// Create a new category
interface CreateCategory {
  title: string;
  slug: string;
  color: "sky" | "rose" | "red" | "purple" | "yellow" | "green";
}
export const createOne = async (body: CreateCategory) => {
  //TODO: Auth role first
  const data = await prisma.category.create({
    data: { ...body },
  });
  return data;
};

export const editOne = async (id: string, body: any) => {
  //TODO: Auth role first
  const data = await prisma.category.update({
    where: {
      id: id,
    },
    data: { ...body },
  });
  return data;
};
