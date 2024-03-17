"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import GridCard from "@/components/about/grid-card";
import { SectionLayout } from "@/components/layouts/SectionLayout";

const AboutPage = () => {
  return (
    <SectionLayout
      bgColor={{
        type: "hex",
        value: "#f3ede6",
      }}
    >
      {/* Big heading with animation */}
      <motion.div
        className="text-[#222226] flex flex-col py-28 md:py-36 lg:py-44 items-center gap-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-3xl md:text-6xl md:leading-[70px] lg:text-7xl lg:leading-[90px] xl:text-8xl xl:leading-[110px] font-semibold text-start">
          Pioneering{" "}
          <span className="font-bolder-500 text-[#5656b1]">Helping</span>{" "}
          <span className="font-bold ">in the digital world.</span>
        </p>

        {/* First content section with animation */}
        <motion.div
          className="w-full flex flex-col items-center md:flex-row item-center justify-center gap-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-xs sm:text-sm md:text-xl w-full md:w-[50%]">
            {/* <span className=" text-3xl lg:text-5xl font-bold my-10 md:text-3xl max-w-60 w-full text-[#222226]">
              About US
            </span> */}
            Embark on the journey to your ideal living space with our exclusive
            real estate offerings. From urban retreats to countryside estates,
            unlock the door to your dream home today. Explore listings, schedule
            a viewing, and speak to our experts to turn your vision into
            reality.
          </p>
          <div className="w-full md:w-[50%]">
            <Image
              src="/11.jpg"
              width={500}
              height={500}
              alt="78"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Divider with animation */}
        <motion.div
          className="w-full max-w-4xl mx-auto border-t border-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        ></motion.div>

        {/* Second content section with animation */}
        <motion.div
          className="w-full flex flex-col items-center md:flex-row item-center justify-center gap-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-full md:w-[50%]">
            <Image
              src="/3.jpg"
              width={500}
              height={500}
              alt="78"
              className="object-cover"
            />
          </div>
          <p className="text-xs sm:text-sm md:text-xl w-full md:w-[50%]">
            Embark on the journey to your ideal living space with our exclusive
            real estate offerings. From urban retreats to countryside estates,
            unlock the door to your dream home today. Explore listings, schedule
            a viewing, and speak to our experts to turn your vision into
            reality.
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-4xl mx-auto border-t border-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        ></motion.div>

        {/* Grid of 3 on mobile show 1 with animation */}

        {/* Our Services Heading */}
        <motion.p
          className="text-3xl md:text-6xl md:leading-[70px] lg:text-7xl lg:leading-[90px] xl:text-8xl xl:leading-[110px] font-semibold text-start"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Our Services
        </motion.p>

        {/* Grid of Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6, staggerChildren: 0.2 }} // Stagger animation of children
        >
          <GridCard
            img="/1.jpg"
            title="Residential Sales & Leasing"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
          dolores asperiores unde voluptatum possimus non recusandae, rerum,
          omnis labore quam error voluptatem magni incidunt libero! Enim odit
          expedita harum ad."
          />
          <GridCard
            img="/11.jpg"
            title="Commercial Sales & Leasing"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
          dolores asperiores unde voluptatum possimus non recusandae, rerum,
          omnis labore quam error voluptatem magni incidunt libero! Enim odit
          expedita harum ad."
          />
          <GridCard
            img="/3.jpg"
            title="Project Marketing"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
          dolores asperiores unde voluptatum possimus non recusandae, rerum,
          omnis labore quam error voluptatem magni incidunt libero! Enim odit
          expedita harum ad."
          />
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
};

export default AboutPage;
