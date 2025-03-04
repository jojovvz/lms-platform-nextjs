import { db } from "@/drizzle/client";
import { courses, users, verificationTokens } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import bcrypt from 'bcryptjs';
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/app/actions/verification-email";
import { passwordResetEmail } from "@/app/actions/password-reset-email";

export const resolvers = {
    Query: {
        getCourses: async () => {
            const allCourses = await db.select()
                .from(courses);
            
            return allCourses
        },
        getMyCourses: async (
            _: unknown,
            args: { userId: string }
        ) => {
            const allCourses = await db.select()
                .from(courses)
                .where(eq(courses.instructor, args.userId));
            
            return allCourses
        }
    },
    Mutation: {
        createUser: async (
            _: unknown,
            args: { name: string; email: string; password: string }
        ) => {
            const existingUser = await db.select()
                .from(users)
                .where(eq(users.email, args.email));

            if (existingUser.length > 0) {
                throw new Error("User already exists!");
            }

            const hashedPassword = await bcrypt.hash(args.password, 10);

            const result = await db.insert(users)
                .values({
                    name: args.name,
                    email: args.email,
                    password: hashedPassword, 
                })
                .returning();

            const verificationToken = await generateVerificationToken(result[0].email);

            await sendVerificationEmail(result[0].email, verificationToken?.token as any);

            return result[0];
        },
        verifyUser: async (
            _: unknown,
            args: { token: string } 
        ) => {
            const tokenExists = await db.select()
                .from(verificationTokens)
                .where(eq(verificationTokens.token, args.token));

            if (!tokenExists) {
                throw new Error('Token Doesnot Exists!')
            }

            const updatedUser = await db.update(users)
                .set({
                    emailVerified: new Date()
                })
                .where(eq(users.email, tokenExists[0].email as any))
                .returning();

            await db.delete(verificationTokens)
                .where(eq(verificationTokens.id, tokenExists[0].id as any));

            return updatedUser[0];
        },
        onBoarding: async (
            _: unknown,
            args: { bio: string, phone: number, image: string, userId: string }
        ) => {
            const updatedUser = await db.update(users)
                .set({
                    bio: args.bio,
                    phone: args.phone as any,
                    image: args.image
                })
                .where(eq(users.id, args.userId))
                .returning();

            return updatedUser[0];
        },
        forgotPassword: async (
            _: unknown,
            args: { email: string }
        ) => {
            const user = await db.select()
                .from(users)
                .where(eq(users.email, args.email));

            if (!user[0]) {
                throw new Error('User doesnot Exists!');
            }

            const verificationToken = await generateVerificationToken(args.email);
            
            await passwordResetEmail(args.email, verificationToken.token);

            return user[0];
        },
        resetPassword: async (
            _: unknown,
            args: { password: string, token: string }
        ) => {
            try {
                const verificationToken = await db
                    .select()
                    .from(verificationTokens)
                    .where(eq(verificationTokens.token, args.token));
        
                if (!verificationToken.length) {
                    throw new Error("Invalid or expired token.");
                }
        
                const hashedPassword = await bcrypt.hash(args.password, 12);
        
                const updatedUser = await db
                    .update(users)
                    .set({ password: hashedPassword })
                    .where(eq(users.email, verificationToken[0].email as any))
                    .returning();
        
                if (!updatedUser.length) {
                    throw new Error("Failed to update password.");
                }
        
                await db
                    .delete(verificationTokens)
                    .where(eq(verificationTokens.id, verificationToken[0].id));
        
                return {
                    success: true,
                    message: "Password reset successfully.",
                    user: updatedUser[0], 
                };
            } catch (error: any) {
                throw new Error(error.message || "Failed to reset password.");
            }
        },
        createCourse: async (
            _: unknown,
            args: { title: string, description: string, instructor: string, price: number, discount: number, thumbnail: string, video: string }
        ) => {
            const course = await db.insert(courses)
                .values({
                    title: args.title,
                    description: args.description,
                    instructor: args.instructor,
                    price: args.price,
                    thumbnail: args.thumbnail,
                    video: args.video,
                    discount: args.discount
                })
                .returning();

            return course[0];
        },    
    },
}