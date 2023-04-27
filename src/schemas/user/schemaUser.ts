import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUser,
  IUserRequest,
  IUserUpdate,
} from "../../interfaces/user/userInterface";

const respUserSchema: yup.SchemaOf<IUser> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  contact: yup.string().notRequired(),
  isActive: yup.boolean().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

const listRespUserSchema = yup.array(respUserSchema);

const userSchema: yup.SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  contact: yup.string().required(),
});

export const updateSchema: yup.SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup.string().notRequired(),
  contact: yup.string().notRequired(),
});

export { respUserSchema, listRespUserSchema, userSchema };
