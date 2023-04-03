import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { User } from './entities/user.entity';
const AppDataSource = new DataSource(
    process.env.NODE_ENV == 'test'
        ? {
              type: 'sqlite',
              database: ':memory:',
              synchronize: true,
              entities: ['src/entities/*.ts'],
          }
        : {
              type: 'postgres',
              host: process.env.PGHOST,
              database: process.env.PGDATABASE,
              username: process.env.PGUSER,
              password: process.env.PGPASSWORD,
              port: parseInt(process.env.PGPORT!),
              synchronize: false,
              logging: true,
              entities: [User, Contact],
              migrations: [],
          }
);
export { AppDataSource };