import prisma from "@/lib/connect";

export const getAll = async (isExpired?: boolean, isStarted?: boolean) => {
  const data = await prisma.notification.findMany({
    where: {
      ...(isExpired && { isExpired}),
      ...(isStarted && { isStarted}),
    }
  });
  return data;
};

export const deleteOne = async (id: string) => {
  const data = await prisma.notification.delete({
    where: {
      id: id,
    },
  });
  return data;
};

interface CreateOne {
  title: string;
  content: string;
  startFrom: Date;
  endTo: Date;
  userEmail: string;
}

export const createOne = async (body: CreateOne) => {
  const data = await prisma.notification.create({
    data: {
      title: body.title,
      content: body.content,
      startFrom: body.startFrom,
      endTo: body.endTo,
      userEmail: body.userEmail,
    },
  });
  return data;
};
