import "dotenv/config";
import { Client } from "pg";
import { faker } from "@faker-js/faker";

(async () => {
  const client = new Client({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: Number(process.env.PGPORT),
  });
  await client.connect();
  try {
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
  } catch (error) {
    console.error(error);
  }
  await client.end();
})();
