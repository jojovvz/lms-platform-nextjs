ALTER TABLE "course" ALTER COLUMN "studentsEnrolled" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "course" ALTER COLUMN "rating" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "course" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "course" DROP COLUMN "category";--> statement-breakpoint
ALTER TABLE "course" DROP COLUMN "duration";--> statement-breakpoint
ALTER TABLE "course" DROP COLUMN "level";--> statement-breakpoint
ALTER TABLE "course" DROP COLUMN "createdAt";--> statement-breakpoint
ALTER TABLE "course" DROP COLUMN "updatedAt";--> statement-breakpoint
ALTER TABLE "course" DROP COLUMN "isPublished";