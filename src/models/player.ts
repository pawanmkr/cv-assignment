import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const player = pgTable("player", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 15 }),
  country: varchar("country", { length: 2 }),
  score: integer("score")
});

