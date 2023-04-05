import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IContact } from "../../interfaces/contact/contactInterface";
import { listRespUserSchema } from "../../schemas/user/schemaUser";

const listContactsService = async (idUser: string): Promise<IContact[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.find({where:{id: idUser}, relations:{contacts:true}});

  const respUser = await listRespUserSchema.validate(user[0].contacts, {
    stripUnknown: true,
  });

  return respUser!;
};

export default listContactsService;
