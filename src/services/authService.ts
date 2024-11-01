import { db } from "../../prisma/db";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import { UserDto } from "../dtos/userDto";

export const register = async (userData: UserDto) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await db.user.create({
    data: { email: userData.email, password: hashedPassword },
  });
  return generateToken(user.id);
};

export const login = async (userData: UserDto) => {
  const user = await db.user.findUnique({ where: { email: userData.email } });

  if (user && (await bcrypt.compare(userData.password, user.password))) {
    return generateToken(user.id);
  }
  throw new Error("Invalid email or password");
};
