import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/user/userInterface";
import jwt from "jsonwebtoken";

const loginUserService = async ({ email, password }: IUserLogin):Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email: email });
  if (!user) {
    throw new AppError("Password or email incorrect", 403);
  }

  if (user!.isActive === false) {
    throw new AppError("Inactive user", 400);
  }

  const checkPassword = await compare(password, user.password);
  if (!checkPassword) {
    throw new AppError("Password or email incorrect", 403);
  }

  const tokenUser = jwt.sign(
    { isActive: user.isActive },
    process.env.SECRET_KEY!,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );
  
  return tokenUser;
};

export { loginUserService };
