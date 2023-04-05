import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IContact } from "../../interfaces/contact/contactInterface";
import { respUserSchema } from "../../schemas/user/schemaUser";

const listContactByIdService = async (idContact: string):Promise<IContact> => {
    const contactRepository = AppDataSource.getRepository(Contact);
    const findContactId = await contactRepository.findOneBy({id: idContact});

    const validateContact = await respUserSchema.validate(findContactId, {stripUnknown:true});
    return validateContact;
}

export default listContactByIdService;