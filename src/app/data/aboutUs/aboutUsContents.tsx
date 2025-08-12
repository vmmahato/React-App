import type { AboutUsHeader, AchievementWithTitle } from "../../../types/aboutUs";
import { FaCrown } from "react-icons/fa";
import { LuMedal } from "react-icons/lu";
import { FaMasksTheater } from "react-icons/fa6";
import { RiShieldFlashFill } from "react-icons/ri";

export const aboutUsHeader: AboutUsHeader = {
  title: "About Us",
  description: `Welcome to our platform, where we are passionate about empowering
        individuals to master the world of design and development. We offer a wide range of 
        online courses designed to equip learners with the skills and knowledge needed to succeed 
        in the ever-evolving digital landscape.`,
};

export const achievement: AchievementWithTitle = {
  title: "Achievements",
  subtitle: `Our commitment to excellence has led us to achieve significant milestones 
        along our journey. Here are some of our notable achievements`,
  achievements: [
    {
      id: "1",
      icon: <FaCrown />,
      achievementContent: {
        title: "Trusted by Thousands",
        description: `We have successfully served thousands of students, 
                        helping them unlock their potential and achieve their career goals.`,
      },
    },
    {
      id: "2",
      icon: <LuMedal />,
      achievementContent: {
        title: "Award-Winning Courses",
        description: `Our courses have received recognition and accolades
            in the industry for their quality, depth of content, and effective teaching methodologies.`,
      },
    },
    {
      id: "3",
      icon: <FaMasksTheater />,
      achievementContent: {
        title: "Positive Student Feedback",
        description: `We take pride in the positive feedback we receive from our students, 
            who appreciate the practicality and relevance of our course materials.`,
      },
    },
    {
      id: "4",
      icon: <RiShieldFlashFill />,
      achievementContent: {
        title: "Industry Partnerships",
        description: `We have established strong partnerships with industry leaders, 
            enabling us to provide our students with access to the latest tools and technologies`,
      },
    },
  ],
};
