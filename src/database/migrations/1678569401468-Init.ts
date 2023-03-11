import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1678569401468 implements MigrationInterface {
  name = "Init1678569401468";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "id" DROP DEFAULT`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid()`
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "users_pkey" ON "users" ("id") `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."users_pkey"`);
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "id" DROP DEFAULT`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`
    );
  }
}
