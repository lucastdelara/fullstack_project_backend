import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const deleteContactService = async (idUser: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({ id: idUser });

  if (!findContact?.isActive) {
    throw new AppError("inactive contact", 400);
  }

  await contactRepository.softRemove(findContact);

  const respContactDeleted = await contactRepository.save({
    ...findContact,
    isActive: false,
  });

  return respContactDeleted;
};

export { deleteContactService };
