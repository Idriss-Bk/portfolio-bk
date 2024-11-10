"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Naranj",
    description: "A restaurant website with a modern, responsive design and interactive features.",
    date: "2022",
    link: "https://www.naranj.ma/",
    image: "/assets/restu.webp",
    tools: ["React.js", "GSAP", "Bootstrap"],
  },
  {
    title: "Quizzical",
    description: "An interactive quiz app with a modern design for playing trivia quizzes.",
    date: "2022",
    link: "https://quizzical-uz1g.vercel.app/",
    image: "/assets/quizz.webp",
    tools: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Urban Tyres",
    description: "A sleek, modern automotive website showcasing tire products and services.",
    date: "2023",
    link: "https://urbantyres.netlify.app/",
    image: "/assets/tyres.webp",
    tools: ["Next.js", "Tailwind CSS", "GraphQL", "WordPress"],
  },
  {
    title: "Cycleway Coffee",
    description: "A modern, responsive website for a coffee shop, featuring its menu, location, and unique offerings.",
    date: "2024",
    link: "https://www.cyclewaycoffee.net/",
    image: "/assets/coffee.webp",
    tools: ["React", "Next.js", "Tailwind CSS", "GraphQL", "WordPress"],
  },
  {
    title: "Ben Jamil",
    description: "Libanes Food: An Interactive Culinary Platform",
    date: "2024",
    link: "https://libanes-food.vercel.app/",
    image: "/assets/restu-2.webp",
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
];

const Portfolio = () => {
  return (
    <motion.div
      className="h-full flex flex-col items-center p-2 sm:p-4 md:p-8 lg:p-8 xl:p-18 bg-gradient-to from-gray-50 to-white"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-5xl mx-auto h-auto">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-[100px] md:text-[150px] lg:text-[200px] font-bold mb-4 text-black">My Work</h1>
          <p className="text-base md:text-lg lg:text-xl text-black">
            Explore a selection of my projects that showcase my skills and creativity in web development. Each project represents a unique challenge and solution that highlights my capabilities and passion for technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="card bg-white shadow-xl flex flex-col rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <figure>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
              </figure>
              <div className="card-body flex flex-col p-4">
                <h2 className="card-title text-2xl font-semibold">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
                <p className="text-sm text-gray-600 mb-2">Date: {project.date}</p>
                <div className="mb-4">
                  <h6 className="font-semibold text-gray-800">Tools:</h6>
                  <ul className="flex flex-wrap gap-2 text-sm text-gray-700">
                    {project.tools.map((tool) => (
                      <li
                        key={tool}
                        className="bg-black text-white px-2 py-1 rounded"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-actions justify-end mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
