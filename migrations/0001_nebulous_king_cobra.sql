ALTER TABLE "player" ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "player" ADD COLUMN "updated_at" timestamp with time zone DEFAULT now() NOT NULL;