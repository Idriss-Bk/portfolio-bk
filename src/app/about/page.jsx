"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BK from "../../../public/assets/driss.webp";


const Aboutpage = () => {
  const Skills = [
    { title: "HTML5" },
    { title: "CSS3" },
    { title: "JavaScript" },
    { title: "TypeScript" },
    { title: "React.js" },
    { title: "Next.js" },
    { title: "Tailwind CSS" },
    { title: "SCSS" },
    { title: "Liquid" },
    { title: "Node.js" },
    { title: "Express.js" },
    { title: "PHP" },
    { title: "REST APIs" },
    { title: "Shopify" },
    { title: "Directus" },
    { title: "Strapi" },
    { title: "WordPress" },
    { title: "MySQL" },
    { title: "MongoDB" },
    { title: "Docker" },
    { title: "Claude Code" },
    { title: "Cursor" },
    { title: "N8N" },
    { title: "Google AI Studio" },
    { title: "Antigravity" },
    { title: "Ollama" },
    { title: "Git" },
    { title: "Google Analytics" },
    { title: "Meta Pixel" },
    { title: "SEO Optimization" },
    { title: "Conversion Rate Optimization" },
    { title: "Responsive Design" },
    { title: "Automation Workflows" },
    { title: "Figma" },
  ];

  return (
    <motion.div
    className="h-200vh flex flex-col items-center p-2 sm:p-4 md:p-8 lg:p-8 xl:p-18 bg-gradient-to from-gray-100 to-white"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 0.8 }}
  >
      <div className="w-full max-w-4xl mx-auto h-auto ">
        {/* Intro */}
        <div className="lg:flex gap-12">
        <div className="lg:w-6/12 mb-12 text-black flex justify-center items-start flex-col">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 pl-4 pr-4 lg:pl-0 lg:pr-0">Biography</h1>
          <div>
          <div className="drop-blur-xl rounded-lg pl-4 pr-4 lg:pl-0 lg:pr-0">
          <p className="">
            Full-Stack Web Developer with 3+ years of experience building modern web applications and e-commerce platforms. Skilled in integrating AI tools and automation into development workflows to ship faster, smarter, and at higher quality. Experienced with React.js, Next.js, Node.js, and Shopify, with a strong focus on performance, SEO, and conversion optimization.
          </p>
          </div>
          </div>
        </div>
        <div className="lg:w-6/12 mb-16 text-center text-black">
        <div className="relative mask mask-squircle overflow-hidden rounded-md flex justify-start items-start">
            <Image
              className="w-full mask mask-squircle object-contain"
              src={BK}
              alt="Driss Boukdir"
              width={0}
              height={0}
              quality={100}
              objectFit="contain"
              layout="responsive"
            />
            <div className={`absolute inset-0 mask mask-squircle bg-gradient-to-t from-violet-700/45 to-transparent opacity-85`}></div>
          </div>
        </div>
        </div>
        {/* Skills */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">Skills</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {Skills.map((skill) => (
              <motion.div
                key={skill.title}
                className="bg-black text-white p-3 rounded-md hover:bg-white hover:text-black transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {skill.title}
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Experience */}
        <div className="text-black">
          <h1 className="text-2xl md:text-3xl font-bold p-5 text-black">Experience</h1>
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Full-Stack Developer</h2>
              <p className="text-base mt-2">Oct 2024 - Present</p>
              <p className="mt-2">BeeBoss, Dubai, UAE</p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed and optimized company websites and landing pages for performance and conversions</li>
                <li>Customized Shopify themes and managed products, variants, and collections</li>
                <li>Integrated payment gateways, analytics tools, and customer engagement features</li>
                <li>Leveraged Claude Code, Cursor, and Ollama to accelerate development and code quality</li>
                <li>Built automation workflows using N8N and Google AI Studio for internal operations</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Full-Stack Developer</h2>
              <p className="text-base mt-2">Jul 2023 - Sep 2024</p>
              <p className="mt-2">Menara Technology, Marrakech, Morocco</p>
              <ul className="list-disc list-inside mt-2">
                <li>Built and maintained 10+ platforms using React.js, Next.js, Node.js, and PHP</li>
                <li>Improved mobile performance by 20% through responsive UI/UX optimization</li>
                <li>Integrated databases and APIs to support dynamic content and operations</li>
                <li>Delivered end-to-end web solutions for clients across multiple industries</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Freelance Full-Stack Developer</h2>
              <p className="text-base mt-2">Nov 2022 - Jun 2023</p>
              <p className="mt-2">Remote</p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed 5+ business websites and online stores with custom features</li>
                <li>Implemented SEO strategies and improved platform performance</li>
                <li>Managed MySQL databases and provided technical support and maintenance</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Education & Certifications */}
        <div className="mt-12 text-black pl-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Education & Certifications</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold">Bachelor&#39;s Degree in Computer Development</h2>
              <p className="text-base mt-2">Ecole ISGA - 2023 to 2024</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Vocational Diploma in Computer Development</h2>
              <p className="text-base mt-2">Ecole Racine - 2021 to 2023</p>
            </div>
          </div>
        </div>
        <div className="mt-12"></div>
      </div>
    </motion.div>
  );
};

export default Aboutpage;