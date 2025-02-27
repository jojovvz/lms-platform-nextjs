CREATE TABLE "payment" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"courseId" text NOT NULL,
	"amount" integer NOT NULL,
	"status" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
