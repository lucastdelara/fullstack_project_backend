import { Request, Response } from 'express';
import listContactsService from '../services/contacts/listContact.service';
import listContactByIdService from '../services/contacts/listContactById.service';
import { IContactRequest, IContactUpdate } from '../interfaces/contact/contactInterface';
import updateContactService from '../services/contacts/updateContact.service';
import { createContactService } from '../services/contacts/createContact.service';
import { deleteContactService } from '../services/contacts/deleteContact.service';

const listContactsController = async (req: Request, res: Response) => {
  const users = await listContactsService(req.user.id);
  return res.status(200).json(users);
};

const listContactByIdController = async (req: Request, res: Response) => {
  const contactId = req.params.id;
  const listIDContact = await listContactByIdService(contactId);
  return res.status(200).json(listIDContact);
};

const updateContactController = async (req: Request, res: Response) => {
  const contactData: IContactUpdate = req.body;
  const contactId = req.params.id;
  const updatedContact = await updateContactService(contactData, contactId);
  return res.status(200).json(updatedContact);
};

const createContactController = async (req: Request, res: Response) => {
  const contact: IContactRequest = req.body;
  const userId:string = req.user.id

  const createContact = await createContactService(contact, userId);
  return res.status(201).json(createContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const ContactId = req.params.id;
  const deleteContact = await deleteContactService(ContactId);
  return res.status(204).json({ message: deleteContact });
};

export {
  listContactsController,
  listContactByIdController,
  updateContactController,
  createContactController,
  deleteContactController,
};
