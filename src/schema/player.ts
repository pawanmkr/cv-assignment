import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

const player = pgTable("player", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 15 }),
  country: varchar("country", { length: 2 }),
  score: integer("score").default(0),
  created_at: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow()
});

export default player;
