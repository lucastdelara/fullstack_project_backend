import { MigrationInterface, QueryRunner } from "typeorm";

export class updateContextTable1680655570162 implements MigrationInterface {
    name = 'updateContextTable1680655570162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "phone" TO "contact"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "contact" TO "phone"`);
    }

}
