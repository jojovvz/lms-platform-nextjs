import React from "react";
import Course from "@/components/ui/Course";
import { getCourses } from "./app/actions/getCourses";
import { CourseType } from "./types/course";

const Explore = () => {
  const [courses, setCourses] = React.useState<CourseType[]>([]);
  React.useEffect(() => {
    getCourses().then((data) => {
      setCourses(data);
    });
  }, []);
  console.log(courses);
  return (
    <div className="w-full py-10 px-5">
      <div className="grid grid-cols-2 gap-4">
        {courses.map((course) => (
          <Course
            id={course.id}
            title={course.title}
            description={course.description}
            video={course.video as any}
            thumbnailUrl={course.thumbnail}
            price={course.price}
            discount={course.discount}
            studentsEnrolled={course.studentsEnrolled as any}
            rating={course.rating as any} 
            createdAt={course.createdAt as any}
            updatedAt={course.updatedAt as any}
           />
        ))}
      </div>
    </div>
  );
};

export default Explore;
