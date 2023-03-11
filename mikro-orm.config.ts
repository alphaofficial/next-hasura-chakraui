import "dotenv-flow/config";
import { Options } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";

const { PG_USER, PG_HOST, PG_PASSWORD, PG_PORT, PG_DATABASE_NAME } =
  process.env;
const config: Options = {
  entities: ["./dist/database/entities/*.{ts,js}"],
  entitiesTs: ["./src/database/entities/*.{ts,js}"],
  dbName: PG_DATABASE_NAME || "postgres",
  type: "postgresql",
  host: PG_HOST || "localhost",
  password: PG_PASSWORD || "",
  port: Number(PG_PORT) || 5432,
  user: PG_USER || "postgres",
  debug: true,
  allowGlobalContext: true,
  migrations: {
    tableName: "mikorm_migrations",
    path: "dist/database/migrations",
    pathTs: "src/database/migrations",
  },
  schema: "public",
  metadataProvider: TsMorphMetadataProvider,
};

export default config;
