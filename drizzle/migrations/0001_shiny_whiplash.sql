CREATE TABLE "courses" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"instructor" varchar(255) NOT NULL,
	"category" varchar(255) NOT NULL,
	"price" numeric(10, 2),
	"duration" varchar(255) NOT NULL,
	"level" varchar(50) NOT NULL,
	"thumbnailUrl" varchar(255) NOT NULL,
	"videoUrl" varchar(255),
	"studentsEnrolled" integer NOT NULL,
	"rating" numeric NOT NULL,
	"createdAt" date NOT NULL,
	"updatedAt" date NOT NULL,
	"isPublished" boolean NOT NULL
);
