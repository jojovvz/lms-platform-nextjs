import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Button from '../Button';
import Image from 'next/image';
import AccuracyChart from './AccuracyChart';
import Tag from './Tag';


interface CourseProps {
    id: string;
    title: string;
    description: string;
    instructor: string;
    category: string;
    price?: number;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    thumbnailUrl: string;
    videoUrl?: string;
    content: {
        module: string;
        lessons: {
            id: string;
            title: string;
            videoUrl?: string;
            content: string;
        }[];
    }[];
    studentsEnrolled: number;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
    isPublished: boolean;
}



const Course: React.FC<CourseProps> = ({
    createdAt,
    description,
    duration,
    id,
    instructor,
    level,
    price,
    rating,
    studentsEnrolled,
    thumbnailUrl,
    title,
    updatedAt,
    videoUrl,
}) => {
    return (
        <Card className='sm:w-[35vw] lg:w-full p-4 shadow-sm shadow-lightblue'>
            <Image
                alt=''
                src='https://res.cloudinary.com/dfd1buulq/image/upload/v1735841217/y3phy69ge6szlaukyy0d.jpg'
                width={400}
                height={300}
                className='w-full rounded'  
             />
            <CardHeader>
                <CardTitle className='text-xl'>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='w-full flex items-center justify-between'>
                    <div>
                    <div>By <span className='font-semibold'>{instructor}</span></div>
                    <div>Level: <span className='font-medium'>{level}</span></div>
                    </div>
                    <div className=' flex flex-col'>
                        <div className='text-2xl font-semibold'>${price}</div>
                        <div className='line-through flex justify-end'>$100</div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between gap-2'>
                <Button
                    content="Enroll Now"
                    className='w-full'
                 />
                <Button
                    content="View Details"
                    className='w-full'
                    secondary
                 />
            </CardFooter>
        </Card>
    )
}

export default Course