"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import GridCard from "@/components/about/grid-card";
import { SectionLayout } from "@/components/layouts/SectionLayout";

const AboutPage = () => {
  return (
    <div
      id="about-section"
      className={`container mx-auto flex flex-col flex-wrap md:flex-row justify-between items-center gap-4 py-36 px-4 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src="/land.jpg"
        //rectangle image
        width={250}
        height={550}
        alt="about"
        className="w-2/5 filter grayscale aspect-square"
      />
      <div className="container mx-auto px-4 w-1/3 text-start md:text-start md:w-1/2 text-black">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero sit amet nisl fringilla, auctor aliquet erat
          sollicitudin. Nullam nec libero auctor, ultrices odio id, semper
          libero
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
