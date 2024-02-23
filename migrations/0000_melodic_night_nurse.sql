CREATE TABLE IF NOT EXISTS "player" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(15),
	"country" varchar(2),
	"score" integer DEFAULT 0
);
