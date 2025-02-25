import React from "react";
import Course from "@/components/ui/Course";
import { getCourses } from "./app/actions/getCourses";
import { CourseType } from "./types/course";
import Loader from "./components/ui/Loader";
import { findInstructor } from "./app/actions/findInstructor";

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
        {courses.length > 0 ? courses.map((course) => (
          <Course
            id={course.id}
            title={course.title}
            description={course.description}
            videoUrl={course.video as any}
            thumbnailUrl={course.thumbnail || ""}
            price={course.price as any}
            discount={course.discount as any}
            studentsEnrolled={course.studentsEnrolled as any}
            rating={course.rating as any} 
            instructor={course.instructor}
            key={course.id}
           />
        )) : <div className="w-full flex justify-center items-center"><Loader /></div>}
      </div>
    </div>
  );
};

export default Explore;
