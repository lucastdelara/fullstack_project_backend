import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import { AppError } from "../../errors/appError";

const ensureContactDataMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try{
        const ensureBodyContact = await schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true,
        });
  
        req.body = ensureBodyContact;
  
        next();
    } catch (error: any) {
        console.log(error);
        throw new AppError(error.errors, 400);
    }

};

export { ensureContactDataMiddleware };
