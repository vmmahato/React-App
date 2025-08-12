import type { Course } from "../../../types/course";

export const courses: Course[]  = [
    {
        id: "01",
        title: "Project Management Fundamentals",
        description: "Project Management is an incredibly powerful skill, and pretty much everything in the world relies on it! ",
        imageSrc: "/images/course/img1.png",
        duration: "4 weeks",
        isFree: true,
        instructorName: "John Doe",
    },
    {
        id: "02",
        title: "Agile & Scrum Project Management Course",
        description: "Project Management is an incredibly powerful skill, and pretty much everything in the world relies on it! ",
        imageSrc: "/images/course/img2.png",
        duration: "6 weeks",
        isFree: false,
        instructorName: "Jane Smith",
        level: "Intermediate"
    },
    {
        id: "03",
        title: "Project Management Tool",
        description: "Project Management is an incredibly powerful skill, and pretty much everything in the world relies on it! ",
        imageSrc: "/images/course/img3.png",
        duration: "5 weeks",
        isFree: false,
        instructorName: "Alice Johnson"
    },
    {
        id: "04",
        title: "Finance Manager",
        description: "Project Management is an incredibly powerful skill, and pretty much everything in the world relies on it! ",
        imageSrc: "/images/course/img4.png",
        duration: "8 weeks",
        isFree: false,
        instructorName: "Michael Brown"
    }
]