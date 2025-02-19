"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Crypto-Currency Price Management System",
    description: "Skills: Java, SpringBoot, SQL, Java Swing",
    image: "/images/projects/crypto.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anjalikakade610k/CryptoPrice-Management-System",
    // previewUrl: "/",
  },
  {
    id: 2,
    title: "Day Care Management",
    description: "Skills: Design Pattern, Java, MySQL, SpringBoot",
    image: "/images/projects/daycare.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anjalikakade610k/CSYE6200_Group4_DayCareProject",
    // previewUrl: "/",
  },
  {
    id: 3,
    title: "Student Housing",
    description: "Skills: React.js, Redux, Node.js/Express.js, MongoDB, Postman, Auth0, Tailwind css",
    image: "/images/projects/Student.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anjalikakade610k/Student-Assitance-Web-Application",
    // previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Skills: Next.js, PostgresSQL, Node.js, AWS, Bootstrap",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Anjalikakade610k/Foodies--Your-Food-Corner-",
    // previewUrl: "/",
  },
  {
    id: 5,
    title: "Travel Buddy",
    description: "Authentication and CRUD operations",
    image: "/images/projects/travel.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anjalikakade610k/Travel-Partner",
    // previewUrl: "/",
  },
  {
    id: 6,
    title: "iOS SwiftUI",
    description: " ",
    image: "/images/projects/ios.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Anjalikakade610k/iOS-Development",
    // previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-2xl font-bold mb-4 md:text-5xl bg-gradient-to-r from-[#ea50dd] to-[#ff7eb3] bg-clip-text text-transparent">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              // previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
