const courses = [
    {
      id: "1",
      title: "Mastering Next.js & Tailwind CSS",
      description: "Learn how to build modern web applications with Next.js and Tailwind CSS.",
      instructor: "John Doe",
      category: "Web Development",
      price: 49.99,
      duration: "10 hours",
      level: "Intermediate",
      thumbnailUrl: "https://via.placeholder.com/400x250",
      videoUrl: "https://example.com/course-video.mp4",
      content: [
        {
          module: "Introduction",
          lessons: [
            {
              id: "1-1",
              title: "Getting Started with Next.js",
              videoUrl: "https://example.com/lesson-1.mp4",
              content: "Overview of Next.js and its benefits.",
            },
          ],
        },
        {
          module: "Tailwind Basics",
          lessons: [
            {
              id: "1-2",
              title: "Styling with Tailwind CSS",
              videoUrl: "https://example.com/lesson-2.mp4",
              content: "Learn how to use utility-first CSS.",
            },
          ],
        },
      ],
      studentsEnrolled: 1200,
      rating: 4.5,
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-10"),
      isPublished: true,
    },
    {
      id: "2",
      title: "Full-Stack Development with Next.js",
      description: "A complete guide to building full-stack applications using Next.js, Node.js, and MongoDB.",
      instructor: "Jane Smith",
      category: "Full-Stack Development",
      price: 59.99,
      duration: "15 hours",
      level: "Advanced",
      thumbnailUrl: "https://via.placeholder.com/400x250",
      videoUrl: "https://example.com/course-video2.mp4",
      content: [
        {
          module: "Backend with Node.js",
          lessons: [
            {
              id: "2-1",
              title: "Building an API with Node.js",
              videoUrl: "https://example.com/lesson-3.mp4",
              content: "Learn how to create REST APIs using Express.",
            },
          ],
        },
      ],
      studentsEnrolled: 900,
      rating: 4.7,
      createdAt: new Date("2024-02-01"),
      updatedAt: new Date("2024-02-15"),
      isPublished: true,
    },
    {
      id: "3",
      title: "Advanced UI/UX with ShadCN & Aceternity",
      description: "Master modern UI/UX design principles using ShadCN and Aceternity UI.",
      instructor: "David Johnson",
      category: "UI/UX Design",
      price: 39.99,
      duration: "8 hours",
      level: "Beginner",
      thumbnailUrl: "https://via.placeholder.com/400x250",
      videoUrl: "https://example.com/course-video3.mp4",
      content: [
        {
          module: "Design Basics",
          lessons: [
            {
              id: "3-1",
              title: "Introduction to ShadCN UI",
              videoUrl: "https://example.com/lesson-4.mp4",
              content: "Learn how to use ShadCN UI components.",
            },
          ],
        },
      ],
      studentsEnrolled: 1500,
      rating: 4.8,
      createdAt: new Date("2024-03-01"),
      updatedAt: new Date("2024-03-10"),
      isPublished: true,
    },
  ];
  
  export default courses;
  