import "dotenv-flow/config";
import { Client } from "pg";
import { faker } from "@faker-js/faker";

(async () => {
  const client = new Client({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE_NAME,
    port: Number(process.env.PG_PORT),
  });

  console.log("Connecting to database...");
  try {
    await client.connect();
    console.log("Connected to database");
    for (const _iterator of Array.from({ length: 500 })) {
      await client.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
        [
          faker.name.firstName(),
          faker.internet.email(),
          faker.internet.password(),
        ]
      );
    }

    // count users
    const { rows } = await client.query("SELECT COUNT(*) FROM users");
    console.log(rows[0].count); // 500
    if (rows[0].count !== "500") {
      throw new Error("Expected 500 users");
    }
    await client.end();
  } catch (error) {
    console.error(error);
    await client.end();
  }
})();
