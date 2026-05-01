"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
   {
    title: "BeautyPool",
    description: "Beautypool: Your Interactive Beauty and Self-Care Hub",
    date: "2024",
    link: "https://www.beautypool.ae/",
    image: "/assets/beaty.png",
    url: "https://www.beautypool.ae/",
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Directus CMS"],
  },
  {
    title: "Naranj",
    description: "A restaurant website with a modern, responsive design and interactive features.",
    date: "2022",
    link: "https://www.naranj.ma/",
    image: "/assets/restu.webp",
    url: "https://www.naranj.ma/",
    tools: ["WordPress"],
  },
  {
    title: "Quizzical",
    description: "An interactive quiz app with a modern design for playing trivia quizzes.",
    date: "2022",
    link: "https://quizzical-uz1g.vercel.app/",
    image: "/assets/quizz.webp",
    url: "https://quizzical-uz1g.vercel.app/",
    tools: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Urban Tyres",
    description: "A sleek, modern automotive website showcasing tire products and services.",
    date: "2023",
    link: "http://tirespedia.com",
    image: "/assets/tyres.webp",
    url: "http://tirespedia.com",
    tools: ["Next.js", "Tailwind CSS", "GraphQL", "WordPress"],
  },
  {
    title: "Foud Recipes",
    description: "Discover and create delicious recipes with step-by-step guides and mouthwatering photos.",
    date: "2024",
    link: "https://www.foudrecipes.com/",
    image: "/assets/recipes.png",
    url: "https://www.foudrecipes.com/",
    tools: ["Next.js", "Tailwind CSS", , "GraphQL"],
  },
  {
    title: "Cycleway Coffee",
    description: "A modern, responsive website for a coffee shop, featuring its menu, location, and unique offerings.",
    date: "2024",
    link: "https://www.cyclewaycoffee.net/",
    image: "/assets/coffee.webp",
    url: "https://www.cyclewaycoffee.net/",
    tools: ["React", "Next.js", "Tailwind CSS", "GraphQL", "WordPress"],
  },
  {
    title: "Ben Jamil",
    description: "Libanes Food: An Interactive Culinary Platform",
    date: "2024",
    link: "https://libanes-food.vercel.app/",
    image: "/assets/restu-2.webp",
    url: "https://libanes-food.vercel.app/",
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Instore Fashion",
    description: "E-commerce project showcase.",
    date: "2024",
    link: "https://instorefashion.myshopify.com/",
    image: "",
    url: "https://instorefashion.myshopify.com/",
    tools: ["E-commerce"],
  },
  {
    title: "The Sagio",
    description: "E-commerce project showcase.",
    date: "2024",
    link: "https://thesagio.com/",
    image: "",
    url: "https://thesagio.com/",
    tools: ["E-commerce"],
  },
  {
    title: "Hexed Fashion",
    description: "E-commerce project showcase.",
    date: "2024",
    link: "https://hexedfashion.co.uk/",
    image: "",
    url: "https://hexedfashion.co.uk/",
    tools: ["E-commerce"],
  },
  {
    title: "Ulla Johnson",
    description: "Fashion niche project showcase.",
    date: "2024",
    link: "https://ullajohnson.com/",
    image: "",
    url: "https://ullajohnson.com/",
    tools: ["Fashion"],
  },
  {
    title: "Fashion Declare",
    description: "Fashion niche project showcase.",
    date: "2024",
    link: "https://fashiondeclare.com/",
    image: "",
    url: "https://fashiondeclare.com/",
    tools: ["Fashion"],
  },
  {
    title: "Amber Homes",
    description: "Business website project showcase.",
    date: "2024",
    link: "https://amberhomes-liart.vercel.app/",
    image: "",
    url: "https://amberhomes-liart.vercel.app/",
    tools: ["Vercel"],
  },
  {
    title: "Smartway",
    description: "Business website project showcase.",
    date: "2024",
    link: "https://smartway.ma",
    image: "",
    url: "https://smartway.ma",
    tools: ["Business"],
  },
  {
    title: "Emma Is Social",
    description: "Marketing website project showcase.",
    date: "2024",
    link: "https://emmaissocial.vercel.app/",
    image: "",
    url: "https://emmaissocial.vercel.app/",
    tools: ["Marketing"],
  },
  {
    title: "Gango Brand",
    description: "Brand website project showcase.",
    date: "2024",
    link: "https://gangobrand.com/en",
    image: "",
    url: "https://gangobrand.com/en",
    tools: ["Branding"],
  },
  {
    title: "Ghada",
    description: "Fashion niche project showcase.",
    date: "2024",
    link: "https://www.ghada.ma/",
    image: "",
    url: "https://www.ghada.ma/",
    tools: ["Fashion"],
  },
  {
    title: "Justyol",
    description: "Fashion niche project showcase.",
    date: "2024",
    link: "https://justyol.com/",
    image: "",
    url: "https://justyol.com/",
    tools: ["Fashion"],
  },
  {
    title: "Lemaire",
    description: "Fashion niche project showcase.",
    date: "2024",
    link: "https://www.lemaire.fr/",
    image: "",
    url: "https://www.lemaire.fr/",
    tools: ["Fashion"],
  },
  {
    title: "Fashion Clinic",
    description: "Fashion niche project showcase.",
    date: "2024",
    link: "https://fashionclinic.com/",
    image: "",
    url: "https://fashionclinic.com/",
    tools: ["Fashion"],
  },
  {
    title: "Chula Fashion",
    description: "Fashion niche project showcase.",
    date: "2024",
    link: "https://chulafashion.myshopify.com/",
    image: "",
    url: "https://chulafashion.myshopify.com/",
    tools: ["Fashion"],
  },
  {
    title: "Fashion Fusion",
    description: "Fashion niche project showcase.",
    date: "2024",
    link: "https://www.fashionfusion.co.za/",
    image: "",
    url: "https://www.fashionfusion.co.za/",
    tools: ["Fashion"],
  },
  {
    title: "Shaping New Tomorrow",
    description: "Fashion niche project showcase.",
    date: "2024",
    link: "https://shapingnewtomorrow.com/",
    image: "",
    url: "https://shapingnewtomorrow.com/",
    tools: ["Fashion"],
  },
  {
    title: "YourTech",
    description: "Technology niche project showcase.",
    date: "2024",
    link: "https://www.yourtech.ma/",
    image: "",
    url: "https://www.yourtech.ma/",
    tools: ["Technology"],
  },
  {
    title: "Tech Tiger",
    description: "Technology niche project showcase.",
    date: "2024",
    link: "https://www.tech-tiger.co.uk/",
    image: "",
    url: "https://www.tech-tiger.co.uk/",
    tools: ["Technology"],
  },
  {
    title: "Tech Space",
    description: "Technology niche project showcase.",
    date: "2024",
    link: "https://techspace.ma/",
    image: "",
    url: "https://techspace.ma/",
    tools: ["Technology"],
  },
  {
    title: "Garnish Online",
    description: "Technology niche project showcase.",
    date: "2024",
    link: "https://garnishonline.myshopify.com/",
    image: "",
    url: "https://garnishonline.myshopify.com/",
    tools: ["Technology"],
  },
  {
    title: "Comda Tech Collection",
    description: "Technology niche project showcase.",
    date: "2024",
    link: "https://www.comda.com/collections/tech",
    image: "",
    url: "https://www.comda.com/collections/tech",
    tools: ["Technology"],
  },
  {
    title: "Renee's Garden",
    description: "Gardening niche project showcase.",
    date: "2024",
    link: "https://www.reneesgarden.com/",
    image: "",
    url: "https://www.reneesgarden.com/",
    tools: ["Gardening"],
  },
  {
    title: "Seeds Now",
    description: "Gardening niche project showcase.",
    date: "2024",
    link: "https://seedsnow.myshopify.com/",
    image: "",
    url: "https://seedsnow.myshopify.com/",
    tools: ["Gardening"],
  },
  {
    title: "Garden In Minutes",
    description: "Gardening niche project showcase.",
    date: "2024",
    link: "https://gardeninminutes.com/",
    image: "",
    url: "https://gardeninminutes.com/",
    tools: ["Gardening"],
  },
  {
    title: "The Happy Gardening Life",
    description: "Gardening niche project showcase.",
    date: "2024",
    link: "https://thehappygardeninglife.com/",
    image: "",
    url: "https://thehappygardeninglife.com/",
    tools: ["Gardening"],
  },
  {
    title: "Team Grow",
    description: "Gardening niche project showcase.",
    date: "2024",
    link: "https://teamgrow.us/",
    image: "",
    url: "https://teamgrow.us/",
    tools: ["Gardening"],
  },
  {
    title: "Swan Hose",
    description: "Gardening niche project showcase.",
    date: "2024",
    link: "https://swanhose.com/",
    image: "",
    url: "https://swanhose.com/",
    tools: ["Gardening"],
  },
  
  
];

const ProjectCard = ({ project }) => {
  const [hasImageError, setHasImageError] = React.useState(false);
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <motion.div
      key={project.title}
      className="card bg-white shadow-xl flex flex-col rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <figure>
        {hasImageError ? (
          <div className="object-cover w-full bg-gray-300" style={{ aspectRatio: "3 / 2" }} />
        ) : (
          <img
            src={screenshotUrl}
            alt={project.title}
            className="object-cover w-full"
            onError={() => setHasImageError(true)}
          />
        )}
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
                className="bg-black text-white px-2 py-1 rounded hover:bg-white border border-black hover:text-black transition duration-300"
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
            className="text-black  hover:bg-black hover:text-white border border-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

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
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
