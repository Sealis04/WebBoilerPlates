// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration
import { pgTableCreator,timestamp,
  varchar,  bigint,
  index, } from "drizzle-orm/pg-core";

/**
//  * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `webboilerplate_${name}`);

export const posts = createTable(
  "post",
  {
    id: bigint("id", { mode: "number" }).primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const users = createTable(
  "user",
  {
    id: bigint("id", { mode: "number" }).primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),
    username: varchar("username", { length: 256 }).notNull().unique(),
    password: varchar("password", { length: 256 }).notNull(),
  },
)