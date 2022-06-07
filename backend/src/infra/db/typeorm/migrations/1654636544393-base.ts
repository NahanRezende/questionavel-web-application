import { MigrationInterface, QueryRunner } from 'typeorm'

export class base1654636544393 implements MigrationInterface {
  name = 'base1654636544393'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "logs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "stack" text NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_fb1b805f2f7795de79fa69340ba" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "surveyAnswers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "answer" character varying NOT NULL, "image" character varying, "surveyId" uuid NOT NULL, CONSTRAINT "PK_235c3edecc4405546e68d57f527" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "surveyResult" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "answer" character varying NOT NULL, "surveyId" uuid NOT NULL, "accountId" uuid NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_61755d77354e6315dc6f4e8a7ea" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "surveys" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP WITH TIME ZONE NOT NULL, "question" character varying NOT NULL, "accountId" uuid NOT NULL, CONSTRAINT "PK_1b5e3d4aaeb2321ffa98498c971" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "name" character varying NOT NULL, "password" character varying NOT NULL, "accessToken" character varying, CONSTRAINT "UQ_ee66de6cdc53993296d1ceb8aa0" UNIQUE ("email"), CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))')
    await queryRunner.query('ALTER TABLE "surveyAnswers" ADD CONSTRAINT "FK_7165f146a8cb95f52d514acef13" FOREIGN KEY ("surveyId") REFERENCES "surveys"("id") ON DELETE CASCADE ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "surveyResult" ADD CONSTRAINT "FK_1883cde28e63beef922198e49be" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "surveyResult" ADD CONSTRAINT "FK_c3eb4c90d63e327443efaeb3c78" FOREIGN KEY ("surveyId") REFERENCES "surveys"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "surveys" ADD CONSTRAINT "FK_24c00c39d44df1a476f3e413fda" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE NO ACTION')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "surveys" DROP CONSTRAINT "FK_24c00c39d44df1a476f3e413fda"')
    await queryRunner.query('ALTER TABLE "surveyResult" DROP CONSTRAINT "FK_c3eb4c90d63e327443efaeb3c78"')
    await queryRunner.query('ALTER TABLE "surveyResult" DROP CONSTRAINT "FK_1883cde28e63beef922198e49be"')
    await queryRunner.query('ALTER TABLE "surveyAnswers" DROP CONSTRAINT "FK_7165f146a8cb95f52d514acef13"')
    await queryRunner.query('DROP TABLE "accounts"')
    await queryRunner.query('DROP TABLE "surveys"')
    await queryRunner.query('DROP TABLE "surveyResult"')
    await queryRunner.query('DROP TABLE "surveyAnswers"')
    await queryRunner.query('DROP TABLE "logs"')
  }
}
