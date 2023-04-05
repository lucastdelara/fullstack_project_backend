import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/appError';
import { IContact, IContactUpdate } from '../../interfaces/contact/contactInterface';
import { respUserSchema } from '../../schemas/user/schemaUser';

const updateContactService = async (
  contactData: IContactUpdate,
  contactId: string
): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const findContact = await contactRepository.findOneBy({
    id: contactId,
  });

  if (!findContact) {
    throw new AppError('Contact not found', 404);
  }

  const contactUpdate = contactRepository.create({...findContact, ...contactData});
  await contactRepository.save(contactUpdate);

  const findContactResponse = await contactRepository.findOneBy({
    id: contactId,
  });

  const response = await respUserSchema.validate(findContactResponse, {
    stripUnknown: true,
  });

  return response;
};

export default updateContactService;
