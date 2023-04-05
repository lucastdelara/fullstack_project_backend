import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserRequest,
  IUserResponse,
  IUserUpdate,
} from "../../interfaces/user/userInterface";
import { IContactRequest } from "../../interfaces/contact/contactInterface";

// const respContactSchema: SchemaOf<IUserResponse> = yup.object().shape({
//   id: yup.string().notRequired(),
//   name: yup.string().notRequired(),
//   email: yup.string().email().notRequired(),
//   contact: yup.string().notRequired(),
//   isActive: yup.boolean().notRequired(),
//   createdAt: yup.date().notRequired(),
//   updatedAt: yup.date().notRequired(),
// });

// const listRespUserSchema = yup.array(respContactSchema);

const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  contact: yup.string().required(),
});

// export const updateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
//   email: yup.string().email().notRequired(),
//   name: yup.string().notRequired(),
//   password: yup.string().notRequired(),
//   contact: yup.string().notRequired(),
// });

export { contactSchema };
