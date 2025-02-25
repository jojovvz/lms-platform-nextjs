export interface UserType { 
    id: string; 
    name: string; 
    image: string | null; 
    email: string; 
    userRole: "USER" | "INSTRUCTOR" | null; 
    emailVerified: Date | null; 
    password: string | null; 
    phone: string | null; 
    bio: string | null; 
    createdAt: Date | null;
}