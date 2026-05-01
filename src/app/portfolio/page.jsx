"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Amber Homes",
    description: "Real-estate platform with dynamic listings, smooth animations, and scalable data management.",
    date: "09/2025",
    link: "https://amberhomes-liart.vercel.app/",
    image: "",
    url: "https://amberhomes-liart.vercel.app/",
    tools: ["React", "Next.js", "Tailwind CSS", "GSAP", "MySQL"],
  },
  {
    title: "Emma Is Social",
    description: "Modern marketing website focused on social growth services with engaging animations.",
    date: "03/2026",
    link: "https://emmaissocial.vercel.app/",
    image: "",
    url: "https://emmaissocial.vercel.app/",
    tools: ["React", "Next.js", "Tailwind CSS", "GSAP"],
  },
  
  {
    title: "Naranj",
    description: "A restaurant website with a modern, responsive design and interactive features.",
    date: "11/2022",
    link: "https://www.naranj.ma/",
    image: "/assets/restu.webp",
    url: "https://www.naranj.ma/",
    tools: ["WordPress", "GraphQL"],
  },
  {
    title: "Quizzical",
    description: "An interactive quiz app with a modern design for playing trivia quizzes.",
    date: "03/2023",
    link: "https://quizzical-uz1g.vercel.app/",
    image: "/assets/quizz.webp",
    url: "https://quizzical-uz1g.vercel.app/",
    tools: ["React.js", "Tailwind CSS"],
  },
  

 
  {
    title: "BenJamil",
    description: "Restaurant website built with WordPress and GraphQL integration.",
    date: "11/2024",
    link: "https://benjamil.com/",
    image: "",
    url: "https://benjamil.com/",
    tools: ["WordPress", "GraphQL"],
  },
  {
    title: "Instore Fashion",
    description: "Shopify fashion store with a clean shopping experience and optimized product browsing.",
    date: "02/2026",
    link: "https://instorefashion.myshopify.com/",
    image: "",
    url: "https://instorefashion.myshopify.com/",
    tools: ["Shopify"],
  },
  {
    title: "The Sagio",
    description: "Shopify-based fashion storefront focused on brand style and smooth customer journey.",
    date: "07/2025",
    link: "https://thesagio.com/",
    image: "",
    url: "https://thesagio.com/",
    tools: ["Shopify"],
  },
  {
    title: "Urban Tyres",
    description: "A sleek, modern automotive website showcasing tire products and services.",
    date: "09/2023",
    link: "http://tirespedia.com",
    image: "/assets/tyres.webp",
    url: "http://tirespedia.com",
    tools: ["Next.js", "Tailwind CSS", "GraphQL", "WordPress"],
  },
  {
    title: "Foud Recipes",
    description: "Discover and create delicious recipes with step-by-step guides and mouthwatering photos.",
    date: "01/2025",
    link: "https://www.foudrecipes.com/",
    image: "/assets/recipes.png",
    url: "https://www.foudrecipes.com/",
    tools: ["Next.js", "Tailwind CSS", , "GraphQL"],
  },
  {
    title: "Hexed Fashion",
    description: "Modern Shopify fashion website with curated collections and responsive layout.",
    date: "10/2024",
    link: "https://hexedfashion.co.uk/",
    image: "",
    url: "https://hexedfashion.co.uk/",
    tools: ["Shopify"],
  },
  {
    title: "Ulla Johnson",
    description: "Shopify fashion project with premium visuals and collection-focused browsing.",
    date: "04/2026",
    link: "https://ullajohnson.com/",
    image: "",
    url: "https://ullajohnson.com/",
    tools: ["Shopify"],
  },
 
  {
    title: "BeautyPool",
    description: "Beautypool: Your Interactive Beauty and Self-Care Hub",
    date: "06/2024",
    link: "https://www.beautypool.ae/",
    image: "/assets/beaty.png",
    url: "https://www.beautypool.ae/",
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Directus CMS"],
  },
  {
    title: "Fashion Declare",
    description: "Shopify fashion platform built for storytelling, product discovery, and conversion.",
    date: "05/2025",
    link: "https://fashiondeclare.com/",
    image: "",
    url: "https://fashiondeclare.com/",
    tools: ["Shopify"],
  },
 
  {
    title: "Smartway",
    description: "Business website project showcase.",
    date: "01/2026",
    link: "https://smartway.ma",
    image: "",
    url: "https://smartway.ma",
    tools: ["Business"],
  },
  {
    title: "Ben Jamil",
    description: "Libanes Food: An Interactive Culinary Platform",
    date: "12/2024",
    link: "https://libanes-food.vercel.app/",
    image: "/assets/restu-2.webp",
    url: "https://libanes-food.vercel.app/",
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
 
  {
    title: "Gango Brand",
    description: "Shopify brand storefront with polished visuals and conversion-oriented shopping flow.",
    date: "11/2025",
    link: "https://gangobrand.com/en",
    image: "",
    url: "https://gangobrand.com/en",
    tools: ["Shopify"],
  },
  {
    title: "Ghada",
    description: "Shopify fashion niche website with product-first layout and mobile-friendly shopping.",
    date: "06/2023",
    link: "https://www.ghada.ma/",
    image: "",
    url: "https://www.ghada.ma/",
    tools: ["Shopify"],
  },
  
  {
    title: "Cycleway Coffee",
    description: "A modern, responsive website for a coffee shop, featuring its menu, location, and unique offerings.",
    date: "08/2024",
    link: "https://www.cyclewaycoffee.net/",
    image: "/assets/coffee.webp",
    url: "https://www.cyclewaycoffee.net/",
    tools: ["React", "Next.js", "Tailwind CSS", "GraphQL", "WordPress"],
  },
  {
    title: "Justyol",
    description: "Shopify fashion store tailored for modern catalog browsing and quick checkout.",
    date: "02/2024",
    link: "https://justyol.com/",
    image: "",
    url: "https://justyol.com/",
    tools: ["Shopify"],
  },
  {
    title: "Lemaire",
    description: "Shopify fashion project with minimalist presentation and premium e-commerce flow.",
    date: "08/2022",
    link: "https://www.lemaire.fr/",
    image: "",
    url: "https://www.lemaire.fr/",
    tools: ["Shopify"],
  },
  {
    title: "Fashion Clinic",
    description: "Shopify fashion website designed for clear product structure and clean UX.",
    date: "12/2023",
    link: "https://fashionclinic.com/",
    image: "",
    url: "https://fashionclinic.com/",
    tools: ["Shopify"],
  },
  {
    title: "Chula Fashion",
    description: "Shopify fashion storefront with focused merchandising and responsive design.",
    date: "07/2024",
    link: "https://chulafashion.myshopify.com/",
    image: "",
    url: "https://chulafashion.myshopify.com/",
    tools: ["Shopify"],
  },
  {
    title: "Fashion Fusion",
    description: "Shopify fashion niche store with strong visual hierarchy and smooth navigation.",
    date: "10/2022",
    link: "https://www.fashionfusion.co.za/",
    image: "",
    url: "https://www.fashionfusion.co.za/",
    tools: ["Shopify"],
  },
  {
    title: "Shaping New Tomorrow",
    description: "Shopify apparel storefront emphasizing product quality and conversion-focused UX.",
    date: "04/2025",
    link: "https://shapingnewtomorrow.com/",
    image: "",
    url: "https://shapingnewtomorrow.com/",
    tools: ["Shopify"],
  },
  {
    title: "YourTech",
    description: "Shopify technology store with structured product categories and streamlined purchase flow.",
    date: "09/2024",
    link: "https://www.yourtech.ma/",
    image: "",
    url: "https://www.yourtech.ma/",
    tools: ["Shopify"],
  },
  {
    title: "Tech Tiger",
    description: "Shopify tech niche website with clear product comparisons and modern e-commerce UI.",
    date: "05/2026",
    link: "https://www.tech-tiger.co.uk/",
    image: "",
    url: "https://www.tech-tiger.co.uk/",
    tools: ["Shopify"],
  },
  {
    title: "Tech Space",
    description: "Shopify-powered technology storefront with scalable catalog and responsive shopping experience.",
    date: "01/2023",
    link: "https://techspace.ma/",
    image: "",
    url: "https://techspace.ma/",
    tools: ["Shopify"],
  },
  {
    title: "Garnish Online",
    description: "Shopify tech store built for product discovery, trust, and conversion.",
    date: "03/2025",
    link: "https://garnishonline.myshopify.com/",
    image: "",
    url: "https://garnishonline.myshopify.com/",
    tools: ["Shopify"],
  },
  {
    title: "Comda Tech Collection",
    description: "Shopify tech collection page optimized for browsing accessories and gadgets.",
    date: "11/2024",
    link: "https://www.comda.com/collections/tech",
    image: "",
    url: "https://www.comda.com/collections/tech",
    tools: ["Shopify"],
  },
  {
    title: "Renee's Garden",
    description: "Shopify gardening store with seasonal product organization and user-friendly shopping.",
    date: "06/2022",
    link: "https://www.reneesgarden.com/",
    image: "",
    url: "https://www.reneesgarden.com/",
    tools: ["Shopify"],
  },
  {
    title: "Seeds Now",
    description: "Shopify gardening niche storefront focused on seed collections and easy checkout.",
    date: "08/2025",
    link: "https://seedsnow.myshopify.com/",
    image: "",
    url: "https://seedsnow.myshopify.com/",
    tools: ["Shopify"],
  },
  {
    title: "Garden In Minutes",
    description: "Shopify garden tools website with practical product filtering and responsive UX.",
    date: "02/2023",
    link: "https://gardeninminutes.com/",
    image: "",
    url: "https://gardeninminutes.com/",
    tools: ["Shopify"],
  },
  {
    title: "The Happy Gardening Life",
    description: "Shopify gardening storefront designed for educational product discovery and conversion.",
    date: "07/2026",
    link: "https://thehappygardeninglife.com/",
    image: "",
    url: "https://thehappygardeninglife.com/",
    tools: ["Shopify"],
  },
  {
    title: "Team Grow",
    description: "Shopify gardening project with clean layout, clear categories, and optimized shopping flow.",
    date: "04/2024",
    link: "https://teamgrow.us/",
    image: "",
    url: "https://teamgrow.us/",
    tools: ["Shopify"],
  },
  {
    title: "Swan Hose",
    description: "Shopify gardening store focused on durable products and frictionless purchasing.",
    date: "10/2025",
    link: "https://swanhose.com/",
    image: "",
    url: "https://swanhose.com/",
    tools: ["Shopify"],
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
