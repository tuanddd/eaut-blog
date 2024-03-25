import prisma from "@/lib/connect";

export const getAll = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const getOne = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id: id },
  });
  return user;
};

export const deleteOne = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id: id },
  });
  return user;
};

//TODO: Add user here
// interface CreateOne {
//   name: string;
//   email: string;
//   image?: string;
// }
// export const createOne = async (body: CreateOne) => {
//   const data = await prisma.user.create({
//     name: body.name,
//     email: body.email,
//     image: body.image,
//   });
// };
