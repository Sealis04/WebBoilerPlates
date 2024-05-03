import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  out:"./drizzle.ts",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["webboilerplate_*"],
} satisfies Config;
