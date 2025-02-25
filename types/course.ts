export interface CourseType {
    id: string;
    title: string;
    description: string;
    instructor: string;
    price?: number;
    discount?: number;
    thumbnail: string;
    video?: string;
    studentsEnrolled?: number;
    rating?: number;
    createdAt?: Date;
    updatedAt?: Date;
  }
  