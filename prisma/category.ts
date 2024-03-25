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
  const data = await prisma.category.delete({
    where: {
      slug: slug,
    },
  });
  return data;
};

// Create a new category
interface CreateCategory {
  title: string;
  slug: string;
  color: "sky" | "rose" | "red" | "purple" | "yellow" | "green";
}
export const createOne = async (body: CreateCategory) => {
  const data = await prisma.category.create({
    data: { ...body },
  });
  return data;
};

export const editOne = async (slug: string, body: any) => {
  const data = await prisma.category.update({
    where: {
      slug: slug,
    },
    data: { ...body },
  });
  return data;
};
