import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { IContact, IContactRequest } from "../../interfaces/contact/contactInterface";
import { respUserSchema } from "../../schemas/user/schemaUser";

const createContactService = async (
  date: IContactRequest, idUser: string
): Promise<IContact> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const findUser = await userRepository.findOneBy({ id: idUser });
  
  const createContact = contactRepository.create({...date, users: findUser!});
  await contactRepository.save(createContact);

  const resContact = await respUserSchema.validate(createContact, {
    stripUnknown: true,
  });

  return resContact;
};

export { createContactService };