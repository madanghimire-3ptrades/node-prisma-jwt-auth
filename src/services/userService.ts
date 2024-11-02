import { db } from "../../prisma/db";

export const getAllUsers = async () => {
  return await db.user.findMany();
};
