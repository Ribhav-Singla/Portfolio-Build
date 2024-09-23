"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CPU Scheduling Visualizer",
    description: "Interactive CPU Scheduling Visualizer for Algorithms",
    image: "/cpu_scheduling.png",
    tag: ["All", "DSA"],
    gitUrl: "https://github.com/Ribhav-Singla/CPU-Scheduling-Visualizer",
    previewUrl: "https://cpu-scheduling-visualizer-ribhav.vercel.app/",
  },
  {
    id: 2,
    title: "GraphRoute Decoder",
    description: "Shortest Path Decoder",
    image: "/graph.png",
    tag: ["All", "DSA"],
    gitUrl: "https://github.com/Ribhav-Singla/GraphRouteDecoder",
    previewUrl: "https://graph-route-decoder.vercel.app/",
  },
  {
    id: 3,
    title: "TicketFusion",
    description: "Event Management Platform",
    image: "/ticket.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ribhav-Singla/Ticket_Fusion",
    previewUrl: "https://ticket-fusion-djif.onrender.com/",
  },
  {
    id: 4,
    title: "Trivia Quiz App",
    description: "Dynamic Quiz App",
    image: "/quiz.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ribhav-Singla/trivia-Quiz-App",
    previewUrl: "https://trivia-quiz-app-eight.vercel.app/",
  },
  {
    id: 5,
    title: "Demo Shopping Cart",
    description: "UI/UX Shopping Cart",
    image: "/cart.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ribhav-Singla/Shopping-Cart",
    previewUrl: "https://shopping-cart-two-topaz.vercel.app/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag:string) => {
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
          name="DSA"
          isSelected={tag === "DSA"}
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
