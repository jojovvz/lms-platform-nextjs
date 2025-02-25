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

interface CourseProps {
    id: string;
    title: string;
    description: string;
    instructor: string;
    price?: number;
    thumbnailUrl: string;
    studentsEnrolled: number;
    rating: number;
    videoUrl: string;
    discount?: number;
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
    return (
        <Card className="sm:w-[35vw] lg:w-full p-4 shadow-sm shadow-lightblue">
            <Image
                alt=""
                src={thumbnailUrl}
                width={400}
                height={300}
                className="w-full rounded"  
            />
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-full flex items-center justify-between">
                    <div>
                        <div>By <span className="font-semibold">{instructor}</span></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-2xl font-semibold">${price}</div>
                        <div className="line-through flex justify-end">$100</div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between gap-2">
                <Button content="Enroll Now" className="w-full" />
                <Button content="View Details" className="w-full" secondary />
            </CardFooter>
        </Card>
    );
};

export default Course;
