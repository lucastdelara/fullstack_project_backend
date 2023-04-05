import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IUser, IUserUpdate } from '../../interfaces/user/userInterface';
import { respUserSchema } from '../../schemas/user/schemaUser';

const updateUserService = async (
  userData: IUserUpdate,
  userId: string
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!findUser) {
    throw new AppError('User not found', 404);
  }

  const userUpdate = userRepository.create({...findUser, ...userData});
  await userRepository.save(userUpdate);

  const findUserResponse = await userRepository.findOneBy({
    id: userId,
  });

  const response = await respUserSchema.validate(findUserResponse, {
    stripUnknown: true,
  });

  return response;
};

export default updateUserService;
