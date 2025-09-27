import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Project = () => {
  const projects = [
    {
      src: "/NextWebsite.png",
      title: "Modern Next.js Portfolio",
      description:
        "A modern and responsive portfolio website built with Next.js, showcasing projects, skills, and contact information. Features include server-side rendering, dynamic routing, and a sleek UI design.",
      github: "https://github.com/mmk4-81/NextWebsite",
    },
    {
      src: "/CardImage.png",
      title: "Interactive Website Cards",
      description:
        "A collection of interactive and animated cards for websites, built using React and Framer Motion. Perfect for showcasing services, features, or team members in an engaging way.",
      github: "https://github.com/mmk4-81/InteractiveCards",
    },
    {
      src: "/SpaceWebsite.png",
      title: "Space Themed Website",
      description:
        "A visually stunning space-themed website with parallax scrolling effects and interactive elements. Built using HTML, CSS, and JavaScript for a captivating user experience.",
      github: "https://github.com/mmk4-81/SpaceWebsite",
    },
    {
      src: "/NextWebsite.png",
      title: "Modern Next.js Portfolio",
      description:
        "A modern and responsive portfolio website built with Next.js, showcasing projects, skills, and contact information. Features include server-side rendering, dynamic routing, and a sleek UI design.",
      github: "https://github.com/mmk4-81/NextWebsite",
    },
    {
      src: "/CardImage.png",
      title: "Interactive Website Cards",
      description:
        "A collection of interactive and animated cards for websites, built using React and Framer Motion. Perfect for showcasing services, features, or team members in an engaging way.",
      github: "https://github.com/mmk4-81/InteractiveCards",
    },
    {
      src: "/SpaceWebsite.png",
      title: "Space Themed Website",
      description:
        "A visually stunning space-themed website with parallax scrolling A collection of interactive and animated cards for websites, built using React and Framer Motion. Perfect for showcasing service effects and interactive elements. Built using HTML, CSS, and JavaScript for a captivating user experience.",
      github: "https://github.com/mmk4-81/SpaceWebsite",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-[20px] px-4">
      <h1
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r
          from-purple-500 to-cyan-500 py-[40px] text-center mt-5"
      >
        My Projects
      </h1>

      <div className="flex flex-wrap gap-6 justify-center w-full">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
