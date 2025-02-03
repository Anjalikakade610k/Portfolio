import React from "react";

const experienceData = [
  {
    company: "Rebecca Everlene Trust & CO., Seattle, WA",
    role: "Software Engineer",
    duration: "August 2024 - Present",
    description:
      "Developed several frontedn applications and secured admin authentication using Node.js and JWT, automated volunteer record management by integrating monday.com’s GraphQL API with Salesforce, and optimized a high-volume data pipeline for real-time syncing of 15,000+ records.",
    skills: [
      "Next.js",
      "Figma",
      "Node.js",
      "JWT",
      "GraphQL",
      "Salesforce",
      "API Optimization",
      "Distributed Storage",
    ],
    icon: "👩‍💻",
  },
  {
    company: "Crewasis, New York, NY",
    role: "Software Engineer",
    duration: "May 2023 - December 2023",
    description:
      "Developed an AI-powered Idea Generation platform, enabling users to brainstorm, refine, and execute innovative ideas efficiently. Built scalable backend APIs, optimized database queries, and integrated CI/CD pipelines for automated deployment.",
    skills: [
      "Java",
      "Next.js",
      "SpringBoot",
      "PostgreSQL",
      "CI/CD",
      "Git",
      "Docker",
      "Jenkins",
      "SonarQube",
      "AWS (SQS, SNS, S3, Lambda, API Gateway, DynamoDB)",
    ],
    icon: "👩‍💻",
  },
  {
    company: "Northeastern University, Boston, MA",
    role: "Graduate Teaching Assistant",
    duration: "January 2023 - May 2023",
    description:
      "Assisted in teaching 'Data Structures & Algorithms' course, guiding students through complex coding challenges and grading assignments. Conducted live debugging sessions to improve students' problem-solving skills.",
    skills: [
      "Python",
      "Java",
      "Data Structures",
      "Software Development",
      "Teaching",
    ],
    icon: "🎓",
  },
  {
    company: "Infotech, Pune, India",
    role: "Software Developer",
    duration: "Sep 2020 - December 2021",
    description:
      "Developed REST APIs with Java Spring Boot for real-time data synchronization, migrated monolithic applications to microservices with Docker, and optimized ETL pipelines for Oracle DB, reducing data ingestion time for millions of transactions.",
    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Docker",
      "ETL",
      "Oracle DB",
      "JUnit",
      "Selenium",
    ],
    icon: "🛡️",
  },
  {
    company: "I Knowledge Factory, Pune, India",
    role: "Software Developer",
    duration: "May 2019 - December 2019",
    description:
      "Developed and optimized frontend UI components for various enterprise applications, focusing on enhancing user experience and performance. Collaborated with backend engineers to design efficient RESTful APIs.",
    skills: [
      "React/Redux",
      "Angular",
      "Node.js",
      "UI/UX",
      "Figma",
      "SQL",
      "NoSQL",
      "AWS",
    ],
    icon: "👩‍💻",
  },
];

export default function ExperienceSection() {
  return (
    <section id ="experience" className="flex flex-col items-start justify-center gap-8 p-8">
      {/* Experience Section Title with Gradient */}
      <h2 className="text-2xl font-bold mb-4 md:text-5xl bg-gradient-to-r from-[#ea50dd] to-[#ff7eb3] bg-clip-text text-transparent">
        Experience
      </h2>

      {/* Experience Cards */}
      {experienceData.map((exp, index) => (
        <div
          key={index}
          className="bg-[#121212] p-6 rounded-lg shadow-md border-l-4 border-primary-500 w-full"
        >
          <h3 className="text-lg text-primary-400 font-semibold">
            {exp.icon} {exp.role} - {exp.company}
          </h3>
          <p className="italic text-primary-300">{exp.duration}</p>
          <h4 className="text-md text-white">{exp.description}</h4>
          <p className="text-sm text-gray-400 mt-2">
            Skills:{" "}
            <span className="text-primary-300">{exp.skills.join(", ")}</span>
          </p>
        </div>
      ))}
    </section>
  );
}
