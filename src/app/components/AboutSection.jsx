"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Languages: Java, JavaScript, Python, C/C++, HTML5/CSS </li>
        <li>
          Frameworks: SpringBoot, Node.js, React.js, Next.js, Angular.js, Swift
          UI
        </li>
        <li>Databse: MySQL, Oracle, PostgreSQL, PL/SQL, MongoDB</li>
        <li>Operating System: Windows, Linux, macOS</li>
        <li>
          Cloud Technologies: Docker, Kubernetes, Jenkins, Git, AWS, Azure, GCP
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="list-disc pl-2">
        <h3 className="mt-4">Northeastern University, Boston, USA</h3>
        <p>Major: Computer Software Engineering, 2022-2024</p>

        <h3 className="mt-4">University of Pune, India</h3>
        <p>Major: Electronics /& Telecommunication, 2017-2021</p>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-4 md:text-5xl bg-gradient-to-r from-[#ea50dd] to-[#ff7eb3] bg-clip-text text-transparent">About Me</h2>
          <p className="text-base lg:text-lg">
            🚀 I am a dedicated Software Developer with a Master’s degree
            in Computer Software Engineering from Northeastern University and
            hands-on experience in building efficient & reliable applications.
            I enjoy solving problems, learning new skills & taking on
            challenges that help me grow. I approach every project with
            **attention to detail, adaptability, and a focus on user
            experience**. I work well in teams, value collaboration, and always
            strive to improve my skills. Excited to build impactful
            solutions—let’s create something great together!
          </p>
          <div className="flex flex-row justify-start mt-8 text-white border-primary-500">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
