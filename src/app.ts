import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";

import { errorIdentify } from "./errors/appError";
import userRoutes from "./routes/users.router";
import loginRoutes from "./routes/login.router";
import contactRoutes from "./routes/contacts.router";

export const app = express();

app.use(express.json());

app.use(cors());

app.use('/login', loginRoutes);

app.use('/users', userRoutes);

app.use('/contacts', contactRoutes);

app.use(errorIdentify);
