"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import the Image component

const projects = [
  {
    title: "Cycleway Coffee",
    description: "A modern, responsive website for a coffee shop, featuring its menu, location, and unique offerings.",
    date: "2024",
    link: "https://www.cyclewaycoffee.net/",
    image: "/assets/coffee.png",
  },
  {
    title: "Quizzical",
    description: "An interactive quiz app with a modern design for playing trivia quizzes.",
    date: "2022",
    link: "https://quizzical-uz1g.vercel.app/",
    image: "/assets/quizz.png",
  },
  {
    title: "Naranj",
    description: "A restaurant website with a modern, responsive design and interactive features.",
    date: "2022",
    link: "https://www.naranj.ma/",
    image: "/assets/restu.png",
  },
  {
    title: "Urban Tyres",
    description: "A sleek, modern automotive website showcasing tire products and services.",
    date: "2023",
    link: "https://urbantyres.netlify.app/",
    image: "/assets/tyres.png",
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
              className="card bg-base-100 shadow-xl flex flex-col"
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
                  className="object-cover"
                />
              </figure>
              <div className="card-body flex flex-col">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <p className="text-sm text-gray-600 mb-4">Date: {project.date}</p>
                {/* <div>
                  <h6 className="text-black bg-white p-2 rounded gap-2 text-sm">{project.tool}</h6>
                </div> */}
                <div className="card-actions justify-end mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
