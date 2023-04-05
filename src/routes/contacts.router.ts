import { Router } from "express";
import {ensureAuthMiddleware} from "../middlewares/users/ensureAuth.middleware";
import { createContactController, deleteContactController, listContactByIdController, listContactsController, updateContactController } from "../controllers/contacts.controller";
import { ensureExistContactMiddleware } from "../middlewares/contacts/ensureContactExists.middleware";
import { contactSchema } from "../schemas/contact/schemaUser";
import { ensureContactDataMiddleware } from "../middlewares/contacts/ensureContactData.middleware";

const contactRoutes = Router();

contactRoutes.get("", ensureAuthMiddleware, listContactsController);

contactRoutes.get("/:id",ensureAuthMiddleware, ensureExistContactMiddleware, listContactByIdController);

contactRoutes.patch("/:id",ensureAuthMiddleware, ensureExistContactMiddleware, updateContactController);

contactRoutes.post("", ensureAuthMiddleware, ensureContactDataMiddleware(contactSchema), createContactController);

contactRoutes.delete("/:id",ensureAuthMiddleware, ensureExistContactMiddleware, deleteContactController);

export default contactRoutes;