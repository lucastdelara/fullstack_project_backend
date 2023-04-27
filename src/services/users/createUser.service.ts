import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import {
  IUserRequest,
  IUserResponse,
} from "../../interfaces/user/userInterface";
import { respUserSchema } from "../../schemas/user/schemaUser";

const createUserService = async (
  data: IUserRequest
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const createUser = userRepository.create(data);

  await userRepository.save(createUser);

  const resUser = await respUserSchema.validate(createUser, {
    stripUnknown: true,
  });

  return resUser;
};

export { createUserService };
