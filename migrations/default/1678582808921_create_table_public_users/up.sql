CREATE TABLE "public"."users" ("id" serial NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "dob" text, "last_login" timestamptz, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."users" IS E'Users table';