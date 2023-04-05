import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors/appError';
import { Contact } from '../../entities/contact.entity';

const ensureExistContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const ensureExistId = await contactRepository.findOneBy({ id: req.params.id });

  if (!ensureExistId) {
    throw new AppError('User not exist', 400);
  }

  next();
};

export { ensureExistContactMiddleware };
