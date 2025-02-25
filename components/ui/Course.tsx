'use client'

import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";
import Button from "../Button";
import Image from "next/image";
import React from "react";
import { findInstructor } from "@/app/actions/findInstructor";
import { UserType } from "@/types/user";

interface CourseProps {
    id: string;
    title: string;
    description: string;
    instructor: string;
    price: number;
    thumbnailUrl: string;
    studentsEnrolled: number;
    rating: number;
    videoUrl: string;
    discount: number;
}

const Course = ({ 
    id,
    title, 
    description, 
    instructor, 
    price, 
    thumbnailUrl, 
    studentsEnrolled, 
    rating,
    videoUrl,
    discount
}: CourseProps) => {
    const [courseInstructor, setCourseInstructor] = React.useState<UserType>();

    React.useEffect(() => {
        findInstructor(instructor).then((data) => {
            setCourseInstructor(data as any);
        });
    }, [instructor]);

    return (
        <Card className="w-full md:max-w-[35vw] sm:max-w-full p-4 shadow-sm shadow-lightblue">
            <Image
                alt=""
                src={thumbnailUrl}
                width={400}
                height={300}
                className="w-full rounded"  
            />
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-sm">{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-full flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
                    <div>
                        <div>By <span className="font-semibold">{courseInstructor?.name}</span></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-2xl font-semibold">${price-(discount/100)}</div>
                        <div className="line-through flex justify-center sm:justify-end">${price}</div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="w-full">
                <Button content="Enroll Now" className="w-full" />
            </CardFooter>
        </Card>
    );
};

export default Course;
