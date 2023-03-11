import "dotenv-flow/config";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const connectionOptions: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.PG_HOST || "localhost",
  port: Number(process.env.PG_PORT) || 5432,
  username: process.env.PG_USER || "postgres",
  password: process.env.PG_PASSWORD || "",
  database: process.env.PG_DATABASE_NAME || "postgres",
  synchronize: process.env.NODE_ENV !== "production",
  entities: ["./src/database/entities/*.{ts,js}"],
  migrations: ["./src/database/migrations/*{.ts,.js}"],
};

export default connectionOptions;
