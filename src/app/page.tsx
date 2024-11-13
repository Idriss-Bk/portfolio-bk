"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Silkscreen } from "next/font/google";
import Styles from "./style.module.css";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: ['400', '700'] });

export default function Home() {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-red-100 text-black px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center h-screen text-center">
        <div className={`${silkscreen.className}  text-[150px] md:text-[180px] lg:text-[220px] font-bold`}>
          BK
        </div>
        <p className={`${Styles.Myp} text-lg md:text-2xl lg:text-3xl mb-4`}>
          Shaping the Future with Code and Creativity
        </p>
        <p className="text-sm md:text-base lg:text-lg mb-8">
        Welcome to my portfolio! Here, you&#39;ll find a selection of projects that showcase my passion for technology and design, reflecting my commitment to creating exceptional digital experiences and innovative solutions.
        </p>
        <div className="flex gap-4">
          <Link href="/portfolio">
            <button className="px-6 py-3 rounded-lg border border-black bg-black text-white hover:bg-transparent hover:text-black transition duration-300">
              View My Work
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white transition duration-300">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
